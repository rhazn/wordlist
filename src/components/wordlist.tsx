import React, { useEffect, useState } from "react";

interface WordListProps {
  name: string;
  words: string[];
}

export const WordList: React.FC<WordListProps> = ({
  name,
  words,
}: WordListProps) => {
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  useEffect(() => {
    setAvailableWords([...words]);
  }, [words]);

  function wordClickedHandler() {
    availableWords.shift();

    if (availableWords.length === 0) {
      setAvailableWords([...words]);
    }

    setAvailableWords([...availableWords]);
  }
  return (
    <div className="word-list">
      <div className="word-list__title">{name}</div>
      <div className="word-list__next" onClick={() => wordClickedHandler()}>
        (Next)
      </div>
      <div className="word-list__active-word">{availableWords[0]}</div>
      <div className="word-list__muted-words">
        {availableWords.map((word, i) => {
          if (i !== 0 && i <= 5) {
            return (
              <div className="word-list__muted-words__muted-word">{word}</div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};
