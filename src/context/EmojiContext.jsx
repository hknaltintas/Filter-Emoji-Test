import { createContext, useContext, useState } from "react";
import emojiList from "../data/emojiList.json";
const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [emojies, setEmojies] = useState(emojiList);
  const [filter, setFilter] = useState("");
  const [filterLength, setFilterLength] = useState(15);
  const values = {
    emojies,
    setEmojies,
    filter,
    setFilter,
    filterLength,
    setFilterLength,
  };

  return (
    <EmojiContext.Provider value={values}>{children}</EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
