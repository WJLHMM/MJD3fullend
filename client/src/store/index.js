import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import immutableTransform from 'redux-persist-transform-immutable';
import reducer from '@/store/reducer';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  blacklist: ['password'],
  stateReconciler: hardSet,
};

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export default {
  store,
  persistor,

};
