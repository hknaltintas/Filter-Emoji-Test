import React from "react";

function EmojiResultRow({ index, emojiData }) {
  const handleClick = (symbol) => {
    navigator.clipboard.writeText(symbol);
  };

  return (
    <li key={index}>
      <div className="text" data-testid="emojiresultrow">
        <span className="symbol">{emojiData.symbol}</span>
        <span className="title">{emojiData.title}</span>
      </div>
      <span
        title="copyitem"
        className="copy"
        onClick={() => handleClick(emojiData.symbol)}
      >
        Copy to clipboard
      </span>
    </li>
  );
}

export default EmojiResultRow;
