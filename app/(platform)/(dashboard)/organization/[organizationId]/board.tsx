import { DeleteBoard } from "@/actions/delete-actions";
import { Button } from "@/components/ui/button";


interface BoardProps{
    id:string,
    title:string
}
//we can perform delete by id right

const Board = ({
    id,
    title
}:BoardProps) => {

const deleteBoardWithId = DeleteBoard.bind(null,id);

    return ( 
        <form action={deleteBoardWithId}className="flex items-center gap-x-4">
        <p>
            Board Title:{title}
        </p>
        <Button size="sm" type = "submit" variant={"destructive"}>
            Delete here
        </Button>
        </form>
    );
}

export default Board;