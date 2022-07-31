import React, { Component } from "react";

export default class CacMauKinh extends Component {
  render() {
    let { mauKinh } = this.props;
    let { url } = mauKinh;
    return (
        <img src={url} alt="..." style={{ width: "100%", objectFit: 'cover', height: '100'}} />
    );
  }
}
