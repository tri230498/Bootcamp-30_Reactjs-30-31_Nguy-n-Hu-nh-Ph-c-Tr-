import React, { Component } from "react";
import Header from "./Header";
import "../assets/style/style.css";
import MauThuKinh from "./MauThuKinh";
export default class BaiTapChonKinh extends Component {
  state = {
    img: "./img/v1.png",

  };

  render() {
    return (
      <div className="wrapper">
        <header style={{ backgroundColor: "#3c3c3ca6" }}>
          <Header />
        </header>
        <section>
          <MauThuKinh state={this.state.img} />
          {/* item */}
          <div className="container w-60">
            <div className="row bg-light">
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g1.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v1.png"})
                  }}
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g2.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v2.png"})
                  }}
                />
              </div>
              <div
                className="col-2 border mb-3 mx-3 text-center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              >
                <img
                  src="./img/g3.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v3.png"})
                  }}
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g4.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v4.png"})
                  }}
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g5.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v5.png"})
                  }}
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g6.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v6.png"})
                  }}
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g7.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v7.png"})
                  }}
                  
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g8.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v8.png"})
                  }}
                  
                />
              </div>
              <div className="col-2 border mb-3 mx-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src="./img/g9.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "70%" }}
                  onClick={()=> {
                    this.setState({img: "./img/v9.png"})
                  }}
                  
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
