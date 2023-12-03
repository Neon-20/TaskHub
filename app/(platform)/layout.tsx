import {ClerkProvider} from "@clerk/nextjs";
import {dark,neobrutalism} from "@clerk/themes";
import { Duru_Sans } from "next/font/google";

const PlatFormLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
    <ClerkProvider
    appearance={{
        baseTheme:neobrutalism,
        organizationSwitcher: { baseTheme: dark},
        organizationList: { baseTheme: dark},
        userButton: { baseTheme: dark},
        variables:{
            colorPrimary: 'red' 
        }
    }}
    >
        {children}
    </ClerkProvider>
    );
}

export default PlatFormLayout;
/*
</div>
*/