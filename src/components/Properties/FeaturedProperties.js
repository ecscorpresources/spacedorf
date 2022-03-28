import React from "react";
import properties from "../../data/landing";
import styled from "styled-components";
import { Link } from "react-router-dom";

import chevron from "../../assets/img/7.png";

// class FeaturedProperties extends Component {
//   state = {
//     properties: [],
//   };

//   componentDidMount() {
//     this.setState({
//       properties: properties,
//     });
//   }
//   render() {
//     const featuredproperties = this.state.properties.filter(
//       (property) => property.featured === true
//     );
//     return (
//       <>
//         <section className="homeSecondSection">
//           {this.state.properties.length === 0 ? (
//             <Spinner />
//           ) : (
//             <article className="featured-properties">
//               <h5>find more</h5>
//               <div className="properties">
//                 {featuredproperties.map((property, index) => (
//                   <div key={index} className="property">
//                     <img
//                       className="img-fluid"
//                       src={property.img}
//                       alt="property"
//                     />
//                     <div className="type">
//                       <h6>{property.type}</h6>
//                       <div className="description">
//                         <p>{property.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </article>
//           )}
//         </section>
//       </>
//     );
//   }
// }

// export default FeaturedProperties;

export default function FeaturedProperties() {
  const [advert, setAdvert] = React.useState([]);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  React.useEffect(() => {
    setAdvert(properties);
  }, []);
  return (
    <Wrapper>
      {advert.map((property, index) => {
        return (
          <div className="property-card d-flex flex-column" key={index}>
            <img src={property.img} alt="property" />
            <h4>{property.title}</h4>
            <div className="txt">
              <p>{property.txt}</p>
              <p>{property.point}</p>
            </div>
            <div className="button">
              <Link to={property.link} onClick={handleClick}>
                {property.button}
              </Link>
              <div className="img-container">
                <img src={chevron} alt="" chevron />
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-gap: 2rem;
  justify-content: center;
  position: relative;

  h4 {
    position: absolute;
    font-weight: bold;
    font-size: 2.5em;
    color: #fff;
    top: 18%;
    margin-left: 3rem !important;
  }
  .property-card {
    min-height: 340px;
    border: 2px solid #e6e7e8;
    .txt {
      padding: 3rem;
      font-size: 1.3rem;
      line-height: 1.6em;
      p:nth-child(2) {
        font-weight: bold;
      }
    }
    .button {
      margin-top: auto;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 1rem;
      background-color: #6b7d87;
      font-size: 1.2em;
      color: #fff;
      padding: 1rem 3rem;
      text-align: center;
      display: flex;
    }
    .img-container {
      width: 5px;
      img {
        width: 100%;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      flex: 1;
    }
  }
`;
