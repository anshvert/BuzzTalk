import React from "react";
import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { fireBaseAuth } from "../utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "../utils/ApiRoutes";
import { NextRouter, useRouter } from "next/router";
import  {useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";

const login = (): React.JSX.Element => {
    const router: NextRouter = useRouter()
    const [{},dispatch] = useStateProvider()
    const handleLogin = async (): Promise<void> => {
        const provider: GoogleAuthProvider = new GoogleAuthProvider()
        const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(fireBaseAuth,provider)
        if (email) {
            const { data } = await axios.post(CHECK_USER_ROUTE,{ email })
            console.log(data)
            if (!data.success) {
                dispatch({
                    type: reducerCases.SET_NEW_USER, newUser: true
                })
                dispatch({
                    type: reducerCases.SET_USER_INFO,
                    userInfo: {
                        name,email,profileImage,status: ""
                    }
                })
                await router.push("/onboarding")
            }
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
