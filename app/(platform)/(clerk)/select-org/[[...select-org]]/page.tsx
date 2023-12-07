import {OrganizationList} from "@clerk/nextjs";
import SnowFallBg from "@/app/(marketing)/_components/SnowfallBg";

export default function CreateOrganizationPage(){
    return(
(       
        <>
        <SnowFallBg />
        <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl = {"/organization/:id"}
        afterCreateOrganizationUrl = {"/organization/:id"}
        appearance={{
            elements:{
                card:{
                    height: "screen",
                    // color: "black",
                    paddingLeft: "30px",
                    paddingRight: "20px",
                    // display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column"
                },
            
            }
        }}
        />
        </>
        )
    )
}