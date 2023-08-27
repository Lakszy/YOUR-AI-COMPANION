import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prsimadb";

export async function POST(req: Request){
    try {
        const body = await req.json();
        const user = await currentUser();
        const {src, name, description, instructions, seed, categoryId}= body;
        
        if(!user || !user.id || !user.firstName){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!src || !name || !description || !categoryId || !seed || !instructions){
            return new NextResponse("Missing Required Fields",{status:400});
        }
    // To do: check for subscription
    

    const companion = await prismadb.companion.create({
        data:{
            categoryId,
            userId: user.id,
            userName:user.firstName,
            src,
            name,
            description,
            instructions,
            seed
        }
    });
    return NextResponse.json(companion);
    
    
    } catch (error) {
        console.log("[COMPANION_POST]",error);
        return new NextResponse("Internal Error",{status:500});
        
    }
}