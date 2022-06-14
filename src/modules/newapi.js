import React from 'react'
import { axios } from "axios";

//비동기 

//액션
const GET_NEWS = 'newapi/GET_NEWS';
const GET_NEWS_SUCCESS = 'newapi/Get_NEW_SUCCESS';
const GET_NEWS_FAIURE = 'newapi/GET_NEWS_FAILURE';

// Thunk미들웨어를 통해 실행 
//액션 함수 > axios로 받아오기 위해 비동기로 작성
//id와 같은 값이 필요하다면 감싸준 함수의 매개변수 안에 작성
//const getNew = (id) => async (dispatch)
export const getNews = () => async (dispatch) => {
    // 액션타입을 객체로 바로 보내줌
    dispatch({type:GET_NEWS});
    try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
        console.log(response.data.articles);
        dispatch({
            type : GET_NEWS_SUCCESS, 
            payload : response.data.articles,
        });//요청성공
    } catch (e) {
        dispatch({
            type : GET_NEWS_FAIURE,
            payload : e,
            error : true
        });//에러발생 알림
        throw e; //에러를 넘겨줌
    }

};

//초기 state 선언
const initalState = {
    loading : {
        GET_NEWS:false
    },
    news : null
}

//리듀서 함수 작성
const newapi = (state = initalState, action) => {
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
        case GET_NEWS_FAIURE:
            return {
                ...state,
                loading:{GET_NEWS : false},
            }
            default:
                return state;
    }
}

export default newapi;