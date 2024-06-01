import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, { params } : {params : { id : number }}) => {
    return NextResponse.json({ message: params.id });
}