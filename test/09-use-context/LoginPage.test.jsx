import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-use-context/context/UserContext"
import { LoginPage } from "../../src/09-use-context/LoginPage"

describe('Pruebas en <LoginPage />', () => {

  test('debe mostrar el component sin el user', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');

  })
  test('debe de llamar al setUser cuando se hace click en el botton', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({ "email": "ferxo@gmail", "id": 123, "name": "ferxo", });
  })
})