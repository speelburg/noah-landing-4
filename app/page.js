'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


const videos = [
     {
    title: "the roots \u00A0\u00A0\u00A0\u00A0 ☯︎",
    thumbnail: "/thumbnails/therootsrespondreact.png",
    url: "https://youtu.be/ov3JbucyO00?si=by922S5Gv3aIEACJ",
    description: "director + animator",
  },
  
   {
    title: "wilkinson sword \u00A0\u00A0\u00A0\u00A0 ☮︎",
    thumbnail: "/thumbnails/wilkinson.png",
    url: "https://youtu.be/K5Is0uYoVes?si=a6_3WU-FPOfbGuhw",
    description: "composer + producer",
  },
  
    {
    title: "who do you wanna be \u00A0\u00A0\u00A0\u00A0 ☺ ☯︎",
    thumbnail: "/thumbnails/whodoyouwannabe.png",
    url: "https://www.youtube.com/watch?v=f403q9IA-ek",
    description: "who do you wanna be",
  },
  
  {
    title: "invincible \u00A0\u00A0\u00A0\u00A0 ☺",
    thumbnail: "/thumbnails/invincible.png",
    url: "https://youtu.be/zySXmuDDt_I?si=NltSzpcfAGms3ftu&t=23",
    description: "artist + writer + producer",
  },
  {
    title: "samsung \u00A0\u00A0\u00A0\u00A0 ☺",
    thumbnail: "/thumbnails/samsung.png",
    url: "https://youtu.be/iKs9r8oeMgM?si=V14FyjcSSYFE-EiV",
    description: "artist + writer + producer",
  },
  {
    title: "john legend \u00A0\u00A0\u00A0\u00A0 ☯︎",
    thumbnail: "/thumbnails/johnlegend1.png",
    url: "https://youtu.be/jJN_VX-_bdc?si=KLGYJzfRChIxPJhW",
    description: "director + animator",
  },
  {
    title: "animation reel \u00A0\u00A0\u00A0\u00A0 ☺ ☮︎ ☯︎ ",
    thumbnail: "/thumbnails/animationreel.png",
    url: "https://www.youtube.com/watch?v=EkFGu2qWFEY",
    description: "director + animator",
  },
  {
    title: "ocado \u00A0\u00A0\u00A0\u00A0 ☮︎",
    thumbnail: "/thumbnails/ocado.png",
    url: "https://youtu.be/DwKMuUtCJTE?si=yp_tK383640XzHF",
    description: "composer + writer + producer",
  },
  {
    title: "the national \u00A0\u00A0\u00A0\u00A0 ☯︎",
    thumbnail: "/thumbnails/thenational1.png",
    url: "https://youtu.be/NYeX551dfiY?si=uHoM4_Mz5B1f-beE",
    description: "director + animator",
  },
  {
    title: "ikea \u00A0\u00A0\u00A0\u00A0 ☮︎",
    thumbnail: "/thumbnails/ikea.png",
    url: "https://www.tiktok.com/@ikeauk/video/7502396170581445910",
    description: "composer + producer",
  },
  {
    title: "danone \u00A0\u00A0\u00A0\u00A0 ☮︎",
    thumbnail: "/thumbnails/danone.png",
    url: "https://youtu.be/oReBAO7ut04?si=StHPcO0RLu7f7Mpw",
    description: "composer + writer + producer",
  },
  {
    title: "cadbury \u00A0\u00A0\u00A0\u00A0 ☮︎",
    thumbnail: "/thumbnails/cadbury.png",
    url: "https://youtu.be/EeOfDlW5Yw4?si=s6qv4Bzed2rDLuPu",
    description: "composer + producer",
  },
  {
    title: "john legend + kelly clarkson \u00A0\u00A0\u00A0\u00A0 ☯︎",
    thumbnail: "/thumbnails/johnlegend2.png",
    url: "https://youtu.be/DlMP7FGYJmk?si=HnQZnNu8v5BEsWVV",
    description: "director + animator",
  },
  {
    title: "romantic dividends \u00A0\u00A0\u00A0\u00A0 ☯︎",
    thumbnail: "/thumbnails/romanticdividends.png",
    url: "https://youtube.com/shorts/iKUO-isnG_U?si=LjYMaIlaj0uQnQ5i",
    description: "director + animator",
  },
 
  {
    title: "save it for someone who cares (live) \u00A0\u00A0\u00A0\u00A0 ☺ ☯︎",
    thumbnail: "/thumbnails/saveitforsomeonewhocares.png",
    url: "https://www.youtube.com/watch?v=2qGzGRb7U8I",
    description: "save it for someone who cares (live)",
  },

];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen text-[#0e730e] font-sans relative overflow-x-hidden">
 {/* Top bar that also paints the iOS safe-area */}
<div
  className="fixed top-0 left-0 right-0 z-50 bg-[#f5c747]"
  style={{ paddingTop: "env(safe-area-inset-top)" }}
>
  <Marquee
    gradient={false}
    speed={40}
    pauseOnHover={false}
    loop={0}
    className="text-[#3c9b34] text-lg font-bold uppercase py-2"
  >
    {Array(3)
      .fill([
        "☺ ARTIST ☺︎ ",
        "☮︎ COMPOSER ☮︎",
        "☯︎ DIRECTOR ☯︎",
        "♡ ANIMATOR ♡",
      ]).flat().map((item, i) => (
        <span key={i} className="mx-6 whitespace-nowrap">
          {item}
        </span>
      ))}
    </Marquee>
  </div>



      {/* Menu button */}
      {!menuOpen && (
        <div className="fixed top-[45px] right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(true)}
            className="hover:bg-transparent focus:outline-none focus:ring-0"
          >
            <Menu className="text-[#E16A8C]" />
          </Button>
        </div>
      )}

      {/* Header (transparent) */}
      <section className="fixed top-[30px] left-0 right-0 text-center z-40 pt-10 pb-6 px-4">
        <a
          href="https://www.instagram.com/speelburg"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/noahsacrelogo2.png"
            alt="noah sacré logo"
            className="w-[300px] mb-3 sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto"
          />
        </a>
        
             <motion.p
          className="text-md md:text-lg mb-3 text-[#f5c747]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          artist ☺ composer ☮︎ director ☯︎
        </motion.p>
        <motion.a
          href="mailto:noah@noahsacre.com?subject=hey%20what's%20up"
          className="text-[#f5c747] font-bold underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          hire me!
        </motion.a>
        
      </section>

      {/* Mobile menu (keep solid orange for readability) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-[250px] bg-[#f5c747] z-50 flex flex-col items-center justify-center text-[#0e730e] font-bold space-y-2">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-transparent focus:outline-none focus:ring-0"
            >
              <X className="text-[#0e730e]" />
            </Button>
          </div>
          <a href="mailto:noah@noahsacre.com?subject=hey%20what's%20up" className="block py-2 text-center text-[#2a9c62]">contact</a>
          <a href="https://www.instagram.com/speelburg/" target="_blank" rel="noopener noreferrer" className="block py-2 text-center text-[#2a9c62]">insta</a>
          <a href="https://www.youtube.com/@speelburg" target="_blank" rel="noopener noreferrer" className="block py-2 text-center text-[#2a9c62]">youtube</a>
        </div>
      )}

      {/* Thumbnails — link straight to YouTube */}
      <section className="p-8 pt-[290px]" id="work">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mx-auto px-4 sm:px-8 lg:px-32 justify-items-center">
          {videos.map((video, index) => (
            <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <div className="cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-[75%] mx-auto h-[210px] object-cover"
                />
                <p className="mt-2 text-sm text-center text-[#f5c747] font-bold">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer (transparent) */}
      <footer id="contact" className="p-8 text-center text-sm">
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/speelburg/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#f5c747]">insta</a>
          <a href="https://www.youtube.com/@speelburg" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#f5c747]">youtube</a>
        </div>
      </footer>
    </main>
  );
}
