import Header from "../components/header";
import CounterNum from "../components/counterNum";

const Counter= () => {
    return(
        <>
            <Header subtitle="카컴"
             detail="state에 대해서 알아보는 시간을 가지겠습니다"/>
            <CounterNum />        
        </>
    );
}


export default Counter;
