import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
    const openWhatsApp = () => {
        const phoneNumber = "5511972888081";
        const message =
            "Olá! Gostaria de saber mais sobre os produtos da Pet Sabor.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    const openInstagram = () => {
        const instagramUrl = "https://www.instagram.com/opetsabor?igsh";
        window.open(instagramUrl, "_blank");
    };

    return (
        <section id="contact" className="flex flex-col items-center w-full">
            <div className="bg-pet-orange flex flex-col rounded-lg  shadow-md p-1 my-5 w-full">
                <p className="flex w-ful items-center justify-center text-center font-sans text-lg sm:text-2xl">
                    Entre em contato agora para saber mais:
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                    <button
                        onClick={openWhatsApp}
                        className="bg-forest-green w-[90%] flex items-center justify-center rounded-lg shadow-md p-4 m-2 hover:bg-green-700 transition-colors duration-300"
                    >
                        <FaWhatsapp className="text-white text-3xl mr-2" />
                        <span
                            className="text-center text-lg font-sans text-orange-100"
                            style={{
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
                            }}
                        >
                            WhatsApp
                        </span>
                    </button>
                    <button
                        onClick={openInstagram}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 w-[90%] flex items-center justify-center rounded-lg shadow-md p-4 m-2 hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                        <FaInstagram className="text-white text-3xl mr-2" />
                        <span
                            className="text-center text-lg font-sans text-white"
                            style={{
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
                            }}
                        >
                            Instagram
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
