import img from './assets/bg2.png'
import img3 from './assets/set.jpeg'
import img4 from './assets/set1.jpeg'
import img5 from './assets/burger2.png'

function Content() {
    return(
      
   <section className="content">
      <span className='span1'>______________________________________________________________________________________________________________________________________________________</span>
      <section className="content1">
        
        <div>
            {/* <h1>Yummy</h1> */}
            {/* <h1>Burgers</h1> */}
            {/* <h1>Serving up sizzling satisfaction one bite at a time</h1> */}
            <p>The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch. The patty needs to be juicy, the bun soft but sturdy, and you want the meat/bun/accompaniment ratio to be even from first to last bite. Then you can add to your heart's content.
            "Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"

            </p>
            <div className="btn-container">
               <button className="btn-clickhere">Click here</button>
               {/* <button className="btn-back">Back</button> */}
            </div>
        </div>



        <div>
             <img src={img} alt="img1" />
        </div>


        <div>
        <p>The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch. The patty needs to be juicy, the bun soft but sturdy, and you want the meat/bun/accompaniment ratio to be even from first to last bite. Then you can add to your heart's content.
            "Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"

            </p>
            <div className="btn-container">
               {/* <button className="btn-clickhere">Click here</button> */}
               <button className="btn-back">Signin</button>
            </div>
        </div>


      </section>
    </section>

    )
     

    }
    
 
 
 export default Content;


