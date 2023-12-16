import React from "react";
import Image from "next/image"

const onBoarding = () => {
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

            </div>
          </div>
        </div>
      </>
  )
}

export default onBoarding;