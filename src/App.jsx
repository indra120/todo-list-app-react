import { useState } from 'react';
import { AddButton, Form, Header, TaskLists } from './components';
import DATA from './DATA';

const App = () => {
  const [tasks, setTasks] = useState(DATA);
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <Header />
      <main>
        <AddButton setDialog={setDialog} />
        <Form
          dialog={dialog}
          setDialog={setDialog}
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskLists tasks={tasks} />
      </main>
    </>
  );
};

export default App;
