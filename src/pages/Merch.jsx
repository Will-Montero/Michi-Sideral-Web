
export const Merch = () => {
  return (
    <section className="Merch">
  <header className="headerMerch">
    <h2 className="tituloMerch">Merch...</h2>
  </header>
  <div className="containerMerh">
    <div className="image-container">
        <img id="product-image"  alt="Product Image"/>
    </div>
    <div className="controls">
        <button id="prev-btn">⬅️</button>
        <div className="product-info" style="background: none;">
            <h7 id="product-name">Product 1</h7>
            <p id="product-price">$100</p>
            <button  className="botonComprar">comprar</button>
        </div>
        <button  className="botonMerch" id="next-btn">➡️</button>
    </div>

  </div>
</section>
 
  )
}
