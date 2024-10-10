import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import dog1 from "@/assets/dog1.png";
import dog2 from "@/assets/dog2.png";
import dog3 from "@/assets/dog3.png";
import dog4 from "@/assets/dog4.png";

interface DogImage {
    src: StaticImageData;
    alt: string;
    comment: string;
}

const dogImages: DogImage[] = [
    { src: dog1, alt: "Dog 1", comment: "Nunca fui tão feliz com a minha comida!" },
    { src: dog2, alt: "Dog 2", comment: "Sinto que tenho mais energia!" },
    { src: dog3, alt: "Dog 3", comment: "Chega de ser um cãozinho obeso!" },
    { src: dog4, alt: "Dog 4", comment: "Mal vejo a hora de comer!" },
];

const DogsSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<DogImage | null>(null); 

    const openModal = (image: DogImage) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // stopPropagation para evitar que o evento de clique no modal também feche o modal
    return (
        <div id="Sobre Nós" className="container mx-auto mb-6 py-8">
            <h2 className="text-3xl text-center font-sans font-bold text-gray-700 mb-4">Nossos clientes estão mais do que satisfeitos!</h2>
            <p className="text-gray-400 tracking-wider">Confira a opnião deles!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dogImages.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer aspect-square"
                        onClick={() => openModal(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={300}
                            className="rounded-lg object-cover shadow-xl w-full h-full"
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg max-w-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="aspect-square">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                        <p className="mt-4 pl-1 text-xl tracking-wide text-gray-700">
                            &quot;{selectedImage.comment}&quot;
                        </p>
                        <button
                            className="mt-4 bg-forest-green font-sans text-white px-4 py-2 rounded hover:bg-pet-orange transition-colors duration-300"
                            onClick={closeModal}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DogsSection;
