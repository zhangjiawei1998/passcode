import React, { Component } from 'react'

import './index.css'
import logo from './logo.png'
import background from './header.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header-container'>
          <img src={background} alt="background不见了" className='background' />
          <div className='foreground'>
            <div className='line1'>
              <img src={logo} alt="logo不见了" className='logo' />
              <span className='text1'>校园通行证</span>
            </div>
            <div className='line2'>
              ()
            </div>
            <div className='line3'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
