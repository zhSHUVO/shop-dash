import startDB from "@/lib/db";
import ProductModel from "@/model/productModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params;

    await startDB();

    const product = await ProductModel.findById(id);

    return NextResponse.json({
        product,
    });
};
