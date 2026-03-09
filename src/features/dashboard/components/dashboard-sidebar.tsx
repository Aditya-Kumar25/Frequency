"use-client"

import { usePathname } from "next/navigation"  
import Image from "next/navigation"
// import {LucideIcon} from "lucide-react"

import{
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger
} from "@/components/ui/sidebar"
import {Skeleton} from "@/components/ui/skeleton";
import { OrganizationSwitcher ,UserButton , useClerk } from "@clerk/nextjs"
import {
    type LucideIcon,
    Home,
    LayoutGrid,
    AudioLines,
    Volume2,
    Settings,
    Headphones
} from "lucide-react";
import Link from "next/link"

interface MenuItem{
    title : string;
    url?:string;
    icon:LucideIcon;
    onclick?:()=>void;
}

interface NavSectionProps {
    label?:string;
    items: MenuItem[];
    pathname : string;
}

function NavSection({label,items,pathname}:NavSectionProps){
    return(
        <SidebarGroup>
            {label &&(
                <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
                    {label}
                </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton 
                            asChild={!!item.url}
                            isActive={
                                item.url 
                                ? item.url === "/"
                                    ?pathname === "/"
                                    : pathname.startsWith(item.url)
                                :false
                            }
                            onClick={item.onclick}
                            tooltip={item.title}
                            >
                                {item.url?(
                                    <Link href={item.url}>
                                    <item.icon/>
                                    <span>{item.title}</span>
                                    </Link>
                                ):(
                                    <>
                                    <item.icon/>
                                    <span>{item.title}</span>
                                    </>
                                )}
                            </SidebarMenuButton>

                        </SidebarMenuItem>
                    ))}    
                </SidebarMenu>        
            </SidebarGroupContent>
        </SidebarGroup>
    )
}