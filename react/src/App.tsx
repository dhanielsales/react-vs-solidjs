import { useState, useEffect, useRef } from "react";

function App() {
  const numOfItems = Number(getParam("n") ?? "0");

  return (
    <div
      style={{
        gap: "1px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Array.from({ length: numOfItems + 1 }, (_, i) => i).map((i) => (
        <RandomTicker key={i} />
      ))}
    </div>
  );
}

function getParam(key: string) {
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
  const [number, setNumber] = useState<number>(0);
  const timerRef = useRef<number>(null);

  useEffect(() => {
    function tick() {
      setNumber(Math.floor(Math.random() * 101));
      const nextDelay = 500 + Math.random() * 500;
      timerRef.current = window.setTimeout(tick, nextDelay);
    }
    tick();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        background: getColor(number),
        color: "white",
        padding: "2rem",
        textAlign: "center",
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      {number}
    </div>
  );
}

export default App;
