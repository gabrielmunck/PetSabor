import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import petlogo from "@/assets/petlogo.png";

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = 64; 
            const sectionPosition = section.offsetTop - headerHeight;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = ["Home", "SobreNos", "Contato"];

    return (
        <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white text-forest-green shadow-md' : 'bg-forest-green text-white'}`}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Image src={petlogo} alt="Pet Sabor Logo" width={50} height={50} className="rounded-full"/>
                <nav className="hidden md:flex space-x-6">
                    {["Home", "SobreNos", "Contato"].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`font-sans hover:text-pet-orange transition-colors duration-300 ${activeSection === section ? 'border-b-2 border-pet-orange' : ''}`}
                            aria-label={`Navega até a sessão ${section}`}
                        >
                            {section}
                        </button>
                    ))}
                </nav>
                <button className="md:hidden text-2xl" onClick={toggleMobileMenu} aria-label="Ativa o menu mobile">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className={`fixed top-16 right-0 h-auto w-64 bg-forest-green text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col space-y-4 p-4">
                    {navItems.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`font-sans hover:text-pet-orange transition-colors duration-300 ${activeSection === section ? 'border-b-2 border-pet-orange' : ''}`}
                            aria-label={`Navega até a sessão ${section}`}
                        >
                            {section}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;