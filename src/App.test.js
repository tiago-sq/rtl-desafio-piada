import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Teste do App Jokes", () => {
  test('Exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App />);
    // const titleEl = screen.getByText(/piadas do chuck norris/i);
    const titleEl = screen.getByRole("heading", {
      name: /piadas do chuck norris/i
    });
    expect(titleEl).toBeInTheDocument();
  });

  test("Exibe o corpo da piada na tela", async () => {
    // coloque o código
    const joke = {
      value: "Chuck Norris died"
    };

    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke)
    });

    render(<App />);
    const jokeEl = await screen.findByText(/Chuck Norris died/i);
    expect(jokeEl).toBeInTheDocument();
  });
});
