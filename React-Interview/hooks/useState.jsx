// HACK: what is state

import { useState } from "react";

// NOTE: useState is a hook in React that allows functional components to manage state by
// declaring state variables and providing a function to update them.




// NOTE: In this, the setCount function is the async - means they will get executed simultaneously so for the each
// increment,
// the code will count will be the 1 so, to fix this, we need to access the prev count and then update.


const handleIncrement = () => {
  // setCount(count + 1);
  // setCount(count + 1);
  // setCount(count + 1);

  // We will do this instead of above
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};



// NOTE: what is the two way binding ?
// it is an concept that allows for the sync of the state and the view in both the directions
// this can be done using the state and the controlled components

<p> Input Value : {value}</p>
<input value={value} oncChange={(e)=> setavlue(e.target.value)}> </input>


// NOTE: how to build an state to handle firstName, LastName and the address in the same state ?
// making that using the object data type


const [userData, setuserData] = useState({
  firstName: "",
  secondName: "",
  address: "",
});



const handleInputChange = () => {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value })
}


<input placeholder="First Name" type="text" name="firstName" onChange={hadleInputChange} />
<input placeholder="Last Name" type="text" name="secondName" onChange={hadleInputChange} />
<input placeholder="address" type="text" name="address" onChange={hadleInputChange} />





