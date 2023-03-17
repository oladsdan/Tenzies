import './App.css';
import Dice from './components/Dice';
import React from 'react';
import { nanoid } from 'nanoid';



function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])
   
  

  function generateNewDice() {
    return{
      value : Math.ceil(Math.random() * 6),
      isHeld: false,
      id : nanoid()


    }
       
  }
  
  function allNewDice() {
    const newDice =[]
    for (let i =0; i<10; i++){
      newDice.push(
       generateNewDice()); //we want to be able to hold what is clicked do we add an isheld property to everyclicked number
        
    }
    return newDice
    

  }

  //we define a function to split the 
  function holdDice(id) {

    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld : !die.isHeld} : die
    }))     


  }


  //here we declare a variable to store the diceelements used
  const diceElements = dice.map(die => 
      <Dice value={die.value} isheld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  //this functions rolls the dice ones the roll button is clicked
  // and changes the state of the setDice
  /*function rollClick() {
     setDice(allNewDice())
  }*/
  /*function rollClick() {
    setDice(oldDice => oldDice.map(die =>{
      return die.isHeld? die : generateNewDice()
    }))
  }*/
  function rollClick() {
    if(!tenzies){
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld? die : generateNewDice()}))
      
    }else{
      setTenzies(false)
      setDice(allNewDice())
    }
      
    

    
      
  }
  
  
  return (
    <main>
        

        <div className="App">
          <div className="dice--container">
            {diceElements}
          </div>
          

    </div>
          <button onClick={rollClick}>{tenzies? "NewGame": "Roll"}</button>
    </main>
    
  );
}

export default App;
