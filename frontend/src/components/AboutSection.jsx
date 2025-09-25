import React from 'react'
import HeaderBanner from '../components/HeaderBanner'


function AboutSection() {
  return (
    <div>
      <HeaderBanner heading1={'About'}
      bgImg={`https://cdn.dribbble.com/userupload/42271036/file/original-7343ade4c74b7b04f341cd0ddce462c5.gif`}
        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, praesentium.'} />
    </div>
  )
}

export default AboutSection