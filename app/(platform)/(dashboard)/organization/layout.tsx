import SideBar from "../_components/sidebar";

const OrganizationalLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
    <main className="pt-20 md:pt-24 max-w-6xl mx-auto 2xl:max-w-screen-xl
    px-4">
    <div className="flex gap-x-7">
    <div className="w-60 shrink-0 hidden md:block">
    <SideBar/>
    {children}
    </div>
    </div>
    </main>
    );
}

export default OrganizationalLayout;