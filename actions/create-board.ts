"use server"

import {z} from "zod";

import { db } from "@/db/prisma-client";
import { revalidatePath } from "next/cache";

const createBoard = z.object({
    title:z.string(),
})

export async function create(formdata:FormData){
    const {title} = createBoard.parse({
        title:formdata.get("title")
    })
    await db.board.create({
        data:{
            title,
        }
    })
    revalidatePath("/organization/org_2YqPF443iZR4qdt4xmzHUad2IQ2")
}
