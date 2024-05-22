// Navbar.test.js
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Importe o BrowserRouter
import Navbar from "../Components/Navbar"; // Importe o componente Navbar

describe("Navbar", () => {
  it("deve conter links válidos para as páginas", () => {
    const { getByText } = render(<Navbar />);

    // Verifique se os links estão presentes e apontam para os locais corretos
    expect(getByText("Home").getAttribute("href")).toBe("/");
    expect(getByText("Contato").getAttribute("href")).toBe("Contato");
    expect(getByText("Pontos de coleta").getAttribute("href")).toBe("/Coleta");
    expect(getByText("Fórum").getAttribute("href")).toBe("/Forum");
    expect(getByText("Login").getAttribute("href")).toBe("/Login");
  });
});
