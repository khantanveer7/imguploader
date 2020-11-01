import React from 'react'
import Main from './components/Main';

const App = () => {
  const passw = prompt("Enter Password");
  const conf = "KHAN";
  return (
    <>
      {/* <Main /> */}
      {conf === passw ?
        <Main />
        : window.alert("Enter Correct Password")}
    </>
  )
}

export default App
