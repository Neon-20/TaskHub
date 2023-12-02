import NavBar from "./_components/NavBar";

const DashBoardLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
        <div className="h-full">
        <NavBar/>
        {children}
        </div>
    );
}

export default DashBoardLayout;