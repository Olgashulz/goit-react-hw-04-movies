import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from '../components/AppBar/Appbar';
import Container from './Container';
import Loader from './Loader/Loader';

const HomePage = lazy(() =>
  import('../components/HomePage' /*webpackChungName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('../components/MoviesPage' /*webpackChungName: "MoviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../components/MovieDetailsPage' /*webpackChungName: "MovieDetailsPage"*/
  ),
);

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route path="/movies">
              <MoviesPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>

      <ToastContainer autoClose={2500} />
    </>
  );
}
