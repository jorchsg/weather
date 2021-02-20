import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routers } from './main/routes/index';
import Loading from './library/common/components/loading/Loading';
import NotFound from './modules/notFound/NotFound';

function App() {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routers.map(({ exact, path, component }, index) => (
            <Route key={index}
              exact={exact}
              path={path}
              component={component} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
