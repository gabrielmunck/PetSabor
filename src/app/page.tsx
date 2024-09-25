'use client'

import Image from "next/image";
import React from "react";
import petlogo from "@/assets/petlogo.png";
import { FaWhatsapp } from 'react-icons/fa';

const Card = ({ title, content }: { title: string; content: string }) => (
    <div className="bg-orange-500 rounded-lg shadow-md p-6 m-4 max-w-sm">
        <h2
            className="text-2xl font-sans font-bold mb-2 text-white "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
            {title}
        </h2>
        <p className="text-white font-sans">{content}</p>
    </div>
);

export default function Home() {

    const openWhatsApp = () => {
        const phoneNumber = '5511972888081'; // Replace with your actual WhatsApp Business number
        const message = 'Olá! Gostaria de saber mais sobre os produtos da Pet Sabor.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8 pet-background ">
            <Image
                src={petlogo}
                className="rounded-full"
                alt="Pet Sabor Logo"
                width={200}
                height={200}
            />
            <div className="flex flex-col w-full px-5 pt-5 items-center justify-center mb-12">
                <div className="flex">
                    <p className="text-5xl font-sans text-forest-green p-2 mr-3">
                        Um
                    </p>
                    <p className="text-nowrap text-5xl font-sans font-bold rounded-xl bg-orange-500  text-white p-2">
                        Novo Jeito
                    </p>
                </div>
                <p className="text-5xl font-sans text-forest-green ">
                    de cuidar dos seus pets.
                </p>
            </div>

            <div className="flex flex-wrap justify-center">
                <Card
                    title="Nossa Missão"
                    content="Aqui na  Pet Sabor, nossa missão é proporcionar aos nossos clientes uma experiência única de sabor e qualidade, oferecendo uma ampla variedade de produtos de alta qualidade para animais de estimação."
                />
                <Card
                    title="Nossos Produtos"
                    content="Descubra nossa seleção de produtos de alta qualidade para animais de estimação. Desde rações balanceadas até acessórios e brinquedos, temos tudo o que seu amigo peludo precisa para uma vida feliz e saudável."
                />
            </div>
            <div className="bg-orange-500 flex rounded-lg shadow-md p-1 m-4 max-w-sm">
                
                <button
                onClick={openWhatsApp}
                className="bg-forest-green flex items-center justify-center rounded-lg shadow-md p-6 m-4 max-w-sm hover:bg-green-700 transition-colors duration-300"
            >
                <FaWhatsapp className="text-white text-5xl" />
                <span 
                    className="text-center text-2xl font-sans text-orange-100"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
                >
                    Fale Conosco no WhatsApp
                </span>
            </button>
            </div>
        </div>
    );
}

