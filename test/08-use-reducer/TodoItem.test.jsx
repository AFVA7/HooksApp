import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-use-reducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        desc: 'Aprender React',
        done: false
    }
    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el todo pendiente de completar', () => {
        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className.includes('list-group-item')).toBe(true);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between ');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).toBe('align-self-center ')//fijarse en el espacio al final, esto es por la expresion ternaria en el className del span
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    })

    test('debe de mostrar el todo completado', () => {
        todo.done = true;
        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('el spam debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement); 
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })

    test('debe de llamar el onRemoveTodo cuando se hace click en el boton borrar', () => {
        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />);
        const removeButton = screen.getByRole('button');
        fireEvent.click(removeButton); 
        expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
    });
})