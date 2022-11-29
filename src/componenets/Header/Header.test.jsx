import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header test", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Rendering emoji search text", () => {
    const text = screen.getByText("Emoji Search");
    expect(text).toBeInTheDocument();
  });
});
