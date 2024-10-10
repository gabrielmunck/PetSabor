
import React from 'react';
import { FaStar, FaDog, FaLeaf, FaGift, FaPaw } from 'react-icons/fa';
import { FaA } from 'react-icons/fa6';

const QualityItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <div className="text-5xl text-pet-orange mb-2">{icon}</div>
        <h3 className="text-center text-xl text-gray-700 tracking-wider font-sans font-bold mb-2">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
    </div>
);

const Partners: React.FC = () => {
    return (
        <div >
            <section className="bg-forest-green rounded-lg py-12 px-8">
                <div className="container mx-auto">
                    <h2 className="text-xl sm:text-3xl font-sans font-bold tracking-widest text-center mb-10">Por que escolher a Pet Sabor?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <QualityItem 
                            icon={<FaStar />}
                            title="Comida de verdade"
                            description="Produtos naturais de alta qualidade para o bem-estar do seu cão"
                        />
                        <QualityItem 
                            icon={<FaLeaf />}
                            title=" Enriquecimento ambiental"
                            description="Enriquecimento ambiental é um conjunto de práticas que melhoram o bem-estar físico e mental dos animais, oferecendo estímulos que promovem comportamentos naturais."
                        />
                        <QualityItem 
                            icon={<FaGift />}
                            title="Mimos Primeira Compra"
                            description="Em sua primeira compra você irá receber os nossos mimos de degustação, que oferecem relaxamento, redução da ansiedade e hidratação em dias quentes, para que o seu cão tenha uma vida mais ativa e satisfatória"
                        />
                        <QualityItem 
                            icon={<FaDog />}
                            title="Foco em Pets Pequenos"
                            description="Especialistas em nutrição para cães de pequeno porte"
                        />
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="container mx-auto py-12 px-8">
                    <h2 className="text-2xl text-gray-700 sm:text-4xl font-sans font-bold tracking-widest text-center mb-8">Nossos Parceiros</h2>
                    <div className='flex items-center justify-center'>
                        <FaPaw className='text-5xl text-pet-orange mr-4'/> 
                        <p className='text-black text-3xl'>La Vet Veterinaria / Cotia - SP</p>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Partners;
