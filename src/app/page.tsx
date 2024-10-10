"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import petlogo from "@/assets/petlogo.png";
import dogcard from "@/assets/dogcard.png";
import Contact from "@/components/Contact";
import DogsSection from "@/components/DogsSection";
import Partners from "@/components/Partners";
import RedirectButton from "@/components/Forms";


const Card = ({
    title,
    content,
    image,
}: {
    title: string;
    content: string;
    image?: StaticImageData;
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
                className="text-2xl font-sans text-center tracking-widest font-bold mb-4 text-white"
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
        <div id="Home" className="min-h-screen bg-slate-100 flex flex-col items-center justify-center mt-10 p-8 pet-background ">
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
                        content="Aqui na Pet Sabor, Nossa missão é oferecer alimentação saudável e equilibrada para cães de pequeno porte, utilizando ingredientes 100% naturais e de alta qualidade."
                        image={dogcard}
                    />

                    <Card
                        title="Nossos Produtos"
                        content="A Pet Sabor oferece uma linha exclusiva de alimentação natural para cachorros de pequeno porte, focando em ingredientes 100% naturais e nutritivos. Enviamos um kit degustação com sabores variados em porções congeladas no seu primeiro pedido, permitindo que seu cão explore diferentes sabores e texturas enquanto se refresca em dias quentes, promovendo enriquecimento ambiental."
                    />
                </div>
                <DogsSection/>
                <RedirectButton url="https://docs.google.com/forms/d/1fUKcFcKJseYaMrz6fO_-2ZSDYQwtRoSR6jK8pFJA7yw/viewform?chromeless=1&edit_requested=true" text="Quero conhecer!" />
                <Partners/>
                <Contact/>
            </div>
        </div>
    );
}
