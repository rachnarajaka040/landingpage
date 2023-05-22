import React from 'react'
import '../First-heading/HeaderOne.css'
function HeaderFour() {
  return (
    <div style={{width:"100%"}}>
          <section class="offers-jsut-for-you-section">
        <div class="parent">
            <div class="child1">
                <h2 class="heading">
                    <span>Offers Just for You</span>
                </h2>
            </div>
            <div class="child2">
                  <div class="offer">
                    <a href="#">
                        <div class="img-and-text">
                            <div class="img"><img src="https://cms-contents.pharmeasy.in/offer/32bd63c6305-25_off.jpg?dim=1440x0" alt="flat 25% off" /></div>
                            <div class="text"> <span>FLAT 25% OFF + FREE DELIVERY on <br/> first 3 medicine orders</span></div>
                        </div>
                    </a>
                  </div>
                  <div class="offer">
                    <a href="#">
                        <div class="img-and-text">
                            <div class="img"><img src="https://cms-contents.pharmeasy.in/offer/71e36ddc397-flat_27_off.jpg?dim=1440x0" alt="flat 27% off" /></div>
                            <div class="text"> <span>FLAT 25% OFF + up to Rs.5000 <br/> surprise cashback</span></div>
                        </div>
                    </a>
                  </div>
                  <div class="offer">
                    <a href="#">
                        <div class="img-and-text">
                            <div class="img"><img src="https://cms-contents.pharmeasy.in/offer/32bd63c6305-25_off.jpg?dim=1440x0" alt="flat 25% off" /></div>
                            <div class="text"> <span> Log in to view more offers</span></div>
                        </div>
                    </a>
                  </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HeaderFour