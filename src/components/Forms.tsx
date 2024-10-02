import React from "react";

interface RedirectButtonProps {
    url: string;
    text: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ url, text }) => {
    const handleClick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleClick}
            className="bg-pet-orange mb-8 flex justify-center items-center max-w-sm w-full text-center tracking-widest text-white font-sans font-bold py-2 px-4 rounded-lg
                shadow-md hover:bg-forest-green transition-colors duration-300
                transform hover:scale-105 active:scale-95 focus:outline-none
                focus:ring-2 focus:ring-pet-orange focus:ring-opacity-50"
        >
            <span className="relative z-10">{text}</span>
            <span
                className="absolute inset-0 bg-white opacity-0 rounded-lg
                    hover:opacity-20 transition-opacity duration-300"
            ></span>
        </button>
    );
};

export default RedirectButton;
