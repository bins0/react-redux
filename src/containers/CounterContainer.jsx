//Counter 컴폰너트와 리덕스를 CouterContainer에서 연결 
import { connect } from 'react-redux';
import { Counter } from '../components/Counter'
import { decrease, increase } from '../modules/counter';

//호출했을때 보이는 컴포넌트 : Counter-props 값을 받아서 화면 출력
const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}
/* connect에 넣을 값 따로 지정해줄때 
//stateProps값 
const mapStateToProps = state =>({
    number : state.counter.number
})
//dispatchProps값
const mapDispatchProps = dispatch => ({
    increase : () => { dispatch(increase()) }, //dispatch({type:INCREASE}) > useReduce2
    decrease : () => { dispatch(decrease()) }
})

//store 로 가져온 리덕스 모듈(리듀서함수)를 컨테이너 컴포넌트와 연결함
//connet를 통해서 store로 가져온 리덕스 모듈과 
//mapStateToProps(state), mapDispatchToProps(dispatch) 를 연결해준다
//위와 같은 형태를 고정해서 사용. 
export default connect(mapStateToProps,mapDispatchProps)(CounterContainer);
*/
export default connect(
  state=> ({
    number:state.counter.number
  }),
  {
    increase,//counter 모듈에서 가져온 함수
    decrease,
  })(CounterContainer);
