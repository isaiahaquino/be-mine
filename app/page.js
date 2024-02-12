"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../public/patrick.gif";
import img2 from "../public/designer.gif";
import img3 from "../public/please1.gif";
import img4 from "../public/please2.gif";
import img5 from "../public/annoyed1.gif";
import img6 from "../public/annoyed2.gif";
import img7 from "../public/annoyed3.gif";
import img8 from "../public/mad1.gif";
import img9 from "../public/mad2.gif";



const prompts = ["Hehe ily <3",
                 "Will you be my valentine?",
                 "Please?",
                 "Pretty please?",
                 "Think again",
                 "You might regret this",
                 "This could be a mistake",
                 "Have a heart",
                 "Don't be so cold",
                 "Last chance!"]

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const topPos = ["top-[11%]", "top-[22%]", "top-[33%]", "top-[44%]", "top-[55%]", "top-[66%]", "top-[77%]", "top-[88%]"]
const rightPos = ["right-[11%]", "right-[22%]", "right-[33%]", "right-[44%]", "right-[55%]", "right-[66%]", "right-[77%]", "right-[88%]"]

export default function Home() {
  const [prompt, setPrompt] = useState(prompts[1])
  const [image, setImage] = useState(images[1])
  const [showButtons, setShowButtons] = useState(true)
  const [currIdx, setCurrIdx] = useState(1)
  const [button, setButton] = useState("px-6 py-2")
  

  useEffect(() => {
    setPrompt(prompts[currIdx])
    setImage(images[currIdx])
  
    if (currIdx < 4 && currIdx != 1) {
      setButton(`absolute ${topPos[Math.floor(Math.random() * 7)]} ${rightPos[Math.floor(Math.random() * 7)]} px-6 py-2`)
    } else if (currIdx < 7 && currIdx != 1) {
      setButton(`absolute ${topPos[Math.floor(Math.random() * 7)]} ${rightPos[Math.floor(Math.random() * 7)]} text-xs px-1 py-[0.1rem] rounded-sm`)
    } else if (currIdx < 8 && currIdx != 1) {
      setButton(`absolute text-xs px-1 py-[0.1rem] rounded-sm animate-run`)
    } else if (currIdx < 10 && currIdx != 1) {
      setButton(`absolute text-xs px-1 py-[0.1rem] rounded-sm animate-runFast`)
    } 
  }, [currIdx])

  const yesOption = function() {
    setCurrIdx(0)
    setShowButtons(false)
  }

  const noOption = function () {
    if (currIdx < images.length-1) { setCurrIdx(currIdx + 1) }
  }

  return (
    <main className="bg-[url(/heart-bg.png)]">
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
        <div className="h-[300px] w-[400px] relative">
          <Image src={image} alt="" fill sizes="100vw" className="object-contain" priority/>
        </div>
        <h1 className="text-3xl font-semibold">{prompt}</h1>
        {showButtons && 
          <div className="flex gap-8">
            <button
              className="px-6 py-2 text-white bg-emerald-500 rounded-lg shadow-lg animate-bounce"
              onClick={yesOption}
            >YES</button>

            {currIdx !== 9 && 
              <button
                className={`${button} text-white bg-rose-400 rounded-lg shadow-lg`}
                onClick={noOption}
              >NO</button>
            }
          </div>
        }
      </div>
    </main>
  );
}