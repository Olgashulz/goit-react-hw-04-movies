import { Route, Switch } from 'react-router';
import AppBar from '../components/AppBar/Appbar';
import Container from './Container';
// import HomeViev from '../views/HomeViev';
import MovieDetailsView from '../views/MovieDetailsView';
import HomeView from '../views/HomeViev';
import MoviesView from '../views/MoviesView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/:moveId">
          <MovieDetailsView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>
      </Switch>
    </Container>
  );
}
