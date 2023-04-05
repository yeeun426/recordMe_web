// 1. 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// 2. 액션 생성 함수 만들기
// 액션 생성 함수에서 파라미터가 필요함
// 전달 받은 파라미터는 액션 객체 안에 추가 필드로 들어가게 됨
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

// 액션 객체를 만들 때 파라미터 외에 사전에 이미 선언되어 있는 id값에 의존함
// 이 액션 생성 함수(insert 함수)는 호출될 때마다 id값에 1씩 더해줌
// 이 id값은 각 todo 객체가 들고 있게 될 고유값
let id = 3;
export const insert = text => ({
    type : INSERT,
    todo : {
        id : id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
});

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: "리덕스 기초 배우기",
            done: true
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;