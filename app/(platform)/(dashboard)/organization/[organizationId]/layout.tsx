// Create a layout here as well, just to give personalisation to 
// specific organization pages, and maintain consistency

import OrgControl from "./_components/orgControl";
const OrganizationIdLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return ( 
        <>
        <OrgControl/>
        {children}
        </>
    );
}

export default OrganizationIdLayout;