import { AddButton, Header, TaskLists } from './components';
import DATA from './DATA';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AddButton />
        <TaskLists tasks={DATA} />
      </main>
    </>
  );
};

export default App;
