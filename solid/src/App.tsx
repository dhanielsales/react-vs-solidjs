import { createSignal, onCleanup, For } from "solid-js";

function getParam(key: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function getColor(num: number): string {
  if (num <= 25) return "blue";
  if (num <= 50) return "green";
  if (num <= 75) return "orange";
  return "red";
}

function RandomTicker() {
  const [number, setNumber] = createSignal<number>(0);
  let timer: number | undefined;

  function tick() {
    setNumber(Math.floor(Math.random() * 101));
    const nextDelay = 500 + Math.random() * 500;
    timer = window.setTimeout(tick, nextDelay);
  }

  tick();

  onCleanup(() => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
  });

  return (
    <div
      style={{
        background: getColor(number()),
        color: "white",
        padding: "2rem",
        "text-align": "center",
        width: "20px",
        height: "20px",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "font-size": "2rem",
      }}
    >
      {number()}
    </div>
  );
}

function App() {
  const numOfItems = Number(getParam("n") ?? "0");
  const items = Array.from({ length: numOfItems + 1 }, (_, i) => i);

  return (
    <div
      style={{
        gap: "1px",
        display: "flex",
        "flex-wrap": "wrap",
      }}
    >
      <For each={items}>{(i) => <RandomTicker />}</For>
    </div>
  );
}

export default App;
