import React, { useState } from "react";
import Image from "next/image"
import { FaCamera } from "react-icons/fa";

type AvatarProps = {
  type: any,
  image: any,
  setImage: any
}

const Avatar: React.FC<AvatarProps> = ({ type, image, setImage }) => {
    const [hover,setHover] = useState(false)
    const [isContextMenuVisible,setIsContextMenuVisible] = useState(false)
    const [contextMenuCoordinates,setContextMenuCoordinates] = useState({ x: 0, y: 0 })

    const showContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsContextMenuVisible(true)
        setContextMenuCoordinates({ x: e.pageX, y: e.pageY })
    }

    return (
      <>
        <div className={`flex items-center justify-center`}>
            { type === "sm" && (
                <div className={`relative h-10 w-10`}>
                  <Image src={image} alt="avatar" className="rounded-full" fill/>
                </div>
            )}
            { type === "lg" && (
                <div className={`relative h-14 w-14`}>
                    <Image src={image} alt="avatar" className="rounded-full" fill/>
                </div>
            )}
            { type === "xl" && (
                <div className={`relative cursor-pointer`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <div className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 items-center flex flex-col rounded-full justify-center text-center gap-2
                                    ${hover ? "visible" : "hidden"}`} onClick={(e: React.MouseEvent<HTMLDivElement>) => showContextMenu(e)} id="context-opener">
                        <FaCamera className={`text-2xl`} id="context-opener"/>
                        <span id="context-opener">Edit</span>
                    </div>
                    <div className={`flex items-center justify-center h-60 w-60`}>
                        <Image src={image} alt="avatar" className="rounded-full" fill/>
                    </div>
                </div>
            )}
        </div>
      </>
    )
}

export default Avatar;
