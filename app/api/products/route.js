import startDB from "@/lib/db";
import ProductModel from "@/model/productModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    await startDB();

    const products = await ProductModel.find({});

    return NextResponse.json({
        products,
    });
};

export const POST = async (req) => {
    const body = await req.json();

    await startDB();

    try {
        // Create a new product in the database
        const product = await ProductModel.create({ ...body });

        return NextResponse.json({
            product: {
                name: product.name,
                description: product.description,
                img: product.img,
                price: product.price,
            },
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: "Error creating the product",
            },
            { status: 500 }
        );
    }
};
