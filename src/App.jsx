import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  const handleClick=()=>{
    alert('Button 1 clicked')
  }

  
  const handleClick2=()=>{
    alert('Button 2 clicked')
  }

  const button4=(num)=>{
    alert(10 +num)
  }
  return (
    <>
      <div>
        <h3>React Core Concept Part2</h3>
        <Friends></Friends>
        <Users></Users>
        <Team></Team>
        <Counter></Counter>
        <button onClick={handleClick}>Button 1</button>
        <button onClick={handleClick2}>Button 2</button>
      </div>
        <button onClick={()=>button4(5)}>Button 4</button>
      
    </>
  )
}

export default App
