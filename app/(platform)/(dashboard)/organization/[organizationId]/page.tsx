import { create } from "@/actions/create-board";
import { db } from "@/db/prisma-client";
//Boards rendered from here
const OrganizationPage = async() => {
//see the results and fetch em'
const boards = await db.board.findMany();

    return ( 
        <div className="flex flex-col space-y-4">
        <form action={create}>
            <input
            id="title"
            name="title"
            required
            placeholder="Enter Board details"
            className="border-white border p-2 text-black"
            />
        </form>
        <div className="space-y-2 text-white">
        {boards.map((board)=>(
            <div key={board.id}>
            Board title:{board.title}
            </div>
        ))}
        </div>
        </div>
    );
}

export default OrganizationPage;
