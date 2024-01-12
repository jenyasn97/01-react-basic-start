import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    reason: "help",
    hasError: false,
  });
  /*   const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false); */

  function handlenameChancge(event) {
    /* setName(event.target.value);
    setHasError(event.target.value.trim().length === 0); */
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  /*   function toggleError() {
    setHasError((prev) => !prev);
  } */

  return (
    <section>
      <h3>Обратная связь</h3>

      {/*       <Button onClick={toggleError}>toggle Eror</Button>
       */}
      <form action="" style={{ marginBottom: `1rem` }}>
        <label htmlFor="name">Ваше имя </label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handlenameChancge}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        {/*         <pre>
          name:{form.name} <br />
          reason:{form.reason}
        </pre> */}
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>

      <StateVsRef />
    </section>
  );
}
