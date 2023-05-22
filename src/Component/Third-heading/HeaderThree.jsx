import React from 'react'
import '../First-heading/HeaderOne.css'
function HeaderThree() {
  return (
    <div>
        <section class="lab-tests-by-health-concern-section">
        <div class="parent">
            <div class="upper-heading-and-img">
                <h2 class="heading">Lab Tests by Health Concern</h2>
                <div class="brand-img">
                    <span>Powered by</span>
                    <img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" alt="Thyrocare Img"  />
                </div>
            </div>
            <div class="slider">
                {/* <!-- 1.Full Body Checkups card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/fc7cb3e07e2-checkups.png?dim=360x0" alt="Full Body Checkups"  />
                    </a>
                </div>
                {/* <!--2. Vitamins Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=360x0" alt="Vitamins" />
                    </a>
                </div>
                {/* <!--3. Diabetes Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=360x0" alt="Diabetes" />
                    </a>
                </div>
                {/* <!-- 4.Thyroid Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=360x0" alt="Thyroid" />
                    </a>
                </div>
                {/* <!-- 5.Women Care Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=360x0" alt="Women Care" />
                    </a>
                </div>
                {/* <!--6. Fever and Infection Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=360x0" alt="Fever and Infection" />
                    </a>
                </div>
                {/* <!--7. Covid Care Card --> */}
                <div class="slide">
                    <a href="#">
                        <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/6e78a241e48-CovidCare.jpg?dim=360x0" alt="Covid Care" />
                    </a>
                </div>
                
                
            </div>
    
        </div>
    </section>
    </div>
  )
}

export default HeaderThree