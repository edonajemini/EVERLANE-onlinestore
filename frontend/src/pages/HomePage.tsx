import React, { useState } from "react";
import { Header } from "../components/Header";
import "../pages/HomePage.css";
export function HomePage() {
   
  return (
    <div className="homepage">
      <h1>Fashion is a dirty business. We’re on a mission to clean it up.</h1>
      <div className="homepage-firstview">
        <div className="homepage-offers">
          <p>End-of-Year Sale Up to 60% Off</p>
          <div className="homepage-offers-buttons">
            <button>Shop Women</button>
            <button>Shop Men</button>
          </div>
        </div>
        <div className="homepage-new-arrivals">
          <p>New Arrivals</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="everlane_IRL">
        <h2>Everlane IRL</h2>
        <p>
          Share your latest looks with #EverlaneOnYou for a chance to be
          featured.
        </p>
        <div className="everlane_IRL_posts">
            <img src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=2000" width="300px" height="250px"/>
            <img src="https://www.byrdie.com/thmb/SyEnpHMlTlX5FgKdoIkMzc5UgSY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashionbloggersprimary-2210aaad71a0454a899fa4345bef529f.jpg" width="300px" height="250px"/>
            <img src="https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?w=2000" width="300px" height="250px"/>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/90s-trends-4-1671734473.png?crop=1.00xw:0.693xh;0,0&resize=640:*" width="300px" height="250px"/>
        </div>

        <form className="everlane_IRL_form">
            <label>Name: </label>
            <input></input>
            <label>Image: </label>
            <input></input>
            <button>Share</button>
        </form>
       
      </div>
    </div>
  );
}
