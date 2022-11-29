import React from "react";
import { useEmoji } from "../../context/EmojiContext";
import EmojiResultRow from "./EmojiResultRow";

function EmojiResult() {
  const { emojies, filter, filterLength } = useEmoji();
  const filteredEmoji = emojies
    .filter((emoji) => emoji.title.toLowerCase().includes(filter.toLowerCase()))
    .slice(0, filterLength);

  return (
    <div className="component-emoji-results">
      <ul className="emoji-list">
        {filteredEmoji.map((emojiData, index) => (
          <EmojiResultRow key={index} index={index} emojiData={emojiData} />
        ))}
      </ul>
    </div>
  );
}

export default EmojiResult;
