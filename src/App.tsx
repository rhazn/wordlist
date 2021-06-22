import React from "react";
import "./App.css";
import { WordList } from "./components/wordlist";
import { generator$warhammer$beastmens } from "./generators/warhammer/beastmens";
import { generator$warhammer$bretonnias } from "./generators/warhammer/bretonnias";
import { generator$warhammer$dwarfs } from "./generators/warhammer/dwarfs";
import { generator$warhammer$empires } from "./generators/warhammer/empires";
import { generator$warhammer$high_elfs } from "./generators/warhammer/high_elfs";
import { generator$warhammer$skavens } from "./generators/warhammer/skavens";
import { generator$warhammer$warriors_of_chaos } from "./generators/warhammer/warriors_of_chaos";

function App() {
  function generateNames(generator: () => string, amount: number) {
    const names = [];

    for (let i = 0; i < amount; i++) {
      const name = generator()
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");

      names.push(name);
    }

    return names;
  }
  return (
    <div>
      <header>
        <h1>Names</h1>
      </header>
      <div className="source">
        Source https://www.npmjs.com/package/fantasy-names
      </div>
      <main>
        <WordList
          name={"Beastmen"}
          words={generateNames(() => generator$warhammer$beastmens(), 100)}
        />
        <WordList
          name={"Bretonnians"}
          words={generateNames(
            () => generator$warhammer$bretonnias(Math.random() > 0.5 ? 1 : 0),
            100
          )}
        />
        <WordList
          name={"Dwarfs"}
          words={generateNames(
            () => generator$warhammer$dwarfs(Math.random() > 0.5 ? 1 : 0),
            100
          )}
        />
        <WordList
          name={"Empire"}
          words={generateNames(
            () => generator$warhammer$empires(Math.random() > 0.5 ? 1 : 0),
            100
          )}
        />
        <WordList
          name={"High Elves"}
          words={generateNames(
            () => generator$warhammer$high_elfs(Math.random() > 0.5 ? 1 : 0),
            100
          )}
        />
        <WordList
          name={"Skaven"}
          words={generateNames(() => generator$warhammer$skavens(), 100)}
        />
        <WordList
          name={"Warrior Of Chaos"}
          words={generateNames(
            () =>
              generator$warhammer$warriors_of_chaos(
                Math.random() > 0.5 ? 1 : 0
              ),
            100
          )}
        />
      </main>
    </div>
  );
}

export default App;
