import { RootState } from '@/store';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ChildTwo: React.FC<PropsFromRedux> = ({ count }) => {
  return (
    <div className='card'>
      <h3>ChildTwo:</h3>
      <span>{count}</span>
    </div>
  );
}

const mapState = (state: RootState) => ({
  count: state.counterState
});

const connector = connect(mapState);

export default connector(ChildTwo);
