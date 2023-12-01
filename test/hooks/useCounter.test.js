import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils"

describe('Pruebas en el useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current;

        //probamos el retorno del hook
        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100))
        expect(result.current.counter).toBe(100);
    })

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(10))//sujeto de pruebas
        const { increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13);
    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(10))
        const { decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7);
    });

    test('debe de realizar el reset', () => {
        const { result } = renderHook(() => useCounter(10))
        const { increment, reset } = result.current;
        act(() => {
            increment();
            increment(2);
            reset();
        });
        expect(result.current.counter).toBe(10);
    });

})