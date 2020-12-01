import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-start"
              : value >= 0.5
              ? "fas fa-start-half-alt"
              : "far fa-start"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? "fas fa-start"
              : value >= 1.5
              ? "fas fa-start-half-alt"
              : "far fa-start"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? "fas fa-start"
              : value >= 2.5
              ? "fas fa-start-half-alt"
              : "far fa-start"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-start"
              : value >= 0.5
              ? "fas fa-start-half-alt"
              : "far fa-start"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-start"
              : value >= 0.5
              ? "fas fa-start-half-alt"
              : "far fa-start"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
