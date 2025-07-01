'use server';
// import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../Constants";
import { prisma } from "@/db/prisma";
//  Get Latest products
export async function getLatestProducts( ){
    const data = await prisma.product.findMany({
        take : LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt:'desc'}

    });

    return convertToPlainObject(data);
}


export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug }
    });

}

