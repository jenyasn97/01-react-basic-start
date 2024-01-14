import { useCallback, useState, useEffect } from "react";
import Button from "../components/Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useinput";

export default function EffectSection() {
  const input = useInput();

  const [modal, setModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setModel(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: "1rem" }} onClick={openModal}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam
          vitae quo optio eligendi distinctio esse beatae quod odit explicabo
          rerum tempore dolorem, quis consequuntur, cum dolores blanditiis!
          Numquam, voluptates?
        </p>

        <Button
          onClick={() => {
            setModel(false);
          }}
        >
          close
        </Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" id="" {...input} />{" "}
          <ul>
            {users
              .filter((user) => {
                return user.name
                  .toLowerCase()
                  .includes(input.value.toLowerCase());
              })
              .map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
          </ul>
        </>
      )}
    </section>
  );
}
