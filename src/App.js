import TestJSX from './TestJSX';
import Condition from './Condition';
import AffichageBoucle from './AffichageBoucle'

import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

       <Condition />
       <TestJSX />
       <AffichageBoucle/>
    </div>
  );
}

export default App;
