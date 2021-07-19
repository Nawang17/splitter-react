import React from 'react'
import './App.css'
const Main = ({setbill, settipper,setpeople,total, tip,totalnum, tipamount ,tipPercent}) => {

    return (
     
           <div className="main-container">
            <div className="left-container">
               <h3 className='text-first bill'>Bill</h3>
               <form className='first-form' >
                  <input  onChange ={(event)=>{
     setbill(event.target.value)}} className='first-input first'type='number' placeholder="$"/>
               </form>
               <h3 className='text-first'>Select Tip %</h3>
               <div className="buttons">
                  <button  onClick={()=>{
                      settipper(15)
                  
                  }}   className='percent-button'>15%</button>
                  <button onClick={(event)=>{
                      settipper(18)
                     
                    
                     
                 
                  }}  className='percent-button'>18%</button>
                  <button  onClick={()=>{
                     
                      settipper(20)
            
                  }} className='percent-button'>20%</button>
                  <button onClick={()=>{
                      settipper(25)
                    
                  }} className='percent-button'>25%</button>
                  <button onClick={(even)=>{
                      settipper(30)
                     
                  }} className='percent-button'>30%</button>
                  <input  onChange ={(event)=>{
     settipper(event.target.value)}} className='custom-button percent-button'type="number" placeholder="Custom"/>
               </div>
               <h3 className='text-first'>Number of People</h3>
               <input  onChange ={(event)=>{
     setpeople(event.target.value)
     }} className=' first people'type="number"/>
            </div>
            <div className="right-container">
               <div className="rightmain">
                  <div className="tipamount">
                     <div className="tip1">
                        <p >Tip Amount</p>
                        <p  className ='person1'>/ person</p>
                     </div>
                     <div className="tip2">
                        <p >Total</p>
                        <p  className ='person2' >/ person</p>
                     </div>
                  </div>
                  <div className="dollar">
                     <h2 className='dol-1'>${tipPercent.toFixed(2)}</h2>
                     <h2 className='dol-2'>${tipamount.toFixed(2)}</h2>
                  </div>
               </div>
           
               <button  onClick={()=>{
                      settipper(0)
                      setbill(0)
                      setpeople(0)
            
                    


                  }} className='reset-btn'>RESET</button>
            </div>
         </div>
     
    )
}

export default Main