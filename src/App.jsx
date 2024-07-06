// import Header from 'Header.jsx'

// function App() {
//    return(
//     <>
//       <Header/> 
//     </>
//    )
// }

// export default App



import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Img from './Img.jsx'

function App() {
   return(
    <>
      <Header/> 
      <div className='content-1'>
        <Content/>
      </div>
      <Img/>
     <div  className='cards'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
      <Footer/>
    </>
   )
}

export default App

