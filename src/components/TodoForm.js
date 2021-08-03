import React, {useState} from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Container
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === "") {
            return alert("Please enter a todo")
        }
        const todo = {
            todoString,
            id: v4()
        }
        // passed in method as prop
        addTodos(todo);

        setTodoString("");
    }


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="tet"
                    name="todo"
                    id="todo"
                    placeholder="Enter a todo string"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="success"

                        >Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;