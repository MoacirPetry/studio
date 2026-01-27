import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders page heading", () => {
    render(<Contact />);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it("renders page description", () => {
    render(<Contact />);
    expect(
      screen.getByText(/get in touch with us for any inquiries/i),
    ).toBeInTheDocument();
  });

  it("renders contact information section", () => {
    render(<Contact />);
    expect(screen.getByText(/contact information/i)).toBeInTheDocument();
  });

  it("renders email information", () => {
    render(<Contact />);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/info@example.com/i)).toBeInTheDocument();
  });

  it("renders phone information", () => {
    render(<Contact />);
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument();
  });

  it("renders address information", () => {
    render(<Contact />);
    expect(screen.getByText(/address/i)).toBeInTheDocument();
    expect(
      screen.getByText(/123 main street, city, state 12345/i),
    ).toBeInTheDocument();
  });
});
