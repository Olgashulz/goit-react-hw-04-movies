import { Route, Switch } from 'react-router';

import AppBar from '../components/AppBar/Appbar';
import Container from './Container';

import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import MovieDetailsView from '../views/MovieDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>
      </Switch>
    </Container>
  );
}
