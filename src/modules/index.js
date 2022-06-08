//작성한 리덕스 모듈을 하난로 묶어서 사용
//redux 몯류에서 combineReducers를 가져옴
//redux와 react-redux 두개 설치후 사용
import {combineReducers} from 'redux'

//작성한 리덕스 모듈을 가져옴
import counter from './counter'

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
