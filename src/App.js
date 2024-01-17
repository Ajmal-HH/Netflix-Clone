import React  from "react";
import "./App.css"
import Navbar from "./Component/Navbar/Navbar";
import {originals , action} from './url'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
function App() {
  return (
    <div className ="App">
      <Navbar />
      <Banner />
      <RowPost url={originals}  title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />

    </div>
  );
}

export default App;
