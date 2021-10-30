import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    const newTask: ITask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const deleteTask = (taskToDelete: string): void => {
    setTodoList(todoList.filter((task: ITask) => {
      return task.taskName !== taskToDelete;
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder='Task..' onChange={handleChange} 
            name='task' value={task} 
          />
          <input type="number" placeholder='Deadline (in Days)...' onChange={handleChange} 
            name='deadline' value={deadline}
          />
        </div>
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
