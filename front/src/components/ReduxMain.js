import CounterContainer from './containers/CounterContainer';
import Todos from './Todo';

const ReduxMain = () => {
    return (
        <div>
            <CounterContainer/>
            <hr />
            <Todos />
        </div>
    );
};

export default ReduxMain;