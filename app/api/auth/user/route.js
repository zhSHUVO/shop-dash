import startDB from "@/lib/db";
import UserModel from "@/model/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();

    await startDB();

    const oldUser = await UserModel.findOne({ phone: body.phone });
    if (oldUser)
        return NextResponse.json(
            {
                error: "Phone number already in use!",
            },
            { status: 422 }
        );

    const user = await UserModel.create({ ...body });

    return NextResponse.json({
        user: {
            phone: user.phone,
        },
    });
};

export const GET = async () => {
    await startDB();
    
    const users = await UserModel.find({});

    return NextResponse.json({
        users,
    });
};
