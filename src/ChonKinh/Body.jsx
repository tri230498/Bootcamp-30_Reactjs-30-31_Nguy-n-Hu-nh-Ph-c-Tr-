import React, { Component } from 'react'
import './style/style.css'
export default class Body extends Component {
  render() {
    let {state} = this.props;
    return (
      <div className="container text-center">
        <div className="row">
            <div className="col-6">
                <div>
                <img className='mauthu' src="./img/model.jpg" alt="..." height={500}/>
                <span className="luaMatKinh">
                  <img src={state} alt="" style={{width: '38%'}}/>
                </span>
                </div>
            </div>
            <div className="col-6">
                <div>
                <img src="./img/model.jpg" alt="..." height={500}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
