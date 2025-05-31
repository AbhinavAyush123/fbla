'use client';
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  SidebarProvider, // ✅ Make sure you import this
} from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
  const { isSignedIn, user } = useUser();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Jobs",
      href: "/jobs",
      icon: <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Resume",
      href: "#",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "To Do",
      href: "#",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <Sidebar>
          <SidebarBody className="justify-between gap-5">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <Logo />
              <div className="mt-8 flex flex-col gap-10">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: isSignedIn
                    ? `Hi, ${user.firstName || user.fullName || user.username}`
                    : "Hi, there",
                  href: "#",
                  icon: <UserButton afterSignOutUrl="/" />,
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
}

export const Logo = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white">
      Job Spot
    </motion.span>
  </a>
);

export const LogoIcon = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
  </a>
);

// Dummy scrollable dashboard
const Dashboard = () => (
  <div className="flex flex-col gap-6">
    {[...Array(20)].map((_, idx) => (
      <div
        key={idx}
        className="h-40 w-full rounded-xl bg-white shadow dark:bg-neutral-900 dark:text-white"
      >
        <p className="p-4">Scrollable Content Box {idx + 1}</p>
      </div>
    ))}
  </div>
);
