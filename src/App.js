import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import MyModal from "./components/UI/MyModal/MyModal";
import moment from "moment/moment";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [modal, setModal] = useState(false);

  const taskHendler = (body, id) => {
    if (id) {
      const newTask = {
        id: id,
        body: body,
        create: moment().format("DD-mm-yy"),
      };
      if (body === "") {
        const temp = tasks.filter((task) => task.id !== id);
        setTasks(temp);
        localStorage.setItem("tasks", JSON.stringify(temp));
      } else {
        const temp = [newTask, ...tasks.filter((task) => task.id !== id)].sort(
          (a, b) => (a.id > b.id ? 1 : -1)
        );
        setTasks(temp);
        localStorage.setItem("tasks", JSON.stringify(temp));
      }
    } else {
      if (body !== "") {
        const newTask = {
          id: Date.now(),
          body: body,
          create: moment().format("DD-mm-yy"),
        };
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
      }
    }
    setModal(false);
  };

  const dropTask = (id) => {
    const temp = tasks.filter((task) => task.id !== id);
    setTasks(temp);
    localStorage.setItem("tasks", JSON.stringify(temp));
  };
  return (
    <div className="App">
      <Header taskHendler={taskHendler} setVisible={setModal} />
      <MyModal visible={modal} setVisible={setModal}>
        <Form taskHendler={taskHendler} />
      </MyModal>
      <Tasks taskHendler={taskHendler} dropTask={dropTask} tasks={tasks} />
    </div>
  );
}

export default App;
