import React from 'react';
import { connect } from 'react-redux';

import { setLeftDiff } from '../../../state/comparer/actions';

const CompareA = ( { setLeftSide } ) => (
	<span
		onClick={ setLeftSide }
		className="compare-a"
		title="Set left side diff"
	>
		A
	</span> );

const mapDispatchToProps = ( dispatch, { json } ) => {
	return { setLeftSide: () => dispatch( setLeftDiff( json ) ) };
};

export default connect( undefined, mapDispatchToProps )( CompareA );
