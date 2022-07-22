
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const addItem = (e) => {
        onAdd(value);
        setValue('');
    }

    return (
        <div>
            <input value={value} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default AddTask;