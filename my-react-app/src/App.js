import './style.css'
import elonMuskPic from './elonMusk.jpg';

const myData = {
  name:"Elon Musk",
  // eslint-disable-next-line
  picUrl:elonMuskPic,
}

// With React, you can use functions to define elements and re-use them later on
// Inside the function return statement, include HTML code
// To process the function as an element, use <[function name] />
function MyButton() {
  return (
    //For CSS, instead of doing class= do className=
    <button className="buttonTesting">
      I'm a button
    </button>   
  );
}



function ProfilePicture(){
  return (
    <img className="profilePicture" src={myData.picUrl} alt={'Profile picture of ' + myData.name} />
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ProfilePicture />
    </div>
  );
}