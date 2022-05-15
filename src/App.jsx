import { useState } from 'react';
import { AddButton, NewTaskForm, Header, TaskLists } from './components';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.isCompleted,
  Completed: task => task.isCompleted,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [filter, setFilter] = useState('All');

  return (
    <>
      <Header filters={FILTER_NAMES} setFilter={setFilter} />
      <main>
        <AddButton
          setDialog={setDialog}
          sx={dialog ? { display: 'none' } : ''}
        />
        <NewTaskForm
          dialog={dialog}
          setDialog={setDialog}
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskLists
          filter={filter}
          filterList={FILTER_MAP}
          tasks={tasks}
          setTasks={setTasks}
        />
      </main>
    </>
  );
};

export default App;
