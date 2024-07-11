import React, {useState} from 'react';
import './Mediaquery.css'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    function handleInputChange(event) {
        const value = event.target.value;
        if(value.length < 30){
            setNewTask(value);
        }
        else{
            alert('Erro: A tarefa deve ter menos de 30 caracteres.');

        }
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }

       


    }


    function enterKey(){
        if(event.key === 'Enter'){
            addTask()
        }
    }


    // function mudarTema(){
    //     const tema = document.getElementById('tema');
    //     document.body.style.backgroundColor = '#800020';
        
    // }




 return(<>
 
        <div className="container">
            <div className='header'>
                <h1>Lista de Tarefas</h1>
            </div>
            {/* <button className='tema' onClick={mudarTema}>Mudar Tema</button> */}

            <div>
                <input type="text" placeholder="Digite a tarefa..." value={newTask} onChange={handleInputChange} onKeyPress={enterKey}/>
                <button className='inputBtn' onClick={addTask}>Adicionar</button>
            </div>
            <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='deleteBtn' onClick={() => deleteTask(index)}>Deletar</button>
                            <button className='moveBtn' onClick={() => moveTaskUp(index)}>☝</button>
                            <button className='moveBtn' onClick={() => moveTaskDown(index)}>👇</button>
                        </li>
                    ))}
                </ol>
        </div>
 
        </>);
}
export default ToDoList;