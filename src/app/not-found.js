"use client";
import { FileSearchIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center gap-6">
        <FileSearchIcon height={85} width={85} className="text-accent" />
        <h1 className="text-4xl font-bold text-accent">
          Halaman tidak ditemukan
        </h1>
        <Link
          href="/"
          className="text-white hover:text-accent text-2xl underline transition-all"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default notFound;
