import React from 'react'
import '../First-heading/HeaderOne.css'
function HeaderTwo() {
  return (
    <div>
      <section class="three-Big-Slide-section">
        <div class="slider">
            {/* <!-- Pocket Easy Days slide--> */}
            <div class="slide">
                <a href="#">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/88d47b91f22-02.jpg" alt="Pocket Easy Days" />
                </a>
            </div>
            {/* <!-- Book Comprehensive Full Body Checkup Slide--> */}
            <div class="slide">
                <a href="#">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/bfdbe58dbce-YAY550_Pocketeasy_HP_634x274.jpg" alt="Full Body Checkup" />
                </a>
            </div>
            {/* <!-- Take spacial care of your feet in winter Slide --> */}
            <div class="slide">
                <a href="#">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/2fc3d6fda7a-WhatsApp.jpeg" alt="Take spacial care of your feet in winter" />
                </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HeaderTwo
