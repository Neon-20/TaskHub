import {Toaster} from "sonner";
/*
import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-poppins",
})
*/

const MarketingLayout = ({
    children,
}:{     
    children:React.ReactNode;
}) => {
    return ( 
        <main className="min-h-screen mx-auto">
        <Toaster/>
        {children}
        </main>
    );
}

export default MarketingLayout;