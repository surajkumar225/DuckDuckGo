'use client'
import 'regenerator-runtime'
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { PiArrowCircleDownFill } from 'react-icons/pi';
import { BsCheckLg } from 'react-icons/bs';

import { useRouter } from "next/navigation";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import dynamic from "next/dynamic";


const HomePage: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
    const router = useRouter();

    const googleLogo: string = 'https://upload.wikimedia.org/wikipedia/en/9/90/The_DuckDuckGo_Duck.png';

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        router.push(`https://duckduckgo.com/?q=${search}`);
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
        setSearch(transcript);
    }

    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    
    return (
        <div className="flex flex-col items-center mt-7">
            <Image
                src={googleLogo}
                alt="logo"
                width={120}
                height={50}
            />
            <h1 className="text-4xl ml-4 py-2 text-white">DuckDuckGo</h1>
            <form onSubmit={(e) => onSearchSubmit(e)} className="flex mt-7 px-5 py-2 rounded-md w-2/5 items-center hover:shadow-md bg-zinc-800">
                <AiOutlineSearch className="text-xl text-slate-700 " />
                <input 
                    type="text"
                    placeholder='Search the web without being tracked' 
                    className="w-full focus:outline-none ml-4 bg-zinc-800"                  
                    value={search || transcript}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {
                    listening ? 
                        <BsFillMicFill 
                            onClick={stopListening}
                            className="text-3xl text-slate-400 mr-1" 
                        />
                    : <BiMicrophone 
                        onClick={startListening}
                        className="text-3xl text-slate-400 mr-1" 
                    />

                }
               
            </form>
            <h1 className='my-5 text-3xl font-bold'>Tired of being tracked online? We can help.</h1>
            <h4 className='my-0 '> Get seamless privacy protection on your browser for free with one download:</h4>
            <ul className="my-2 flex [&>*]:px-2.5 text-md text-slate-600 text-white">
                    <li>⦿ Private Search</li>
                    <li>⦿ Tracker Blocking</li>
                    <li>⦿ Site Encryption</li>
            </ul>
            <button className='bg-blue-400 my-6 px-5 py-3 text-xl rounded-xl text-black font-medium hover:bg-blue-500'>Explore More</button>
            <PiArrowCircleDownFill className="my-5 text-5xl border-red-700 animate-bounce hover:animate-spin"/>

        </div>
    )
}

// export default HomePage;
export default dynamic (() => Promise.resolve(HomePage), {ssr: false});
