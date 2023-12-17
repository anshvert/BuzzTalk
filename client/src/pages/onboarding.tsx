import React, { useState } from "react";
import Image from "next/image"
import { useStateProvider } from "../context/StateContext";
import Input from "../components/common/Input";
import Avatar from "../components/common/Avatar";

const onBoarding = () => {
    const [{userInfo}] = useStateProvider()
    const [name,setName] = useState(userInfo?.name || "")
    const [about,setAbout] = useState("")
    const [image,setImage] = useState("/default_avatar.png")
    return (
        <>
        <div className={`bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center`}>
          <div className={`flex items-center justify-center gap-2`}>
            <Image src="/whatsapp.gif" alt="BZZ" height={300} width={300}/>
            <span className={`text-7xl`}>BzzTalk</span>
          </div>
          <h2 className={`text-2xl`}>Create your profile</h2>
          <div className={`flex gap-6 mt-6`}>
            <div className={`flex flex-col items-center justify-center mt-5 gap-6`}>
                <Input name = "Display Name" state = {name} setState = {setName} label = {true} />
                <Input name = "About" state = {about} setState = {setAbout} label = {true} />
            </div>
            <div>
                <Avatar type={`xl`} image={image} setImage={setImage}/>
            </div>
          </div>
        </div>
        </>
    )
}

export default onBoarding;
