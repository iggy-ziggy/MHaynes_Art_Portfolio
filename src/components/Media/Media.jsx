import React from 'react'
import './media.css';

const Media = () => {
  return (
    <div className='relative_box about_box'>
        <div className='img-container'>
            <div className='placeholder'></div>
        </div>
        {/* <img src="https://placehold.co/1000x500/000000/FFFFFF/png" alt="" /> */}
        <div className='p2'>
            <p className='about medium_text absolute_text_1'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <p className='about small_text absolute_text_2'>Lorem ipsum dolor sit.</p>
        </div>
    </div>
  )
}

export default Media