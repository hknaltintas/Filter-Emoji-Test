import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Search input working test", () => {
  let emojiResultsDOM, inputDOM;
  const typeIntoInput = (string) => {
    fireEvent.change(inputDOM, { target: { value: string } });
  };
  const loadEmojiResultsDom = () => {
    return screen.getAllByTestId("emojiresultrow");
  };

  beforeEach(() => {
    render(<App />);
    inputDOM = screen.getByPlaceholderText("Search Emoji");
  });

  test("Should be rendering", () => {
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toEqual(15);
  });

  test("Testing input search", () => {
    typeIntoInput("Kissing");
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toBe(5);

    typeIntoInput("123");
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toBe(2);
  });
});
