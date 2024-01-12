import { differences } from "../data";
import { useState } from "react";
import Button from "./Button/Button";

export default function TabButton() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  let tabContent = null;
  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>;
  } else {
    tabContent = <p>Нажми на кнопку</p>;
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick(`way`)}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick(`easy`)}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick(`program`)}
      >
        Концентрация
      </Button>
      {tabContent}
    </section>
  );
}
