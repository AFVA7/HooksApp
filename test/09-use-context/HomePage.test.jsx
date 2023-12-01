
import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-use-context/context/UserContext";
import { HomePage } from "../../src/09-use-context/HomePage";

describe('Pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'andres'
  };
  test('debe de mostrar el component sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el component CON el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(`${user.id}`);
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
})