import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Homepage from "./Homepage";

describe("Homepage", () => {
  it("renders welcome message", () => {
    render(<Homepage />);
    expect(screen.getByText(/welcome to the homepage/i)).toBeInTheDocument();
  });

  it("renders main description", () => {
    render(<Homepage />);
    expect(
      screen.getByText(/this is the main landing page/i),
    ).toBeInTheDocument();
  });

  it("renders about section", () => {
    render(<Homepage />);
    expect(screen.getByText(/about this project/i)).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<Homepage />);
    expect(
      screen.getByText(/react application with routing capabilities/i),
    ).toBeInTheDocument();
  });
});
