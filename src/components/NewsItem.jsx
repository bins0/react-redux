import React from 'react'
//news는 modules > newapi.js안의 news : null 이다
const NewsItem = ({news}) => {
  return (
    <div>
        {//loadingNew가 true일때 로딩중이라는 글자 출력
        logingNew && "로딩중.."}
        {//loadingNew가 false이고, new의 값이 null 이 아닐때
        !logingNew &&
        news &&
        //news를 map을 이용하여 반복
        news.map((n) => (
        <div>
            <h2>{n.title}</h2>
            <p>{n.description}</p>
        </div>
        ))}
    </div>
  );
};

export default NewsItem;