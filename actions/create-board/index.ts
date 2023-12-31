"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/db/prisma-client";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/dist/server/api-utils";
import { createSafeAction } from '../../lib/create-safe-action';
import { CreateBoard } from "./schema";

const handler = async(data:InputType):Promise<ReturnType> =>{
    const {userId} = auth();
    if(!userId){
        return{
            error:"UnAuthorized"
        }
    }
    const {title} = data;
    let board;
    try{
        board = await db.board.create({
        data:{
            title
        },
        })
    }catch(err){
        return{
            error:"Failed to create"
        }
    }   

    revalidatePath(`/board/${board.id}`)
    return {data:board};
}

export const createBoard = createSafeAction(CreateBoard,handler)