import { useState, useEffect, createContext } from 'react';
import { AddButton, NewTaskForm, Header, TaskLists } from './components';

const filterMap = {
  All: () => true,
  Active: task => !task.isCompleted,
  Completed: task => task.isCompleted,
};
const filterNames = Object.keys(filterMap);

export const State = createContext();

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
  const [dialog, setDialog] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <State.Provider
      value={{
        dialog,
        setDialog,
        tasks,
        setTasks,
        filter,
        setFilter,
        filterNames,
      }}
    >
      <Header />
      <main>
        <AddButton sx={dialog ? { display: 'none' } : ''} />
        <NewTaskForm />
        <TaskLists filter={filter} filterList={filterMap} />
      </main>
    </State.Provider>
  );
};

export default App;
