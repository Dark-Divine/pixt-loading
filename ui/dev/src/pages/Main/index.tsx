import clsx from "clsx"
import { useState } from "react"
import { IcBaselineDiscord } from "../../components/icons/IcBaselineDiscord"
import { FaBrandsTeamspeak } from "../../components/icons/FaBrandsTeamspeak"
import { RiYoutubeFill } from "../../components/icons/RiYoutubeFill"
import { FluentPeopleTeam24Filled } from "../../components/icons/FluentPeopleTeam24Filled"
import { SolarBookBookmarkMinimalisticBold } from "../../components/icons/SolarBookBookmarkMinimalisticBold"
import { SolarPlayBold } from "../../components/icons/SolarPlayBold"
import { SolarVolumeLoudBold } from "../../components/icons/SolarVolumeLoudBold"
import LoadingComponent from "../../components/loading"

const tabs = [
  { name: "Team", icon: <FluentPeopleTeam24Filled className="w-7 h-7" /> },
  { name: "Rules", icon: <SolarBookBookmarkMinimalisticBold className="w-7 h-7" /> },
  { name: "TeamSpeak", link: "", icon: <FaBrandsTeamspeak className="w-7 h-7" /> },
  { name: "Discord", link: "", icon: <IcBaselineDiscord className="w-7 h-7" /> },
  { name: "Youtube", link: "", icon: <RiYoutubeFill className="w-7 h-7" /> },
]

export default function Main() {
  const [activeTab, setactiveTab] = useState<string | null>(null)
  return (
    <div className="w-screen h-screen relative">
      <img src="images/background-1.jpg" className="absolute inset-0 object-cover object-center" />
      <div className="absolute inset-0 background-cover"></div>
      {/* Logo and Social Media */}
      <div className="z-20 absolute top-10 left-10 text-white">
        <div className="w-14 h-14 rounded-xl border glass-morphism font-bold border-white/10 flex items-center justify-center">TS</div>
      </div>
      {/* Tabs */}
      <div className="z-10 absolute top-10 right-10 text-white flex flex-col gap-1">
        <div className=" border font-light text-[15px] inline-flex items-center gap-6 h-14 border-white/10 glass-morphism px-6 py-3 rounded-xl">
          {
            tabs.map((tab, index) => (
              <button key={index} className={clsx("flex-col justify-center items-center gap-[2px] flex hover:text-white duration-300", activeTab ? "text-white" : "text-white/80")}>
                <span>
                  {tab.icon}
                </span>
                <span className="text-xs">
                  {tab.name}
                </span>
              </button>
            ))
          }

        </div>
      </div>
      {/* Loading */}
      <LoadingComponent />
      {/* Music And Sound */}
      <div className="absolute bottom-10 gap-2 left-10 z-20 w-fit flex-col p-1 flex h-fit text-white/70 ">
        {/* <MiniPlayer src="/music.mp3" /> */}
        <div className="flex items-center gap-2 glass-morphism h-20 border border-white/10 rounded-2xl pl-1 pr-6">
          <div className="h-[90%] w-auto relative">
            <button className="absolute inset-0 flex items-center justify-center">
              <SolarPlayBold className="w-5 h-5 text-white/60 hover:text-white" />
            </button>
            <img src="images/music.jpeg" alt="" className="w-full h-full rounded-xl" />
          </div>
          <div className="flex flex-col justify-between h-full py-2">
            <div className="w-fit">
              <p className="text-[13px] font-medium">Music Name</p>
              <p className="text-xs font-light text-white/50">Singer name</p>
            </div>
            <div className="w-fit h-auto gap-2 flex items-center justify-center rounded-xl">
              <SolarVolumeLoudBold className="w-5 h-5" />
              <div className="w-20 flex items-center sound-slider">
                <input type="range" className="w-full h-1" />
              </div>
              <SolarVolumeLoudBold className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}