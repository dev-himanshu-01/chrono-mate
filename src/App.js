import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Filter } from '@mui/icons-material';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])


  // WHEN PAGE OPEN, IT CHECKS FOR PREVIOUS LOCAL-STORAGE
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localTask'))
    console.log(data)

    if (data !== null) {
      setTasks(data)
    }

  }, [])

  // WHEN ENTER KEY IS PRESSED
  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      if (task) {
        console.log("-->", task)
        const newTask = { id: new Date().getTime().toString(), title: task }
        setTasks([...tasks, newTask])
        localStorage.setItem('localTask', JSON.stringify([...tasks, newTask]))
        setTask('')
      }
    }
  }

  // WHEN DELETE-BTN IS PRESSED
  const deleteItemHandler = (task) => {
    const deleted = tasks.filter((t) => t.id !== task);
    setTasks(deleted)
    localStorage.setItem('localTask', JSON.stringify(deleted))
  }

  return (
    <div className="App">
      <Header />

      <section className='main-container'>
        <div className='input-box'>
          <input
            type='text'
            value={task}
            onKeyDown={keyDownHandler}
            onChange={(event) => setTask(event.target.value)}
            placeholder='Add a task here...'
          />
          <p>You have currently {
            !tasks.length ? "no tasks" :
              tasks.length === 1 ? "only 1 task" :
                tasks.length > 1 ? `${tasks.length} tasks` :
                  null
          } to perform</p>
        </div>

        <div className='todo-list'>
          {tasks.map((task) => {
            return (

              <div key={task.id} className='todo'>
                <div className='todo-title'>
                  {task.title}
                </div>
                <div
                  className='todo-del-icon'
                  onClick={() => deleteItemHandler(task.id)}>{<DeleteOutlineIcon />}</div>
              </div>)
          })}
        </div>
      </section>

    </div>
  );
}

export default App;
