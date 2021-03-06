// import "./Banner.css";

// function Banner() {
//     console.log('Hiiiiiii');
//     return (
//         <section>
//             <div class="grid-item22"><img src = "./SalluBhai.jpeg" height="250" width = "100%" alt="NotAvailable"></img>
//             </div>
//         </section>
// );
// }

// export default Banner;



import React from "react";
import "./Banner.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Banner() {
  return (
    <div className="App">
     <AliceCarousel autoPlay activeIndex infinite disableButtonsControls autoPlayInterval="3000">
     <a href="/products/606698618aaa200aad49b355"><img src="/images/Banner1.webp" className="sliderimg" alt=""/></a>
      <img src="/images/Banner2.webp" className="sliderimg" alt=""/>
      <img src="/images/Banner3.webp" className="sliderimg" alt=""/>
      <img src="/images/Banner4.webp" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}

export default Banner;