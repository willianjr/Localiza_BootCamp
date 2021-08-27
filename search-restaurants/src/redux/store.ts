import { createStore, Store } from 'redux';

import rootReducer from './reducers';
import {RestaurantState} from './modules/restaurants'

export interface ApplicationState {
	restaurants: RestaurantState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store
