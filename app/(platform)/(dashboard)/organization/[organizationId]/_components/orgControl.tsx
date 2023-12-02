//This basically is for enabling switch of urls easily 
//if url changes this component can change the organization for me easily

"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

const OrgControl = () => {
const params = useParams();
const {setActive} = useOrganizationList();

useEffect(()=>{
if(!setActive) return;

setActive({
    organization: params.organizationId as string,
})
},[setActive,params.organizationId])
}

export default OrgControl;