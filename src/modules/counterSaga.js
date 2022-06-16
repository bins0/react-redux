// 리덕스 사용을 위한 초기 상태와 리듀서 함수 만들기

// 액션 : 액션이름 = "모듈이름/액션이름" 으로 구성
// 대문자로 작성된 변수이름의 특징 : 변하지않는 값일 때 = 상수 ,ex) 3.14.... = PI
//redux-saga를 이용하여 1초뒤에 값이 증가하는 비동기 하뭇만들기
//redux-saga에서 delay,put함수를가져옴
//takeEvery 
//takeLatest  가장마지막디스패치 
import { delay,put,takeEvery,takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "coutner/DECREASE";
const SETDEFF = "coutner/SETDEFF";
const DIFF = "coutner/DIFF";

//비동기를 위한 액션이름추가
const INCREASE_ASYNC = 'couter/INCRESE_ASYNC';
const DECREASE_ASYNC = 'couter/DECRESE_ASYNC';
 

// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({type:SETDEFF,payload:diff});
export const onDiff = () => ({type:DIFF});

//비동기를 위한 액션 생성함수
export const increaseAsyc = () => ({type:INCREASE_ASYNC});
export const decreaseAsyc = () => ({type:DECREASE_ASYNC});

//재너럴함수 생성 실행내용작성
function* increseSaga() {
  yield delay(1000);//1초 기다림 
  yield put(increase())//put 은  액션을 디스패치해줌 
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

//작성해준 기능들어간 제너럴 함수를 어떤식으로 실행할지 내보내는함수
export function* counterSaga() {
  //takeEvery는 모든 작업실행
  yield takeEvery(INCREASE_ASYNC, increseSaga);//takeEvery 들어오는 모든 INCREASE_ASYNC액션에 대해 increaseSaga 함수 실행
 //CounterSagaContainer.jsx에서 dispatch(increaseAsyc() 이곳에서불러옴 
  
 // takeLatest는 중복되었을때 마지막 작업만 실행
 yield takeLatest(DECREASE_ASYNC, decreaseSaga);//한번실행
}

// 초기 상태
const initalState = {
  number: 0,
};

// 리듀서 함수 ,상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counterSagaReducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}


export default counterSagaReducer;
