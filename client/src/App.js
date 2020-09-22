import React, { PureComponent, Suspense } from 'react';
// import { jsx, css } from '@emotion/core';
import { Provider } from 'react-redux';
import {
  HashRouter,
  // BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import storeinfo from '@/store';
import ErrorBoundary from '@/publicui/errorBoundary';
import LoadingshowUi from '@/publicui/loadingshow';

const LazyHome = React.lazy(() => import(
  /*webpackChunkName: "home"*/
  /*webpackPrefetch: true*/
  '@/pages/home'
));
const LazyCategorylist = React.lazy(() => import(
  /*webpackPrefetch: true*/
  /* webpackChunkName: "categorylist" */
  '@/pages/categorylist'
));
const LazyCartUnlogin = React.lazy(() => import(
  /* webpackChunkName: "cartunlogin" */
  /*webpackPrefetch: true*/
  '@/pages/cartunlogin'
));
const LazyCartLogined = React.lazy(() => import(
  /* webpackChunkName: "cartlogined" */
  /*webpackPrefetch: true*/
 '@/pages/cartlogined'
));
const LazyProductionList = React.lazy(() => import(
  /* webpackChunkName: "productionlist" */
  /*webpackPrefetch: true*/
  '@/pages/productionlist'
));
const LazyProductionInfo = React.lazy(() => import(
  /* webpackChunkName: "productioninfo" */
  /*webpackPrefetch: true*/
  '@/pages/productioninfo'
));
const LazyLogin = React.lazy(() => import(
  /* webpackChunkName: "login" */
  /*webpackPrefetch: true*/
  '@/pages/login'
));
const LazyLogin2 = React.lazy(() => import(
  /* webpackChunkName: "login2" */
  /*webpackPrefetch: true*/
  '@/pages/login2'
));
const LazyNotFound = React.lazy(() => import(
  /* webpackChunkName: "notfound" */
  /*webpackPrefetch: true*/
  '@/pages/notfound'
));
const LazyMyinfo = React.lazy(() => import(
  /* webpackChunkName: "myinfo" */
  /*webpackPrefetch: true*/
  '@/pages/myinfo'
));

class App extends PureComponent {
  render() {
    return (
      <Provider store={storeinfo.store}>
        <PersistGate persistor={storeinfo.persistor}>
          <HashRouter>
            <ErrorBoundary>
              <Suspense fallback={<LoadingshowUi />}>
                <Switch>
                  <Route path="/home" exact component={LazyHome} />
                  <Route path="/categorylist" component={LazyCategorylist} />
                  <Route path="/login2" exact component={LazyLogin} />
                  <Route path="/login" exact component={LazyLogin2} />
                  <Route path="/myinfo/:userid" component={LazyMyinfo} />
                  <Route path="/cartunlogin" exact component={LazyCartUnlogin} />
                  <Route path="/cartlogined/:userid" component={LazyCartLogined} />
                  <Route path="/productionlist/:productcategory" component={LazyProductionList} />
                  <Route path="/productioninfo/:category/:sku" component={LazyProductionInfo} />
                  <Redirect to="/home" />
                  <Route path="*" exact component={LazyNotFound} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
