import React from 'react';
import './HeaderOne.css';
function HeaderOne() {
    
  return (
    <div class="main-page" style={{width:"100%"}}>
      <h2 class="first-heading">What are you looking for?</h2>
      <section class="top-navbar-cards-section">
      
        <div class="top-navbar-slider" style={{columnGap:"2rem"}}>
          
            <div class="slide">
                <a href="./Pages/searchmed.html">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0" alt="Medicine" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Medicine</span> <br/>
                    <span class="offer">UPTO 20% OFF</span>
                </a>
            </div>
          
            <div class="slide">
                <a href="">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="Lab Tests" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Lab Tests</span><br/>
                    <span class="offer">UPTO 70% OFF</span>
                </a>
            </div>
        
            <div class="slide">
                <a href="">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" alt="Healthcare" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Healthcare</span><br/>
                    <span class="offer">UPTO 60% OFF</span>
                </a>
            </div>
          
            <div class="slide">
                <a href="">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0" alt="Surgeries" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Surgeries</span><br/>
                    <span class="offer">UPTO 20% OFF</span> 
                </a>
            </div>
            
            <div class="slide">
                <a href="">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="Health Blogs" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Health Blogs</span><br/>
                  <span class="offer">UPTO 20% OFF</span>
                </a>
            </div>
              
            <div class="slide">
                <a href="">
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" alt="Plus" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Plus</span><br/>
                    <span class="offer">SAVE 5% EXTRA</span>
                </a>
            </div>
           
            <div class="slide">
                
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt="Offers" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Offers</span><br/>
                   
               
            </div>
            
            <div class="slide">
               
                    <div class="img">
                        <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" alt="Value Store" />
                    </div>
                    <hr/>
                    <span class="catagery-name">Value Store</span><br/>
                    <span class="offer">UPTO 50% OFF</span>
                
            </div>

          </div>
          
    </section>
    </div>
  )
}

export default HeaderOne




