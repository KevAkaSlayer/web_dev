
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user';
import Friends from './friends';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }
  const buttonClick2 = () => {
    alert('Button 2 Clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={buttonClick2}>Click Two</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      <button onClick={()=>{addToFive(545)}}>Five</button>
    </>
  )
}

export default App
