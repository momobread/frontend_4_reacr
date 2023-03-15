import { useMemo, useRef, useState } from "react";

const MarketPage=()=>{
    
    const [marketList,setMarketList]= useState(

        [
            {id:1,name:'바나나',cnt:3,clear:true},
            {id:2,name:'사과',cnt:2,clear:false},
            {id:3,name:'자두',cnt:5,clear:true},    
        ]
        //객체로 묶어서 저장
    );


    const marketListComponents = marketList.map(
        (v)=> <p onClick={()=>onComplete(v.id)}key={v.id} style={{color : v.clear && 'red'}}>구매대상 : {v.name},갯수 : {v.cnt}</p>
        //인라인 스타일을 줄때는 중괄호{}를 한번 더 쓴다//객체로 넘겨주기 때문//clear가 true면 red

        );


        // const proName = useRef(null);
        // const proCnt = useRef(null);
        const inputRef =useRef(null);

        const onComplete = (id)=>{
            console.log(id)
            let tmp= marketList.map((v)=>v.id ===id?{...v,clear:!v.clear}:v);
            //?
            setMarketList(tmp);
                }//?


        //구매완료인 애들만 받아오는 함수
        // const getClearCnt=()=>{
        //     return marketList.filter((v)=>v.clear).length;
        // }

        const getClearCnt = useMemo(()=>{
            console.log('구매완료 갯수 세는 함수')
            return marketList.filter((v)=>v.clear).length;
        }, [marketList]);




        const onAdd=()=>{
            // console.log(proName.current.value);//인풋태그 의미
            console.log(inputRef);
            console.log(inputRef[0].value);
            console.log(inputRef[1].value);
         
            if(!inputRef[0].value){
                //inputref 0번째 방의 value가 비어있다면
                inputRef[0].focus();
                return;
            }
            if(!inputRef[1].value){
                inputRef[1].focus();
                //input태그에다가 focus 시키고 함수종료
                return;
            }
        
      let tmp = [...marketList,
        //기존에 있던 marketlist에다가 추가해주세요
                {
                    id : marketList[marketList.length-1].id+1,
                    name:inputRef[0].value,
                    cnt:inputRef[1].value,
                    clear:false
                }
            ]
        
            setMarketList(tmp);//추가된 배열로 바꿔줘
        }

        const[idLength,setIdLength]=useState(0);
        
        const onIdChange =(e)=>{
            console.log(e)
            setIdLength(e.target.value.length);
        }
        
        //ref에다가 함수를 넘겨줌 ref에다가 함수를 넘기면 태그가 스스로 넘어감
    return(
    <>
        <h2>마켓페이지</h2>
        <input placeholder ="물품" ref={(el)=>inputRef[0]=el}/>
        <input placeholder ="갯수" ref={(el)=>inputRef[1]=el}/>
        <input style ={{color : idLength< 8 &&'red'}} onChange={onIdChange} placeholder="주문자 id를 입력하세요" />
        <button onClick={onAdd}>추가하기!</button>
        {marketListComponents}
        <h2>전체 항목 갯수 : {marketList.length}</h2>
        <h2>구매완료 갯수 : {getClearCnt}</h2>
         </>
    );

}

export default MarketPage 