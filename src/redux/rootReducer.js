import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import mailReducer from './slices/mail';
import chatReducer from './slices/chat';
import productReducer from './slices/product/product';
import calendarReducer from './slices/calendar';
import kanbanReducer from './slices/kanban';
import userReducer from './slices/user/user';
import alertReducer from './slices/alert/alert';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'lutopanestore-redux-',
  blacklist: ['user'],
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'lutopanestore-redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = (otherReducers = {}) =>
  combineReducers({
    ...otherReducers,
    alert: alertReducer,
    mail: mailReducer,
    chat: chatReducer,
    calendar: calendarReducer,
    kanban: kanbanReducer,
    product: persistReducer(productPersistConfig, productReducer),
    user: userReducer,
  });

export { rootPersistConfig, rootReducer };
