import "./header.css";
import Logo from "@/public/logo.svg"
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <nav>
                <section id="logo">
                    <Image
                        priority
                        alt="Dwikie"
                        src={Logo}
                        width={25}
                        height={25}
                    />
                </section>
                <section id="nav" className="nav-item-wrapper">
                    <div>
                        <a href="#home">Home</a>
                    </div>
                    <div>
                        <a href="#about-me">About Me</a>
                    </div>
                    <div>
                        <a href="#project">Project</a>
                    </div>
                </section>
                <section></section>
            </nav>
        </header>
    )
}