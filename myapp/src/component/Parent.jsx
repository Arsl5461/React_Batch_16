import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'


function Parent() {
    const [data,setData]=useState(500)

    const add=()=>{
    return 3+9;
    }


  return (
    <div>
<Child1 data={add()}/>   
<Child2 data={data}/>
<Child3 data={data}/>   
    </div>
  )
}

export default Parent
