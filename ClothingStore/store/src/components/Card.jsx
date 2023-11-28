import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({img,title,star,reviews,newPrice,prevPrice}) => {
  
const stars=()=>{
  let stars=[]
  for(let i =0;i<Math.random()*4+1;i++){ 
   stars.push(star);
}
return stars;
}
  
  return (
    <div>
      <section className="card">
        <img src={img} alt="ShoeCard" className="card-img" />
        <div className="card-details">
          <h3 className="card-titlte">{title}</h3>
          <section className="card-reviews">
         {stars()}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>{" $"+newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
