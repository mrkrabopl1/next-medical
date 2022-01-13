import React, {useEffect, useState} from "react"
import s from "./circle.module.css"
import {useRef} from "react"
import MiniCircle from "./miniCircle";
import img1 from "../public/1.svg"
import img2 from "../public/2.svg"
import img3 from "../public/3.svg"
import img4 from "../public/4.svg"
import img5 from "../public/5.svg"
import img6 from "../public/6.svg"
import img7 from "../public/7.svg"
import img8 from "../public/8.svg"

function useMyCustomHook<T extends HTMLElement>(){
    const myRef = useRef<T>(null)

       return {ref: myRef}
}
export default function Circle(props) {

    let arr=[
        {img:img4,text:"Дыхательная недостаточность/ респираторная дисфункция"},
        {img:img3,text:"Нарушения жевания и глотания"},
        {img:img2,text:"Ограниченная способность поднимать руки \n" +
                "и переносить предметы"},
       {img:img1,text:"Сколиоз"},
        {img:img8,text:"Утомляемость"},
        {img:img7,text:"Вывих бедра"},
        {img:img6,text:"Контрактура суставов"},
        {img:img5,text:"Неспособность бегать, изменение походки"},
       ]
    const circleCreate=(n,r)=>{
    return (
        arr.map((el,i)=><MiniCircle key={i}  text={el.text} corLeft={left} corTop={height}  img={el.img} top={height-r*Math.cos(2*Math.PI/n*(i+1))} left={left+r*Math.sin(2*Math.PI/n*(i+1))}/>)
    )



    }
    let [left,setLeft]=useState(0)
    let [height,setHeight]=useState(0)
    let [radius,setRadius]=useState(0)
    let [styleHeightM,setHeightM]=useState({})
    let [topText,setTopText]=useState({})
    let [kRad,setkRad]=useState(2.5)
    let [arrCircle,setArrCircle]=useState([])

    const {ref: circle} = useMyCustomHook<HTMLDivElement>()
    const {ref: circleWrap} = useMyCustomHook<HTMLDivElement>()

    useEffect(()=>{

        if(circle.current&&circle.current.clientWidth){
            if(400<circleWrap.current.clientHeight&&circleWrap.current.clientHeight<500){
                setkRad(2.2)
            }
            if(circleWrap.current.clientHeight<400){
                console.log("asas")
                setkRad(4)
            }

        }


    },[circle.current,left])
    useEffect(()=>{

        if(circle.current&&circle.current.clientWidth){
            console.log(kRad,"ddddddddd")
            setHeightM({height:circle.current.clientWidth})
            setLeft(circle.current.clientWidth/2)
            setHeight(circle.current.clientWidth/2)
            setRadius(circleWrap.current.clientHeight/kRad)
            setTopText({top:circle.current.clientWidth/1.5})
            console.log(circle.current)

        }


    },[circle.current,left,kRad])
    useEffect(()=>{

        if(left){
            console.log(radius,"ddddddddddddddddddddddwwwwwwwwwwwww")
            setArrCircle(circleCreate(8,radius))

        }


    },[left,radius])

    return(
        <div ref={circleWrap} className={s.circleWrap} >
            <div style={styleHeightM} ref={circle} className={s.circle}>
                <div className={s.circOp}></div>
                { arrCircle}

                <span style={topText}  className={s.text} >Взрослый</span>
            </div>
        </div>

    )

}