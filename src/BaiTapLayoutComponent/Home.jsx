import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className='bg-dark'>
        <Header />
        </header>
        <section>
          <Body/>
        </section>
        <footer className='py-5 bg-dark'>
          <Footer />
        </footer>
      </div>
    )
  }
}
