//리덕스를 사용하기 위해 보여지는 컴포넌트에서는 props값을 받아온다

/* state 를 사용하는 방법
    1.useState, useRedux를 이용하여 한 컴포넌트에서 사용
    2.Context API를 이용하여 전역적으로 사용 : useContext()이용하여 값 가져옴
    3.리덕스를 이용하여 상태관리하여 사용 : props을 통해 값가져옴
*/

export const Counter = ({number, onIncrease,onDecrease}) => {
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}

 