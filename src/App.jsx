import { useState } from 'react';
import { AddButton, NewTaskForm, Header, TaskLists } from './components';
import DATA from './DATA';

const App = () => {
  const [tasks, setTasks] = useState(DATA);
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <Header />
      <main>
        <AddButton setDialog={setDialog} />
        <NewTaskForm
          dialog={dialog}
          setDialog={setDialog}
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskLists tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
};

export default App;
