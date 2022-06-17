//작성한 리덕스 모듈을 하난로 묶어서 사용
//redux 몯류에서 combineReducers를 가져옴
//redux와 react-redux 두개 설치후 사용
import {combineReducers} from 'redux'
//리덕스 사가의 이펙트를 들고옴
import { all } from "redux-saga/effects";

//작성한 리덕스 모듈을 가져옴
import counter from './counter'
import  todos   from "./todos";
import  counterAsyc  from "./counterAsyc";
import  newsapi  from "./newapi";

//리덕스 사가를 이용한 export 를 가져옴
//defalut로 export한 경우 : {} 없이 들고옴, 이름을 바꿀수 있음
//export만 한 경우 : {}를 통해서 동일한 이름으로 들고옴
//couterSaga.js에서 들고옴
 import counterSagaReducer, {counterSaga} from './counterSaga'
import newapiSagaReducer, { newapiSaga } from './newspiSaga';



const rootReducer = combineReducers({
    counter,
    counterAsyc,
    todos,
    newsapi,
    counterSagaReducer,
    newapiSagaReducer
});

export function* rootSaga() {
    yield all([counterSaga(),newapiSaga()]);
}

export default rootReducer;
