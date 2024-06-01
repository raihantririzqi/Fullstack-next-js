import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params } : {params : { id : number }}) => {
    const post = await prisma.post.findFirst({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json({ post })
}

export const PUT = async (req: NextRequest, { params } : {params : {id : number}}) => {
    const {title, content} = await req.json()
    const post = await prisma.post.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title, content
        }
    })
    return NextResponse.json({ post })
}

export const DELETE = async (req: NextRequest, { params } : {params : {id : number}}) => {
    const post = await prisma.post.delete({
        where: {
            id: Number(params.id)
        }
    })

}