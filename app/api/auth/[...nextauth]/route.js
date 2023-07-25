import startDB from "@/lib/db";
import UserModel from "@/model/userModel";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { phone, password } = credentials;
                await startDB();

                const user = await UserModel.findOne({ phone });
                if (!user) throw Error("Incorrect credentials");

                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error("Password dosen't match");

                return {
                    phone: user.phone,
                };
            },
        }),
    ],
    callbacks: {
        jwt(params) {
            if (params.user?.phone) {
                params.token.phone = params.user.phone;
                params.token.password = params.user.password;
            }
            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.phone = token.phone;
                session.user.password = token.password;
            }
            return session;
        },
    },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
