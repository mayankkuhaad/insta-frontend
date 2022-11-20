import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Post.css";


export default function Post() {
  const [users, setusers] = useState([]);

 // 
  useEffect(() => {
    axios
      .get("https://mayank-insta-clone.herokuapp.com/show")
      .then((res) => {
        console.log(res.data.posts);
        setusers(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return users.map((user) => (
    <div className="postBox" key={user.name}>
      <div className="postHead">
        <div className="NameLocation">
          <p className="Name">{user.name}</p>
          <p className="Location">{user.location}</p>
        </div>
        <div className="Menu">
          <img src={require("../Svg/menu-svgrepo-com.svg").default} alt="" />
        </div>
      </div>
      <div className="Image">
        <img
          className="mainImg"
          src={user.PostImage}
          alt=""
        />
      </div>
      <div className="LikeDate">
        <div className="likebox">
          <img
            className="like"
            src={require("../Svg/heart-like-svgrepo-com.svg").default}
            alt=""
          />
          <img
            className="Send"
            src={require("../Svg/send-svgrepo-com.svg").default}
            alt=""
          />
        </div>
        <div className="Date">
          <p>{user.date}</p>
        </div>
      </div>
      <div className="Like">
        <p>{user.likes} Likes</p>
      </div>
      <div className="Discription">
        <p>{user.description}</p>
      </div>
    </div>
  ));
}
