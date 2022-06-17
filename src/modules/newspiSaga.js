import { put, takeLatest,call } from "redux-saga/effects";
// * 전체 들고오는기호
//api.getNews()
import * as api from "../api/api"
import axios from "axios";
//액션타입
const  GET_NEWS_START = "newapiSaga/GET_NEWS_START";
const  GET_NEWS = "newapiSaga/GET_NEWS";
const  GET_NEWS_SUCCESS = "newapiSaga/GET_NEWS_SUCCESS";
const  GET_NEWS_FAILURE = "newapiSaga/GET_NEWS_FAILURE";

//액션함수
export const getNewsStart = () => ({type: GET_NEWS_START})

//제너럴 함수(사가에서 실행될 함수)
function* getNewsSaga() {
    //로딩시작 
    yield put({type: GET_NEWS})
    //try catch를 통해 axios에서 값 가져옴
        try{
            //saga에서  api를 사용할때는 call 을 사용해서 함수를 실행한다(async-await 대신사용)
            //call(실행할 함수(함수로 감싸서), 함수의 인자값(옵션))
            //api폴더와 파일 따로 만들어서 export해서 사용 api.newget()
            const response = yield call(api.getNews)//getNews함수내용통째로 getNews()실행결과값
            console.log(response.data.articles);
            yield put({
                type:GET_NEWS_SUCCESS,
                payload: response.data.articles
            }) 
                
        } catch{
            yield put({
                type:GET_NEWS_FAILURE,
                payload: e
            }) 
        }
    //성공 :  GET_NEWS_SUCCESS값전달
    //실패 : GET_NEWS_FAILURE로 오류전달
}

//작성한 제너럴 함수를 묶어주는 사가
export function* newapiSaga() {
    yield takeLatest(GET_NEWS_START,getNewsSaga)
}

//초기값
const initalState = {
    loading : {
        GET_NEWS:false
    },
    news : null
}
//리듀서 값작성
const newapiSagaReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {...state, loading : {GET_NEWS : ture}
        };
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                loading : {GET_NEWS: false},
                news : action.payload
            }
        case GET_NEWS_FAILURE:
            return {
                ...state,
                loading:{GET_NEWS : false},
            }
            default:
                return state;
    }
}

export default newapiSagaReducer;