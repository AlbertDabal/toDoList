import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.test} component={Test} />
        <Route exact path={routes.dashboard} component={Home} />
        <Route exact path={routes.work} component={Work} />
        <Route exact path={routes.personal} component={Personal} />
        <Route exact path={routes.fitness} component={Fitness} />
        <Route exact path={routes.otherTask} component={OtherTask} />
        <Route exact path={routes.allTasks} component={AllTasks} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
