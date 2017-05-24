import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import deleteLabel from '../data/actions/label-actions';

import './ChipDisplay.css';

injectTapEventPlugin();

const styles = {
  display: 'inline-block',
  flexWrap: 'wrap',
  margin: 'auto',
};

const stylesDelete = {
  ...styles,
  backgroundColor: '#ff6666',
};

const ChipDisplay = ({ dispatch, previewLabels }) => {
  const chips = previewLabels.map(label => (
    <Chip
      className="chip"
      key={label.label}
      onTouchTap={() => dispatch(deleteLabel(label.label))}
      style={label.delete ? stylesDelete : styles}
    >
      {label.label}
    </Chip>
  ));

  return (
    <div className="chip-display">
      {chips}
    </div>
  );
};

ChipDisplay.propTypes = {
  dispatch: PropTypes.func.isRequired,
  previewLabels: PropTypes.arrayOf(PropTypes.shape({
    Name: PropTypes.string,
    Confidence: PropTypes.number,
  })).isRequired,
};

const ChipDisplayRedux = connect(
  state => ({ previewLabels: state.previewLabels }),
)(ChipDisplay);

export default ChipDisplayRedux;
