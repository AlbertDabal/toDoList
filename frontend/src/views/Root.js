import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Test from 'views/Test';
import { routes } from 'routes';
import { Home } from 'views/Home';
import { Work } from 'views/Work';
import { AllTasks } from './AllTasks';
import { Personal } from './Personal';
import { Fitness } from './Fitness';
import { OtherTask } from './OtherTask';
import Login from './Login';
import Register from './Register';
import { Dashboard } from './Dashboard';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.test} component={Test} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.welcome} component={Home} />
        <Route exact path={routes.register} component={Register} />

        <PrivateRoute exact path={routes.dashboard}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={routes.work}>
          <Work />
        </PrivateRoute>
        <PrivateRoute exact path={routes.personal}>
          <Personal />
        </PrivateRoute>
        <PrivateRoute exact path={routes.fitness}>
          <Fitness />
        </PrivateRoute>
        <PrivateRoute exact path={routes.otherTask}>
          <OtherTask />
        </PrivateRoute>
        <PrivateRoute exact path={routes.allTasks}>
          <AllTasks />
        </PrivateRoute>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;

function PrivateRoute({ children }) {
  return (
    <Route render={() => (sessionStorage.getItem('isAuth') !== null ? children : <Redirect to={routes.welcome} />)} />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
