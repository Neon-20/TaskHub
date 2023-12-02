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
        />
        </>
        )
    )
}