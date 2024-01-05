import React from "react";
import "./App.css"
import Account from './Components/Account/Account'
import Mid from './Components/Mid/Mid'
import Sidebar from './Components/Sidebar/Sidebar'



const App = () => {
  return <div className="container">

  <Sidebar />
  <Mid />
  <Account />

  </div>;
};

export default App;
