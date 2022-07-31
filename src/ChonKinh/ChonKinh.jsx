import React, { Component } from "react";
import Body from "./Body";
import CacMauKinh from "./CacMauKinh";
import Header from "./Header";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ChonKinh extends Component {
  state = {
    thayMatKinh : {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  }
  render() {
    return (
      <div
        className="wrapper"
        style={{
          backgroundImage: "url(./img/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <header
          style={{ backgroundColor: "rgb(63 63 63 / 79%)" }}
          className={"text-center text-white py-4"}
        >
          <Header />
        </header>
        <section>
          <Body state= {this.state.thayMatKinh.url}/>



          <div className="container py-5 bg-white">
            <div className="row">
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g1.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center">
                <img
                  src="./img/g2.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g3.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g4.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center ">
                <img
                  src="./img/g5.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g6.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center ">
                <img
                  src="./img/g7.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g8.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", height: "50" }}
                />
              </div>
              <div className="col-2 mt-4 mx-3 border border-1 text-center d-flex align-items-center">
                <img
                  src="./img/g9.jpg"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
