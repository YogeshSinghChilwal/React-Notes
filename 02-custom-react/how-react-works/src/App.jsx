import React from "react";
function App() {

  //~ 3- we can directly execute our method MyApp()
  function MyApp(){
    return(
      <p>Hello world!</p>
    )
  }

  //~ 4- end of the day react converts methods into tree like object so we created our own
  const reactElement  = {             
    type: 'a',      //div, p, h1
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

//~ 5- since our own tree like object dosen't work so we created two more objects wich react can understand
const anotherElement = (
  <a href="https://google.com">Click me to visit Google</a>
)

const myName = 'Yogesh' // variable we use like this in JSX <p>Name: {myName}</p>

//~ 6- how react inject variables from jsx code

const anotherElement2 = React.createElement(
  'a',
  { href: "https://google.com" },   //* can be set as empty
  "Click me to visit Google",
  " Name: ",
  myName    //^ at the end it will be converted into object like `reactElement` that is why we can not add if-else, for-loops etc in this {} =>  <p>Name: {myName}</p> 
);



  return (
    //* myApp() it will work same as <MyApp/> but in </> this M should be capital

    //reactElement  //! it will not work because it(react) dosent now about that we passed type , props, as key value so does in our custom router(which know what will come)

    //anotherElement  //^ it works fine because at the end myApp() function is convert into this type of object

    anotherElement2   //? Internally, JSX(anotherElement) is converted to a call to React.createElement() like this
  )
}

export default App
