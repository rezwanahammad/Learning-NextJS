import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    return new Response("Hello from Profile API Route");
    
}