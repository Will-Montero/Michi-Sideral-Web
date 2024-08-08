

export const merch = () => {
    const products = [
        {
            name: 'Pegatina Sideral',
            price: '$20.000',
            image: '../assets/images/merch/stikerGato.jpen'
        }, 
        {
            name: 'Camiseta',
            price: '$30.000',
            image: '../assets/images/merch/camisetaGato.jpen'
        },
        {
            name: 'Michi Botones',
            price: '$5.000',
            image: '../assets/images/merch/botonGato.jpen'
        }
    ];
    
    let currentIndex = 0;
    
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productImage = document.getElementById('product-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    function updateProductDisplay() {
        productName.textContent = products[currentIndex].name;
        productPrice.textContent = products[currentIndex].price;
        productImage.src = products[currentIndex].image;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : products.length - 1;
        updateProductDisplay();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < products.length - 1) ? currentIndex + 1 : 0;
        updateProductDisplay();
    });
    
    // Initialize display
    updateProductDisplay();
    
  return {
    updateProductDisplay, productName, productPrice, productImage, prevBtn, nextBtn, currentIndex, products
  }
}
