import { createStore, applyMiddleware, compose} from 'redux';
import { createMigrate, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension';

import {ISDEV} from '../../constants/Strings'

var middlewares = [];

const persistConfig = {
  version: 1,
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // migrate: createMigrate(migrations, { debug: true }),
  // blacklist: ['Lead'] // Potential fix for the lead persistor issue.
}

const persistedReducer = persistReducer(persistConfig, reducer)

var appliedMiddlewares = ISDEV ?
  composeWithDevTools( applyMiddleware(...middlewares) ) :
  applyMiddleware(...middlewares)

const store = createStore(
    persistedReducer,
    appliedMiddlewares
)

// if (ISDEV){
//   if (module.hot) {
//       module.hot.accept(() => {
//           const NextReducer = require('../RootReducer').default;
//           store.replaceReducer(
//               // NextReducer
//               persistReducer(persistConfig, NextReducer)
//           );
//       });
//   }
// }




// export const persistor = persistStore(store);
export default store
