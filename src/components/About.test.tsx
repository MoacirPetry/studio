import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "./About";

describe("About", () => {
  it("renders page heading", () => {
    render(<About />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });

  it("renders page description", () => {
    render(<About />);
    expect(
      screen.getByText(/learn more about our mission and values/i),
    ).toBeInTheDocument();
  });

  it("renders mission section", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /our mission/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/create amazing user experiences/i),
    ).toBeInTheDocument();
  });

  it("renders team section", () => {
    render(<About />);
    expect(screen.getByText(/our team/i)).toBeInTheDocument();
    expect(
      screen.getByText(/dedicated group of professionals/i),
    ).toBeInTheDocument();
  });

  it("renders all three value cards", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /innovation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^quality$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /collaboration/i }),
    ).toBeInTheDocument();
  });

  it("renders value card descriptions", () => {
    render(<About />);
    expect(
      screen.getByText(/pushing boundaries with cutting-edge solutions/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/excellence in every line of code/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/working together to achieve greatness/i),
    ).toBeInTheDocument();
  });
});
