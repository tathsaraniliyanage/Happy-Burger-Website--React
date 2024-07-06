import img5 from './assets/burger2.png'

function Card(){
    return(
     
        <div className="card">
          <img className='card-img' src={img5} alt="burger" />
          <h2 className='card-title'>Chicken Burger</h2>
          <p className='card-desc'>It's a yummy chicken burger.You can now enjoy with it.</p>
          <div className="btn-container1">
           <button className="btn-addtocart">Add To Cart</button>
           <button className="btn-price">$25.99</button>
          </div>
        </div>
      
    )
   
}
export default Card;