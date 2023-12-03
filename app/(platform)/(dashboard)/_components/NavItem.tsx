"use client";

import { cn } from "@/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import{
    Activity,
    CreditCard,
    Layout,
    Settings
}
from "lucide-react"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

//Define the props in here
export type Organization = {
    id: string,
    slug: string,
    name: string,
    imageUrl: string
}
interface NavItemProps{
    isExpanded:boolean,
    isActive: boolean,
    organization:Organization,
    onExpand: (id:string) => void
}

const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}:NavItemProps) => {
//creating routes inside the accordion
const router = useRouter();
const pathname = usePathname();

const routes = [
    {
        label:"Boards",
        icon: <Layout className="w-4 h-4 mr-2"/>,
        href: `organization/${organization.id}`
    },
    {
        label:"Activity",
        icon: <Activity className="w-4 h-4 mr-2"/>,
        href: `organization/${organization.id}/activity`
    },
    {
        label:"Settings",
        icon: <Settings className="w-4 h-4 mr-2"/>,
        href: `organization/${organization.id}/settings`
    },
    {
        label:"Billing",
        icon: <CreditCard className="w-4 h-4 mr-2"/>,
        href: `organization/${organization.id}/billing`
    },
]

const onClick = (href:string) =>{
    router.push(href)
}

    return ( 
        <AccordionItem
        value={organization.id}
        className="border-none"
        >
        <AccordionTrigger
        onClick={()=>onExpand(organization.id)}
        className={cn("flex items-center gap-x-2 p-2 text-slate-200 rounded-md hover:bg-slate-600/20 transition text-start no-underline hover:no-underline",
        isActive && !isExpanded && "bg-slate-500/20 text-purple-400")}
        >
            <div className="flex items-center gap-x-2">
            <div className="w-7 h-7 relative">
            <Image
            fill
            src={organization.imageUrl}
            alt={organization.name}
            className="rounded-sm object-cover"
            />
            </div>
            <span className="font-medium text-sm">
            {organization.name}
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent
        className="pt-1 text-neutral-300"
        >
        {routes.map((route)=>(
            <Button
            key={route.href}
            size={"sm"}
            onClick={()=>onClick(route.href)}
            className={cn(
            "w-full font-normal justify-start pl-10 mb-1",
            pathname === route.href && "bg-sky-500 text-purple-300"
            )}
            variant="ghost" 
            >
            {route.icon}
            {route.label}    
            </Button>
        ))}
        </AccordionContent>
        </AccordionItem>
    );
}

export default NavItem;