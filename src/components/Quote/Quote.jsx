import React from 'react'
import './quote.css';

const Quote = () => {
  return (
    // <div className='relative_box quote_box'>
    //     <div className='img-container'>
    //         <div className='placeholder'></div>
    //     </div>
    //     {/* <img src="https://placehold.co/1000x500/000000/FFFFFF/png" alt="" /> */}
    //     <div className='p2'>
    //         <p className='quote bold medium_text absolute_text_1'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    //         <p className='quote small_text absolute_text_2'>Lorem ipsum dolor sit.</p>
    //     </div>
    // </div>
    <div className='quote_container'>
      <div className='quote'>
        <div className="main_fade_in">
          <p className='white medium_text' >I tried to come up with a clever quote here.</p>
        </div>
        <div className="sec_fade_in">
          <p className='white small_text'>Really.<span className="third_fade_in"> I did.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Quote