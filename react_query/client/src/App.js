import { Switch, Route } from 'react-router-dom';
import { BookList } from './components/BookList';
import { CreateBook } from './components/CreateBook';
import { UpdateBook } from './components/UpdateBook';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/">
          <BookList/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
