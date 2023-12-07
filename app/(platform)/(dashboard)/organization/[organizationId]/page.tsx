import { create } from "@/actions/create-board";
import { db } from "@/db/prisma-client";
import Board from "./board";
import Form from "./form";

//Boards rendered from here
const OrganizationPage = async() => {
//see the results and fetch em'
const boards = await db.board.findMany();

    return ( 
        <div className="flex flex-col space-y-4">
        <Form/>
        <div className="space-y-2 text-white">
        {boards.map((board)=>(
            <Board
            key={board.id}
            id = {board.id}
            title = {board.title}
            />
        ))}
        </div>
        </div>
    );
}

export default OrganizationPage;
