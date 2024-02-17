import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

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
            </div>
        </Container>
    </footer>;
}
 
export default Footer;