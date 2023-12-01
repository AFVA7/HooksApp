import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch, useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('debe de mostrar el component por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
    })

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{autor: 'Rick', quote: 'Wubba lubba dub dub'}],
            loading: false,
            error: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Wubba lubba dub dub')).toBeTruthy();
        expect(screen.getByText('Rick')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy(); 
    });

    test('debe de llamar la fun de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{autor: 'Rick', quote: 'Wubba lubba dub dub'}],
            loading: false,
            error: null
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });
});