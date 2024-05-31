import React from 'react'
import thankyou from '/thankyou.svg'

const ThankYou = () => {
  return (
  <>
  <div className="wrap">
  <div className="image"> 
  <img src= {thankyou} alt='thank-you'/>
  </div>
  <div className='thanks-right'>
        <h3><b>Thank You!</b></h3>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  </div>
  </>
  );
};

export default ThankYou;