import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNetworkMiddleware } from 'react-native-offline';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import immutablePersistenceTransform from '../services/immutablePersistenceTransform';
import rootReducer from './index';

const networkMiddleware = createNetworkMiddleware()
const middlewares = [networkMiddleware];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: '@moviemania',
  storage: AsyncStorage,
  whitelist: ['favourite', 'hide'],
  blacklist: ['nav', 'navigation', 'movie'],
  transforms: [immutablePersistenceTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add middleware to redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = __DEV__
  ? composeEnhancers(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, enhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// Enable persistence
export default { store, persistor };
