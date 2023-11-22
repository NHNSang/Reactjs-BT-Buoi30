import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class BaiTapThucHanhLayOut extends Component {
  render() {
    return (
        <div >
            <Header></Header>
            <div className='container py-4'>
                <Body></Body>
            </div>
            <Footer></Footer>
        </div>
    )
  }
}
