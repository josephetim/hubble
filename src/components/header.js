
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/app/globals.css"
import logo from "@/assets/logo.png";
import styles from "./header.module.css";


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = ()  => {
            const scrollPosition = window.scrollY;
            const threshold = 200;

            if (scrollPosition > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, []);
    return (
        <div className={`flex top-[32px] z-40  fixed gap-5 justify-between py-[12px] px-[16px] w-full text-xl font-semibold border-2 border-solid backdrop-blur-[5px]  bg-opacity-0.5 border-neutral-700 max-w-[1200px] w-[1200px] rounded-[100px] max-md:flex-wrap max-md:max-w-full max-sm:pl-1 max-sm:-mt-1 max-sm:border-none  `}>
             
      <Image
        loading="lazy"
        src={logo}
        className="shrink-0 my-auto max-w-full aspect-[3.45] w-[145px] max-sm:mx-auto"
      />
      <div className="flex gap-5 justify-between max-sm:ml-2">
        <div className="justify-center font-semibold px-[16px] pt-[10px] pb-[14px]  bg-[#111]  border-solid rounded-[100px] max-md:px-5">
          Earn as a Driver
        </div>
        <div className="justify-center font-semibold px-[16px] pt-[10px] pb-[14px] bg-blue-700 rounded-[100px] max-md:px-5">
          Advertise with Hubble
        </div>
      </div>
    </div>
    )
}