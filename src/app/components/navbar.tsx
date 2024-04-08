import Image from "next/image";
import Link from "next/link";
import wayUpLogo from "public/logos/wayup-ai-logo.svg";

const Navbar = () => {
    return (
        <div className="
            bg-blue-600
            py-6
            px-12
        ">
            <Link href="/">
                <Image 
                    priority
                    width={95}
                    height={21.76}
                    src={wayUpLogo}
                    alt="Logotipo da WayUp"
                />
            </Link>
        </div>
    )
}

export default Navbar;