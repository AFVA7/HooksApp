import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

const initialForm = {
    name: 'Juan',
    email: 'juan@gmail.com'
};

describe('Pruebas en el useForm', () => {
    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });
    test('debe de cambiar el nombre del form', () => {
        const newValue = 'Melissa';
        const { result } = renderHook(() => useForm(initialForm));//montar sujeto de pruebas
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });//se hace la interacción
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
        expect(result.current.formState).toEqual({ ...initialForm, name: newValue });
    });

    test('debe de realizzr el reset del form', () => {
        const newValue = 'Melissa';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
        expect(result.current.formState).toEqual({ ...initialForm, name: initialForm.name });
    });
});