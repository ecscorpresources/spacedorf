import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ShopNowLink } from "../components/StyledComponents";

const ShopLink2 = styled(Link)`
  color: ${(props) => props.textColor};
  padding: 2.5px 25px;
  font-size: 1.3rem;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  border: 2px solid ${(props) => props.textColor};
  align-self: flex-end;
`;
const Banner4 = styled.div`
  position: relative;

  .banner-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;

    div {
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-size: 3.5rem;
      color: #000;
      font-weight: bold;
      margin-block-start: 0;
      margin-block-end: 0;
      /* margin-bottom: 2px !important; */
    }

    h4 {
      font-size: 2.4rem;
      color: #000;
      font-weight: 600;
      margin-block-start: 0;
      margin-block-end: 0;
      /* margin-bottom: 1rem !important; */
    }
    h5 {
      font-size: 2rem;
      color: #000;
      font-weight: 600;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-bottom: 0 !important;
    }
    .footer {
      margin-bottom: 1rem !important;
    }
  }
`;

function ProductsBanner({
  banner1,
  banner4,
  textColor,
  textHead = "Save up to",
  textBold,
  textBody,
  textFooter = "ON YOUR GROCERIES",
  padLeft = "20rem",
}) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <Banner4>
        <img src={banner4} alt="banner" />
        {/* <div className="banner-text">
          <div style={{ paddingLeft: `${padLeft}` }}>
            <h4 style={{ color: `${textColor}` }}>{textHead}</h4>
            <h2 style={{ color: `${textColor}` }}>{textBold && textBold}</h2>
            <h5 style={{ color: `${textColor}` }}>{textBody && textBody}</h5>
            <h5 style={{ color: `${textColor}` }} className="footer">
              {textFooter}
            </h5>
            <ShopLink2 to="/" style={{ color: `${textColor}` }}>
              Shop Now
            </ShopLink2>
          </div>
        </div> */}
      </Banner4>
      {banner1 && (
        <Banner className="banner-1">
          <img src={banner1} alt="banner" />
          <div className="banner-text">
            <div>
              <h5>Enjoy up to 35% Discount today</h5>
              <h6>On Groceries ordered on Tuesday</h6>
              <p>Delivery can be scheduled to suit your timing at any time</p>
              <ShopNowLink to="/">Shop Now</ShopNowLink>
            </div>
          </div>
        </Banner>
      )}
    </Slider>
  );
}

// class ProductsBanner extends Component {
//   render() {
//     var settings = {
//       dots: false,
//       arrows: false,
//       infinite: true,
//       speed: 1000,
//       autoplaySpeed: 3000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//     };
//     return (
//       <Slider {...settings}>
//         <Banner4>
//           <img src={this.props.banner5} alt="banner" />
//           <div className="banner-text">
//             <div>
//               <h4 style={{ color: `${this.props.textColor}` }}>Save up to</h4>
//               <h2 style={{ color: `${this.props.textColor}` }}>60%</h2>
//               <h5 style={{ color: `${this.props.textColor}` }}>
//                 ON YOUR MONTLY GROCREIES
//               </h5>
//               <ShopLink2 to="/" style={{ color: `${this.props.textColor}` }}>
//                 Shop Now
//               </ShopLink2>
//             </div>
//           </div>
//         </Banner4>
//         <Banner className="banner-1">
//           <img src={this.props.banner1} alt="banner" />
//           <div className="banner-text">
//             <div>
//               <h5>Enjoy up to 35% Discount today</h5>
//               <h6>On Groceries ordered on Tuesday</h6>
//               <p>Delivery can be scheduled to suit your timing at any time</p>
//               <ShopNowLink to="/">Shop Now</ShopNowLink>
//             </div>
//           </div>
//         </Banner>
//         {/* <Banner3>
//           <img src={this.props.banner2} alt="banner" />
//           <div className="banner-text">
//             <div>
//               <h5>50kg bag of Rice</h5>
//               <h6>N11,500 Only</h6>
//               <p>
//                 Delivery can be scheduled to suit your timing <br /> at any time
//               </p>
//               <ShopNowLink to="/">Shop Now</ShopNowLink>
//             </div>
//           </div>
//         </Banner3> */}

//         {/* <Banner2>
//           <img src={this.props.banner3} alt="banner" />
//           <div className="banner-text">
//             <div>
//               <h5>Shop all your grocery needs</h5>
//               <h6>Free delivery on groceries up to N10,000</h6>
//               <ShopLink to="/">Shop Now</ShopLink>
//             </div>
//           </div>
//         </Banner2> */}

//         {/* <div className="banner-text">
//             <div>
//               <h5>Shop all your grocery needs</h5>
//               <h6>Free delivery on groceries up to N10,000</h6>
//               <ShopLink to="/">Shop Now</ShopLink>
//             </div>
//           </div> */}
//       </Slider>
//     );
//   }
// }

// const ShopLink = styled(ShopNowLink)`
//   color: #fff !important;
//   border: 2px solid #fff;
// `;

const Banner = styled.div`
  position: relative;

  .banner-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 3rem;

    h5 {
      font-size: 2.5rem;
      color: #000;
      font-weight: bold;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    h6 {
      font-size: 2rem;
      color: #000;
      font-weight: 600;
      margin-bottom: 0 !important;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    p {
      font-size: 1.23rem;
      color: #000;
      font-weight: 600;
      margin-bottom: 1rem !important;
    }
  }
`;

// const Banner2 = styled.div`
//   position: relative;

//   .banner-text {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-left: 20rem;

//     h5 {
//       font-size: 2.8rem;
//       color: #fff;
//       font-weight: bold;
//       margin-bottom: 5px !important;
//     }

//     h6 {
//       font-size: 2.2rem;
//       color: #fff;
//       font-weight: 600;
//       margin-bottom: 1rem !important;
//     }
//   }
// `;

// const Banner3 = styled.div`
//   position: relative;

//   .banner-text {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     align-items: center;
//     padding-left: 8rem;

//     h5 {
//       font-size: 2.8rem;
//       color: #000;
//       font-weight: bold;
//       margin-bottom: 5px !important;
//     }

//     h6 {
//       font-size: 2.3rem;
//       color: #000;
//       font-weight: 600;
//       margin-bottom: 1rem !important;
//     }

//     p {
//       font-size: 1.23rem;
//       color: #000;
//       font-weight: 600;
//       margin-bottom: 1rem !important;
//     }
//   }
// `;

export default ProductsBanner;
