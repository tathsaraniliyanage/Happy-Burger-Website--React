
import img3 from './assets/set.jpeg'
import imgp1 from './assets/post1.jpg'
import imgp2 from './assets/post2.jpg'
import imgp3 from './assets/post3.jpg'
import imgp4 from './assets/post4.jpg'

function Img(){
    return(
        <div className='img-set'>
        <img className='img3' src={imgp1} alt="" />
        <img className='img3' src={imgp2} alt="" />
        <img className='img3' src={imgp3} alt="" />
        <img className='img3' src={imgp4} alt="" />
     </div>
    )
   
}

export default Img;