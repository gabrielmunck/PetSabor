import Image from "next/image";
import React from "react";
import petlogo from "@/assets/petlogo.png";

const Header: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-forest-green text-white h-14 p-1 fixed top-0 left-0 right-0 z-10">
            <div className="flex items-center h-full px-10">
                <nav className="container h-full mx-auto flex items-center justify-around sm:justify-start">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="mr-0 sm:mr-9 p-3 h-full font-sans hover:text-pet-orange transition-colors duration-300"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("FoodSection")}
                        className="mr-0 sm:mr-9 p-3 h-full font-sans hover:text-pet-orange transition-colors duration-300"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="font-sans p-3 h-full hover:text-pet-orange transition-colors duration-300"
                    >
                        Contact
                    </button>
                </nav>
                <Image src={petlogo} alt="Card image" width={50} height={50} className="hidden rounded-full p-1 sm:flex"/>
            </div>
        </header>
    );
};

export default Header;
