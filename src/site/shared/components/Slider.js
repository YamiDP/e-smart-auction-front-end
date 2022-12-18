import React from "react";

export default function Slider() {
  return (
    <section className="slider">
      <div className="flexslider">
        <ul className="slides">
          <li>
            <img src="/images/thumb1.png" height="100%" />
          </li>
          <li>
            <img src="/images/thumb2.png" height="100%" />
          </li>
          <li>
            <img src="/images/thumb3.png" height="100%" />
          </li>
        </ul>
      </div>
    </section>
  );
}
