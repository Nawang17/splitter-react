import Main from './Main'
import React, {useState} from 'react';
import './App.css';

function App() {
  const [bill ,setbill] = useState('0')
  const [people,setpeople] = useState(1)
  const [tip,settip] = useState('0')
  const [total,settotal] = useState('0')
  const [tipper,settipper] = useState('0')
let totalnum = ''
let tipamount = ''
  if (parseInt(bill) && parseInt(people) > 0){
    totalnum = (parseInt(bill) / parseInt(people))
  }

   totalnum = totalnum || 0

let tipPercent = ''  

tipPercent = (parseInt(tipper)/100) * totalnum

tipamount = totalnum + tipPercent





  return (
    <div>    
    <header className='heading'> SPLITTER</header>  
    <div className='main' >
    
     <Main setbill={setbill}
     setpeople={setpeople}
     totalnum = {totalnum}
     total={total}
     tipamount ={tipamount}
     tipPercent = {tipPercent}
     settipper ={settipper}
     tip={tip}
     />
    
    </div>
    <footer>Copyright © 2021, Nawang Sherpa. All Rights Reserved</footer>
    </div>


  );
}

export default App;
