//modules > newapi.js 와 components > NewItem.jsx를 연결시켜줌

import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NewsItem from '../components/NewsItem';
import  getNews  from '../modules/newapi'; //dispatch를 통해 getnew를 부름 thunk로들어감 geNew가 함수인지 확인함 함수이면 thunk가 실행되어짐 사용하기위해 가져옴
export const NewsItemAsycContainer = () => {

   const {loadingNews, news} = useSelector(
    (state) => ({
        loadingNews : state.newapi.loading.GET_NEWS,
        news: state.newapi.news,
    })); 
    const dispatch = useDispatch();

    const GetNews = useCallback(() => dispatch(getNews()),
    [dispatch]);

    //마운트될때 실행하기 위해서 useEffect사용
    useEffect(() => {
        GetNews();
    },[GetNews]);

  return <NewsItem news={news} loadingNews={loadingNews} />
};

export default NewsItemAsycContainer;