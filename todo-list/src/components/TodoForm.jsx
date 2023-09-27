import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <h2>Create task</h2>
        <form>
            <input type="text" placeholder='Type tittle'/>
            <select>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
            </select>
            <button type='submmit'>Create task</button>
        </form>
    </div>
  )
}

export default TodoForm