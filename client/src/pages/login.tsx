import React from "react";
import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { fireBaseAuth } from "../utils/FirebaseConfig";

const login = (): React.JSX.Element => {

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider()
        const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(fireBaseAuth,provider)
        console.log(name,email,profileImage)
        if (email) {

        }
    }

    return (
        <>
            <div className={`flex justify-center items-center bg-panel-header-background h-screen flex-col gap-6`}>
                <div className={`flex items-center justify-center gap-2 text-white`}>
                    <Image src="/whatsapp.gif" alt="Bzzz" height={300} width={300}/>
                    <span className={`text-7xl`}>BzzTalk</span>
                </div>
                <button
                    className={`flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg`} onClick={handleLogin}>
                    <FcGoogle className={`text-4xl`}/>
                    <span className={`text-white text-2xl`}>Login With Google</span>
                </button>
            </div>
        </>
    )
}

export default login;
