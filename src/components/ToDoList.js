import { useState } from "react";

const ToDoList = () => {
    let [task,setTask] = useState("");  //array destructuring
    let [taskArray,setTaskArray] = useState([]);
    let clickHandler=()=>{
        // console.log("Clicked");
        setTaskArray([...taskArray,task]);
        setTask(taskArray);
    }


    let onChangeHandler=(event)=>{
        console.log(event.target.value);
        setTask(event.target.value)
    }
    return ( 
        
        <>
        <div class="mb-3">
            <label htmlFor="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                onChange={onChangeHandler}
            />
        </div>
        
        <button onClick={clickHandler}>Add Task</button><br></br><br/>
        <ol>
        {task}
        {
            taskArray.map((elem)=>{
                return <li>{elem}</li>
            })
        }
        </ol>
        </>
     );
}
 
export default ToDoList;