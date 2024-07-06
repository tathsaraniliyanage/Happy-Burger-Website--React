
// function Header(){
//    return(
//     <>
//     <header>
//        <h1>My Website</h1>

//     </header>
     
//     </>
//    ) 
// }

// export default Header



import imgshop from './assets/shop.png'

function Header() {
    return (
      <header>
        {/* <h1>Happy Burger</h1> */}
        <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Ads</li></a>
            <a href="#"><li>Discounts</li></a>
            <h1> Happy Burger <br></br>  <br />   <span>Serving up sizzling satisfaction one bite at a time  </span></h1>
            <a href="#"><li>Service</li></a>
            <a href="#"><li>Receipe</li></a>
            <a href="#"><li>Crew</li></a>
            <a href="#"><li>Contact</li></a>
            <li><img src={imgshop} alt="" /></li>
        </ul>
        
      </header>
    );
 }
 
 export default Header;
 