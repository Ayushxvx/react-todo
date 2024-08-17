import {useState} from 'react';
export default function HomePage(){
    const [todo,setTodo] = useState();
    const [todos,setTodos] = useState([
        {
            text:'This is the very first Todo '
        }
    ])

    function printTodos(){
        
    }

    function addTodo(){
        if(todo!=""){
        setTodos([...todos,{text:String(todo).trim()}])
        setTodo("")
        }
        else{
            console.log("Enter a todo atleast . ")
        }
    }

    function deleteTodo(index) {
        // setTodos(todos.filter((todo, i) => i !== index));
        setTodos(todos.filter((todo,i) => i!=index))
      }

    return(
        <div>
            <form action="" onSubmit={(e)=>e.preventDefault()} className="border-2 border-solid border-white rounded-lg w-10/12 mx-auto md:w-8/12 text-center p-3 m-3 flex align-center justify-center overflow-hidden">
            <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} placeholder="Enter Todo ..." className="rounded-xl text-center text-black font-serif w-8/12" />
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTodo}>
                <img src="./add.png" className="h-8 sm:h-10 hover:opacity-80"/>
            </button>
            </form>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2">
                {todos.map((ele,eleindex)=>(
                    <div className="bg-gray-500 text-white font-sans w-10/12 overflow-clip mx-auto rounded-lg p-2 m-2 text-center border-2 border-solid border-white flex align-center justify-center">
                <div className="inline-block p-2 m-2 cursor-grab">
                    {ele.text}
                </div>
                <button onClick={()=>{deleteTodo(eleindex)}}>
                    <img src="./trash.png" alt="Delete Todo" className="h-8 sm:h-12 m-2 cursor-pointer hover:opacity-80" />
                </button>
            </div>
                ))}
            </div>
        </div>
    )
}