import React from "react";
import "../styles/SearchItem.modules.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <div className="imageContainer">
        <img
          src="https://cdn2.rcstatic.com/images/car_images/web/chevrolet/spark_lrg.jpg"
          alt=""
          className="siImg"
        />
      </div>

      <div className="siDesc">
        <div className="siRating">
          <span>Top Pick</span>
        </div>
        <div className="siTitle">
          <h3>
            Chevrolet Spark <span>or similar small car</span>{" "}
          </h3>
        </div>

        <div className="siCarDesc">
          <span className="">5 Seats</span>
          <span className="">Manual</span>
          <span className="">1 Large bag</span>
          <span className="">1 Small bag</span>
          <span className="">Unlimited Mileage</span>
        </div>

        <div className="siLocation">
          <span className="siFeatures">Location</span>
        </div>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siDaysxPrice">Price for 3 days:</span>
          <span className="siPrice"> US$112.07</span>
          <span className="siAmendments">free amendments</span>

          <button className="siCheckButton">View deal</button>
        </div>
      </div>
      
    </div>
  );
};

export default SearchItem;
