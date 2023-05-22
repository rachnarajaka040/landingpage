import React from 'react'
import '../First-heading/HeaderOne.css'
function HeaderFive() {
  return (
    <div style={{width:"100%"}}>
        <section class="Payment-offers-section">
        <div class="parent">
            <div class="second-parent">
                <div class="child1">
                        <h2 class="heading">
                            <span>Payment offers</span>
                        </h2>
                </div>
                <div class="child2">
                       <div class="slider">
                           {/* <!--1. HSBC Discount --> */}
                           <div class="slide">
                              <a href="#">
                                <img src="https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0" alt="HSBC -flat 10% discount up to 150rs" />
                              </a>
                           </div>
                           {/* <!--2. Citi bank discount --> */}
                           <div class="slide">
                            <a href="#">
                              <img src="https://cdn01.pharmeasy.in/dam/banner/banner/9d72c75f078-CITI.jpg?dim=1440x0" alt=" Up to 600rs instant saving" />
                            </a>
                         </div>
                         {/* <!--3.AU SMALL FINANCE BANK  --> */}
                         <div class="slide">
                            <a href="#">
                              <img src="https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0" alt="Au Small Finance bank- flat 150rs off " />
                            </a>
                         </div>
                         {/* <!-- FREECHARGE --> */}
                         <div class="slide">
                            <a href="#">
                              <img src="https://cdn01.pharmeasy.in/dam/banner/banner/3b8a5707399-FREECHARGE.jpg?dim=1440x0" alt=" Freecharge -Get 10% Discount" />
                            </a>
                         </div>
                         {/* <!-- Airtel Payments Bank --> */}
                         <div class="slide">
                            <a href="#">
                              <img src="https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0" alt=" Airtel Payment bank -Flat 80rs Cashback" />
                            </a>
                         </div>
                       </div>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default HeaderFive