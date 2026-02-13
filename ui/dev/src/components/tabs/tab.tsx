import clsx from 'clsx'
import { ReactElement } from 'react'

type TabModel = {
    name: string
    icon: ReactElement
    isActive: boolean
}

export default function TabComponent({ name, icon, isActive }: TabModel) {
    return (
        <button className={clsx("flex-col justify-center items-center gap-[2px] flex hover:text-white duration-300", isActive ? "text-white" : "text-white/80")}>
            <span>
                {icon}
            </span>
            <span className="text-xs">
                {name}
            </span>
        </button>
    )
}
