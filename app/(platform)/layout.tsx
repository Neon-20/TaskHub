import { ClerkProvider, OrganizationProfile } from '@clerk/nextjs';
import {dark,neobrutalism} from "@clerk/themes";
import { Duru_Sans } from "next/font/google";
import { Organization } from './(dashboard)/_components/NavItem';

const PlatFormLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
    <ClerkProvider
    appearance={{
        baseTheme:dark,
        signIn: { baseTheme: neobrutalism},
        signUp: { baseTheme: neobrutalism},
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