import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai";


const Footer = () => {
    return  <footer className="bg-slate-700 
    text-slate-200
    text-sm
    mt-16">
        <Container>
            <div className="flex
            flex-col
            md:flex-row
            justify-between
            pt-16
            pb-8">
                <FooterList>
                    <h3 className="text-base 
                    font-bold
                    mb-2">Shop Categories</h3>
                    <Link href='#'>Empty Fruit Brunches</Link>
                    <Link href='#'>Mesocarp Fibres</Link>
                    <Link href='#'>Trunks</Link>
                    <Link href='#'>Palm Kernel Shell</Link>
                    <Link href='#'>Fronds</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base 
                    font-bold
                    mb-2">Customer Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>Returns & Exchanges</Link>
                    <Link href='#'>FAQs</Link>
                </FooterList>
                <div className="w-full
                md:w-1/3
                mb-6
                md:mb-0">
                <h3 className="text-base 
                    font-bold
                    mb-2">About Us</h3>
                    <p className="mb-2"> 
                    This app aims to facilitate the trading of oil palm biomass, a renewable 
                    resource. By promoting biomass as an alternative to fossil fuels, 
                    this app can help reduce greenhouse gas emissions and mitigate climate 
                    change. These initiatives are congruent with the overarching theme of 
                    Food Security, advocating for efficient resource utilization and 
                    sustainable agricultural practices. The primary focus of this app will 
                    be on the biomass derived from oil palm, specifically narrowed down 
                    from the broader biomass sector in Malaysia.</p>
                <p>&copy; {new Date().getFullYear()} AgroTrade. All rights reserved</p>
                </div>
                <FooterList>
                <h3 className="text-base 
                    font-bold
                    mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                    <Link href='#'>
                        <MdFacebook size={24}/>
                    </Link>
                    <Link href='#'>
                        <AiFillTwitterCircle size={24}/>
                    </Link>
                    <Link href='#'>
                        <AiFillInstagram size={24}/>
                    </Link>
                    <Link href='#'>
                        <AiFillYoutube size={24}/>
                    </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer>;
}
 
export default Footer;