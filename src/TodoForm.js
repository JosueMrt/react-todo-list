import React from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="input" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
 
export default TodoForm;