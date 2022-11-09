import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
      <div style={{display:"flex",justifyContent:"space-between"}} >
  <Button onClick={()=>count>0? setCount (count -1 ): null  } >
  </Button>
  <p>you clicked={{count} } </p>
  <Button onClick={()=> setCount (count+1)}> +</Button> 
      </div>
    )
}

export default Counter