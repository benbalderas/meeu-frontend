import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/wrappers/PrivateRoute';
import AdminRoute from 'components/wrappers/AdminRoute';

// Landing
import LandingNav from 'components/navigation/LandingNav';
import LandingPage from 'components/pages/LandingPage';
import Login from 'components/forms/Login';
import Signup from 'components/forms/Signup';

// Grids
import MuseumGrid from 'components/grids/MuseumGrid';
import ExhibitsGrid from 'components/grids/ExhibitsGrid';
import ArtworksGrid from 'components/grids/ArtworksGrid';

// Create
import CreateExhibit from 'components/forms/CreateExhibit';
import CreateArtwork from 'components/forms/CreateArtwork';

// Details
import MuseumDetails from 'components/details/MuseumDetails';
import ExhibitDetails from 'components/details/ExhibitDetails';
import ArtworkDetails from 'components/details/ArtworkDetails';
import UserDetails from 'components/details/UserDetails';

const pageFadeIn = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const AnimationRoute = ({ children }) => (
  <motion.div variants={pageFadeIn} initial="out" animate="in" exit="out">
    {children}
  </motion.div>
);

const Routes = () => (
  <AnimatePresence exitBeforeEnter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <>
            <LandingNav />
            <LandingPage />
          </>
        )}
      />
      <Route
        exact
        path="/login"
        component={() => (
          <>
            <LandingNav />
            <Login />
          </>
        )}
      />
      <Route
        exact
        path="/signup"
        component={() => (
          <>
            <LandingNav />
            <Signup />
          </>
        )}
      />

      <PrivateRoute
        exact
        path="/museums"
        component={() => (
          <AnimationRoute>
            <MuseumGrid />
          </AnimationRoute>
        )}
      />
      <PrivateRoute
        exact
        path="/exhibits"
        component={() => (
          <AnimationRoute>
            <ExhibitsGrid />
          </AnimationRoute>
        )}
      />
      <PrivateRoute
        exact
        path="/artworks"
        component={() => (
          <AnimationRoute>
            <ArtworksGrid />
          </AnimationRoute>
        )}
      />

      <AdminRoute
        exact
        path="/exhibits/create"
        component={() => (
          <AnimationRoute>
            <CreateExhibit />
          </AnimationRoute>
        )}
      />
      <AdminRoute
        exact
        path="/artworks/create"
        component={() => (
          <AnimationRoute>
            <CreateArtwork />
          </AnimationRoute>
        )}
      />

      <PrivateRoute
        exact
        path="/museums/:id"
        component={() => (
          <AnimationRoute>
            <MuseumDetails />
          </AnimationRoute>
        )}
      />
      <PrivateRoute
        exact
        path="/exhibits/:id"
        component={() => (
          <AnimationRoute>
            <ExhibitDetails />
          </AnimationRoute>
        )}
      />
      <PrivateRoute
        exact
        path="/artworks/:id"
        component={() => (
          <AnimationRoute>
            <ArtworkDetails />
          </AnimationRoute>
        )}
      />
      <PrivateRoute
        exact
        path="/settings"
        component={() => (
          <AnimationRoute>
            <UserDetails />
          </AnimationRoute>
        )}
      />
    </Switch>
  </AnimatePresence>
);

export default Routes;
