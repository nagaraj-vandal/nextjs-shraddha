"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button/Button"


export default function Navbar() {

    return (

        <nav className="flex  flex-row justify-between items-center sticky top-0   py-2 px-[80px] md:h-20 bg-black z-20">
            <div className="flex flex-row items-center ">
                <div className="flex flex-row items-center">
                    <Image
                        src="/images/shraddha-logo.svg"
                        width={120}
                        height={31}
                        alt="Picture of the author"
                    />
                    <h1 className="text-2xl font-bold">Shradhha</h1>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-[50px] ">
                <Link href="/Courses" className="text-sm text-white  font-medium ">Courses</Link>
                <Link href="/About Us" className="text-sm text-white font-medium ">About Us</Link>
                <Link href="/Contact" className="text-sm text-white font-medium ">Contact</Link>
                {/* <button className="text-lg font-medium text-primary">Login</button> */}
                <Button intent="brand" size="small" className="rounded" onClick={() => console.log("123")}>Login</Button>
            </div>
        </nav>
    )
}