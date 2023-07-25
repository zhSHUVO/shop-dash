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
