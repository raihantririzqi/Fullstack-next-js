import { PrismaClient } from "@prisma/client";
import exp from "constants";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
    const posts = await prisma.post.findMany({});
    return NextResponse.json({ code : 200, message: 'Data Found',posts })
}

export const POST = async (req: NextRequest) => {
    const { title, content} = await req.json();

    const post = await prisma.post.create({
        data: {
            title,
            content
        }
    })

    return NextResponse.json({ post})
}