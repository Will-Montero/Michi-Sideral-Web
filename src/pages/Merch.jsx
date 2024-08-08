import '../styles/merch.css'; // Asegúrate de que este archivo CSS esté en la carpeta correcta
import { useState } from 'react';

// Importa las imágenes como módulos
import stikerGato from '../assets/images/merch/stikerGato.jpeg';
import camisetaGato from '../assets/images/merch/camisetaGato.jpeg';
import botonGato from '../assets/images/merch/botonGato.jpeg';

const products = [
    {
        name: 'Pegatina Sideral',
        price: '$20.000',
        image: stikerGato
    },
    {
        name: 'Camiseta',
        price: '$30.000',
        image: camisetaGato
    },
    {
        name: 'Michi Botones',
        price: '$5.000',
        image: botonGato
    }
];

export const Merch = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateProductDisplay = () => {
        const product = products[currentIndex];
        return (
            <div className="product-info">
                <h2 id="product-name">{product.name}</h2>
                <p id="product-price">{product.price}</p>
                <button className="botonComprar">comprar</button>
            </div>
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : products.length - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex < products.length - 1) ? currentIndex + 1 : 0);
    };

    return (
        <section className="Merch">
            <header className="headerMerch">
                <h2 className="tituloMerch">Merch...</h2>
            </header>
            <div className="containerMerch">
                <div className="image-container">
                    <img className='imagen-merch' id="product-image" src={products[currentIndex].image} alt="Product" />
                </div>
                <div className="controls">
                    <button id="prev-btn" onClick={handlePrevClick}>⬅️</button>
                    {updateProductDisplay()}
                    <button id="next-btn" onClick={handleNextClick}>➡️</button>
                </div>
            </div>
        </section>
    );
};
