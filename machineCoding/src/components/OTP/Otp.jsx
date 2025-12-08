
import React, { useState } from 'react'
import OtpInput from './OtpInput';

const Otp = () => {

    const[phoneNumber, setPhonenumber] = useState("");
    const [showOtp, setShowOtp] = useState(false);

    function handlePhone(e) {
        let val = e.target.value;
        setPhonenumber(val);
    }

    function handlePhoneSubmit(e){
        e.preventDefault();

        const regex = /[^0-9]/g;

        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("invalid Number");
            return;
        }else{
            setShowOtp(true);
        }


    }


  return (
    <div>
    <h1>this is the OTP Page </h1>
     {!showOtp ?  <form action="" onSubmit={handlePhoneSubmit}>

        <input onChange={handlePhone} type="text" value={phoneNumber} placeholder='Enter Phone Number' />

        <button> Submit </button>
     </form> 
     :
    <div>
        <h2>Enter the OTP sent to {phoneNumber}</h2>

        <OtpInput length ={10} />

    </div>
     
     }

    </div>
  )
}

export default Otp