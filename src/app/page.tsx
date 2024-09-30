"use client";

import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import petlogo from "@/assets/petlogo.png";
import dogcard from "@/assets/dogcard.png";
import Contact from "@/components/Contact";
import DogsSection from "@/components/DogsSection";


const Card = ({
    title,
    content,
    image,
}: {
    title: string;
    content: string;
    image?: any;
}) => (
    <>
        <Header />
        <div className="relative bg-pet-orange rounded-lg shadow-md p-6 mb-4 max-w-full">
            {image && (
                <Image
                    src={image}
                    alt="Card image"
                    className="absolute -top-[100px] left-14 transform -translate-x-1/2"
                    width={150}
                    height={150}
                />
            )}
            <h2
                className="text-2xl font-sans tracking-widest font-bold mb-2 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
                {title}
            </h2>
            <p className="text-white text-lg text-pretty font-sans">
                {content}
            </p>
        </div>
    </>
);
export default function Home() {
    

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center mt-10 p-8 pet-background ">
            <div className="flex flex-col justify-center items-center max-w-5xl">
                <Image
                    src={petlogo}
                    className="rounded-full mb-24"
                    alt="Pet Sabor Logo"
                    width={200}
                    height={200}
                />

                <div className="flex flex-wrap justify-center">
                    <Card
                        title="Nossa Missão"
                        content="Aqui na  Pet Sabor, nossa missão é proporcionar aos nossos clientes uma experiência única de sabor e qualidade, oferecendo uma ampla variedade de produtos de alta qualidade para cães de pequeno porte."
                        image={dogcard}
                    />

                    <Card
                        title="Nossos Produtos"
                        content="Descubra nossa seleção de produtos de alta qualidade para seu cãozinho de pequeno porte. Nossos produtos são cuidadosamente selecionados para garantir a saúde e o bem-estar dos seus pets."
                    />
                </div>
                <DogsSection/>
                <Contact/>
            </div>
        </div>
    );
}
