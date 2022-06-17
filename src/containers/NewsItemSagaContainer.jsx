//modules > newapi.js 와 components > NewItem.jsx를 연결시켜줌

import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NewsItem from '../components/NewsItem';
import { getNewsStart } from '../modules/newspiSaga';
export const NewsItemSagaContainer = () => {

   const {loadingNews, news} = useSelector(
    (state) => ({
        loadingNews : state.newapi.loading.GET_NEWS,
        news: state.newapi.news,
    })); 
    const dispatch = useDispatch();

    const GetNews = useCallback(() => dispatch(getNewsStart()),
    [dispatch]);

    //마운트될때 실행하기 위해서 useEffect사용
    useEffect(() => {
        GetNews();
    },[GetNews]);

  return <NewsItem news={news} loadingNews={loadingNews} />
};

export default NewsItemSagaContainer;