import React, {useState} from 'react';
import {TextField, Paper, Button} from '@material-ui/core';


const TodoBuilder = () => {
    const defaultItem = {
        id: null,
        title: '',
        description: '',
        completed: false,
    }


    const [todoList, setTodoList] = useState([]);
    const [todoItemDetails, setTodoItemDetails] = useState(defaultItem)


    const handleChange = (event) => {
        const {name, value} = event.target;

        setTodoItemDetails({
            ...todoItemDetails,
            [name]: value
        });
    }

    return (
        <div style={{margin: 16, display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: 400, padding: 12, justifyContent: 'space-between', alignItems: 'space-between'}}>
                <h3>Create Todo Item</h3>
                <div>
                    <TextField 
                        fullWidth
                        label="Title"
                        margin="normal"
                        name='title'
                        value={todoItemDetails.title}
                        variant="outlined"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        label="Description"
                        margin="normal"
                        multiline
                        name='description'
                        rows={4}
                        value={todoItemDetails.description}
                        variant="outlined"
                    />
                </div>

            </div>
        </div>
    );
}


export default TodoBuilder;