import Image from "next/image";
import ddgo from "../Components/ddgo.png";

const Footer: React.FC = () => {

    return (
        <footer className="absolute w-full h-full">
            <h1 className="pt-60 text-6xl w-2/4 pl-20 font-medium">One supercharged app, multiple types of privacy protection.</h1>
            <p className="pt-10 text-2xl w-2/4 pl-20">The DuckDuckGo app includes our Web and App Tracking Protection, Smarter Encryption, Private Search, Email Protection, and more.</p>
            <p className="pt-10 text-sm w-2/4 pl-20">See app listings for platform-specific details: iOS, Android, Firefox, Chrome, Edge, and Safari.</p>
             <Image className="absolute top-0 right-0 mr-30 mt-32 animate-pulse"
                src={ddgo}
                alt="logo"
                width={720}
                height={750}
            />          
            <div className="bg-neutral-900 text-white mt-56 flex py-3 px-14">
                <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                    <li>About</li>
                    <li>App</li>
                    <li>Carrers</li>
                    <li>Our Story </li>
                </ul>
                <ul className="flex ml-auto [&>*]:ml-6 text-sm text-slate-600">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Press</li>
                </ul>
            </div>
        </footer>
        
    )       
}

export default Footer;