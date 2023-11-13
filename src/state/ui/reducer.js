import { createReducer } from '../../lib/redux/create-reducer';
import { UI_SELECT_API, UI_SELECT_VERSION } from '../actions';
import { getDefault } from '../../api';
import schema from './schema';
import { serializeStateForUrl, deserializeStateFromUrl } from '../../lib/utils';

const reducer = createReducer( { api: getDefault().name, version: null }, {
	[ 'SERIALIZE_URL' ]: ( state ) => serializeStateForUrl( state, [ 'api', 'version' ] ),
	[ 'DESERIALIZE_URL' ]: ( state ) => deserializeStateFromUrl( state, [ 'api', 'version' ] ),
	[ UI_SELECT_API ]: ( state, { payload } ) => {
		return ( {
			version: null,
			api: payload,
		} );
	},
	[ UI_SELECT_VERSION ]: ( state, { payload } ) => {
		return ( {
			...state,
			version: payload,
		} );
	},
}, schema );

export default reducer;
