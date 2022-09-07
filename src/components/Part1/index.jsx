import React from 'react'


import './index.css'
import Header from './Header'
import Clock from './Clock'
import QRCode from './QRCode.png'

export default function Part1(props) {

  return (
    <div className='Part1-container'>
      <div>
        <Header/>
      </div>
      <div className='clock-container'>
        <Clock/>
      </div>
      <div className='QRCode-container'>
        <div className='QRCode-border-outside'>
          <div className='QRCode-border-inside'>
            <img src={QRCode} alt='二维码失效' className='QRCode' />
          </div>
        </div>
      </div>
      <div className='text-green'>
          <span> 杭州大数据健康码：绿码 </span>
          <div className='space'></div>
          <span> 已完成新冠疫苗接种</span>
          <div className='space-12313'></div>
          <div className='text-2141'>
          凭蓝码可在学校朝晖校区、屏峰校区、莫干山校区范围内配合有效证件通行，请主动出示，配合检查。 
          </div>
      </div>
    </div>
    
  )
}
