import react, { useState } from 'react'

function App(){

  let [count,setCount]=useState(0)

  const increase=function (){
    setCount( (c)=>c=c+1 )
  }

  const decrease=function(){
    setCount(function(c){
      if(c>0){
      return c=c-1;
      }
      else
      return 0;
    })
  }

  const reset=function (){
    setCount((c) => 0 )
  }


return(
  <div className='counter'>
    <span>{count}</span>
    <button onClick={increase}>Increse One By One</button>
    <button onClick={decrease}>Decrease One By One</button>
    <button onClick={reset}>Reset</button>
  </div>
)
}

export default App