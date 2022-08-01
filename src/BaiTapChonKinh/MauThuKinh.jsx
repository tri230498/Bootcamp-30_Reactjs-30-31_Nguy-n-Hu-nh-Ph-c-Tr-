import React, { Component } from 'react'

export default class MauThuKinh extends Component {
  render() {
    let {state} =this.props
    return (
        <div className="container text-center py-lg-5">
        <div className="row">
            <div className="col-6 mauThuKinh">
                <img src="./img/model.jpg" alt="..." style={{width: '50%'}}/>
                <span className='kinh'><img src={state} alt="" style={{width: '45%'}}/></span>
            </div>
            <div className="col-6">
                <img src="./img/model.jpg" alt="..." style={{width: '50%'}}/>
            </div>
        </div>
    </div>
    )
  }
}
