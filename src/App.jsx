import React from 'react'
import { Navbar,
  Billing,
  Business,
  CTA,
  Stats,
  Testimonials,
  Hero,
  Footer,
  CardDeal,
  Clients} from './components'
import styles from './style'

function App() {
  

  return (  
      < div className='bg-primary w-full overflow-hidden'>
         <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
         </div>

         <div className={`${styles.flexCenter}`}> 
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
         </div>

         <div className={`${styles.flexCenter}`}> 
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>
          </div>
         </div>
      </div>
  )
}

export default App
