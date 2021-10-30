import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    deleteTask: (deleteTask: string) => void
}

const TodoTask = ({task, deleteTask}: Props) => {
    return (
        <div className='task'>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => deleteTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask
