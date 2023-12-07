//This will hold our types in here

import {z} from "zod";
import { db } from "@/db/prisma-client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { type ClassValue } from 'clsx';
import { Board } from "@prisma/client";


export type InputType = z.infer<typeof CreateBoard>
export type ReturnType = ActionState<InputType,Board>;

