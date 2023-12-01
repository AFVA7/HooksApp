import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-use-reducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe('Pruebas en <TodoApp />', () => {
    const todos = [
        {id: 1, desc: 'Aprender React', done: false},
        {id: 2, desc: 'Aprender Mongo', done: false}
    ];
    useTodos.mockReturnValue({
        todos: todos, 
        todosCount: todos.length,
        handleAddTodo: jest.fn(),
        handleDelete: jest.fn(),
        handleToggle: jest.fn(),
    });
    test('debe de mostrar el componnete correctamente', () => {
        
        render(<TodoApp />);
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        console.log(screen.getByRole('textbox').tagName);
    });
})