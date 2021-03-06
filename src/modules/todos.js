//액션 타입(Todos.jsx)
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 수정
const INSERT ='todos/INSERT'; // 새로운 todo추가
const TOGGLE = 'todos/TOGGLE'; // 체크박스
const REMOVE = 'todos/REMOVE'; //삭제

//액션 함수 :dispatch시에 실행될 type과 필요한 값
export const changeInput = (input) => ({
    type:CHANGE_INPUT,
    input,
})
let id = 3 //사용자가 입력하는 값이 아닌 자동으로 바뀌는값
export const insert =  (text) =>({
    type: INSERT,
    todo : {
        id : id++,//++후위 연산자로 값을 넣어준 후에 1씩증가
        text,//값받아와 넣어주기
        done:false
    }
})



export const toggle = (id) =>({
    type : TOGGLE,
    id,
})

export const remove = (id) =>({
    type : REMOVE,
    id,
})

//초기 state
const  initalState = {
    input : "",
    todos : [ //todos를 가져옴
        {
            id: 1,
            text:'첫번쨰 할일입니다',
            done : true
        },
        {
            id: 2,
            text:'두번쨰 할일입니다',
            done : false,
        },
    ]
}

//리듀서 함수를 통해 수정
function todos(state= initalState,action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            }
            case INSERT:
                return {
                    ...state,
                    todos: state.todos.concat(action.todo),
                };
                case TOGGLE:
                    return{
                        ...state,
                        todos : state.todos.map((todo)=> todo.id === action.id ? {...todo,done:!todo.done} : todo)                  
                    
                    
                    }  
                case REMOVE:
                    return { 
                        ...state,
                        todos : state.todos.filter(
                            (todo) => todo.id !== action.id),
                    }
                    default:
                    return state;
                }
}

export default todos;