import { useState } from 'react'
import { RiYoutubeFill } from '../icons/RiYoutubeFill'
import { IcBaselineDiscord } from '../icons/IcBaselineDiscord'
import { FaBrandsTeamspeak } from '../icons/FaBrandsTeamspeak'
import { SolarBookBookmarkMinimalisticBold } from '../icons/SolarBookBookmarkMinimalisticBold'
import { FluentPeopleTeam24Filled } from '../icons/FluentPeopleTeam24Filled'
import TabComponent from './tab'

const tabs = [
    { name: "Team", icon: <FluentPeopleTeam24Filled className="w-7 h-7" /> },
    { name: "Rules", icon: <SolarBookBookmarkMinimalisticBold className="w-7 h-7" /> },
    { name: "TeamSpeak", link: "", icon: <FaBrandsTeamspeak className="w-7 h-7" /> },
    { name: "Discord", link: "", icon: <IcBaselineDiscord className="w-7 h-7" /> },
    { name: "Youtube", link: "", icon: <RiYoutubeFill className="w-7 h-7" /> },
]

export default function TabsComponent() {
    const [activeTab, setactiveTab] = useState<string | null>(null)

    return (
        <div className="z-10 absolute top-10 right-10 text-white flex flex-col gap-1">
            <div className=" border font-light text-[15px] inline-flex items-center gap-6 h-14 border-white/10 glass-morphism px-6 py-3 rounded-xl">
                {
                    tabs.map((tab, index) => (
                        <TabComponent key={index} name={tab.name} icon={tab.icon} isActive={tab.name == activeTab} />
                    ))
                }
            </div>
        </div>
    )
}
