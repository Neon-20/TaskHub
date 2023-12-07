
"use server"

import { db } from "@/db/prisma-client"
import { revalidatePath } from "next/cache"


export async function DeleteBoard(id:string){
    await db.board.delete({
        where:{
            id
        }
    })
    revalidatePath("/organization/org_2YqPF443iZR4qdt4xmzHUad2IQ2")
}