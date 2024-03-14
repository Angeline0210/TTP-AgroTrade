import Link from "next/link";
import Container from "../Container";
import {Redressed} from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";

const redressed= Redressed({subsets: ["latin"],
weight:["400"]});

const NavBar = async() => {
    const currentUser=await getCurrentUser();
    

    return <div className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
    
    "><div className="py-4 border-b-[1px]">
        <Container>
            <div
                className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
            ">
            
                <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
                    <img src="/logo-image.png" alt="Logo" className="w-20 h-20" />
                    
                </Link>
                {/* <div className="hidden md:block">Search</div> */}
                <div className="hidden md:block">
                    <div className="mx-auto" style={{maxWidth:"900px"}}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="
                        px-5
                        py-4
                        bg-gray-100
                        border
                        border-gray-300
                        rounded-md
                        focus:outline-none
                        focus:border-blue-500"
                    />
                    </div>
                </div>
                <div className="flex item-center gap-8 md:gap-12">
                    <CartCount />
                    <UserMenu currentUser={currentUser}/>
                </div>
            </div>
        </Container>
        </div>
    </div>;
}
 
export default NavBar;