import CounterContainer from '../containers/CounterContainer';
import TodosContainer from '../containers/TodosContainer';

const ReduxMain = () => {
    return (
        <div>
            <CounterContainer/>
            <hr />
            <TodosContainer />
        </div>
    );
};

export default ReduxMain;