import { RootState } from '@/store';
import { connect, ConnectedProps } from 'react-redux';
import counterActions from "@/store/actions/counter"
// Define o tipo das props
type PropsFromRedux = ConnectedProps<typeof connector>;

const Child: React.FC<PropsFromRedux> = ({ count, increment, decrement }) => {
  return (
    <div className='card'>
      <h3>Child</h3>
      <button onClick={()=> decrement(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={()=> increment(count+1)}>+</button>
    </div>
  );
}

// Mapeia o estado global para as props do componente
const mapState = (state: RootState) => ({
  count: state.counterState
});

const connector = connect(mapState, { ...counterActions });

export default connector(Child);
