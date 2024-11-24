"use client";
import { useState } from "react";
import Image from "next/image";

export default function Merch() {
    const items = {
        "1": {
            "image": "/FranelaOversize.jpg",
            "link": "https://qlqestacomida.shop/",
        },
        "2": {
            "image": "/3.jpg",
            "link": "https://qlqestacomida.shop/",
        },
        "3": {
            "image": "/14.jpg",
            "link": "https://qlqestacomida.shop/",
        },
        "4": {
            "image": "/bandana.jpg",
            "link": "https://qlqestacomida.shop/",
        },
        "5": {
            "image": "/5.jpg",
            "link": "https://qlqestacomida.shop/",
        },
    };

    const [filteredItems] = useState(Object.values(items));

    return (
        <div className="relative flex flex-col items-center justify-center p-4 py-32">
            {/* Doodles en las esquinas */}
            <Image
                src="/doodle.svg"
                alt="doodle-left"
                width={200}
                height={200}
                className="absolute top-10 rotate-3 left-0 opacity-30"
            />
           

            {/* Título y descripción */}
            <h1 className="text-4xl font-bold text-center">LO MAS PELVELSO</h1>
            <p className="font-light text-white">QLQ ESTA COMIDA MERCH</p>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                {filteredItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="block rounded-xl p-4 transition-transform transform hover:scale-105"
                    >
                        <Image
                            src={item.image}
                            alt="merch"
                            width={200}
                            height={200}
                            className="rounded-xl shadow-md"
                        />
                    </a>
                ))}
                 <Image
                src="/doodle.svg"
                alt="doodle-right"
                width={200}
                height={200}
                className="absolute hidden top-[480px] rotate-180 right-0 opacity-30 sm:block"
            />
            </div>
        </div>
    );
}

