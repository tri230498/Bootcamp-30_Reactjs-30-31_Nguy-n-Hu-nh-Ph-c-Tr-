import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container px-lg-5 mt-5">
        <div className="card w-100 text-center p-4 rounded-3 p-lg-5 bg-light border-0">
          <div className="card-body m-4 m-lg-5">
            <h1 className="card-title">A warm welcome!</h1>
            <p className="card-text fs-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
