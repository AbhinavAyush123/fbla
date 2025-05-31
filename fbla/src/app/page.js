'use client';
import Image from "next/image";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/save-user', { method: 'POST' });
    }
  }, [isSignedIn]);

  return (
    <>
        <Navbar/>
        <Landing />
    </>
  );
}