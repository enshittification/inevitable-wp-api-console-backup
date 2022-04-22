import { HIDE_DIFF, SET_LEFT_DIFF, SET_RIGHT_DIFF, SHOW_DIFF, TOGGLE_DIFF } from '../actions';

export const setLeftDiff = ( json, id ) => {
	return {
		type: SET_LEFT_DIFF,
		payload: {
			json,
			id,
		},
	};
};

export const setRightDiff = ( json, id ) => {
	return {
		type: SET_RIGHT_DIFF,
		payload: {
			json,
			id,
		},
	};
};

export const toggleVisibility = () => {
	return {
		type: TOGGLE_DIFF,
	};
};

export const showDiff = () => {
	return {
		type: SHOW_DIFF,
	};
};

export const hideDiff = () => {
	return {
		type: HIDE_DIFF,
	};
};