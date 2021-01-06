
import './App.css';
import React,{useState} from "react"

function App() {
  const intialvalue=""
  const [inputlist,setInputlist]=useState(intialvalue);
  const [Items,setItems]=useState([])
  const itemEvent=(event)=>{
    setInputlist(event.target.value);
  };
   const listitems=()=>{
     setItems((oldItems)=>{
       return [...oldItems,inputlist];
     });
   }
   deleteitems=()=>{
     setItems((oldItems)=>{
       return oldItems.filter((arrElem,index)=>{
         return index!==index;
       })
     })

   }


  return (
    <div className="App">
      <input type="text" placeholder="add item" onChange={itemEvent}/>
      <button onClick={listitems}>+</button >
      <div className="items">
        <ol> 
        {Items.map((itemVal,index)=>{
          return (<div><button onclick={()=>deleteitems(index)}>+</button ><li>{index} {itemVal}
           </li></div>)
        })}
        
        </ol>
      </div>
    </div>
  );
}

export default App;
