import React, {useEffect, useRef, useState} from "react";
import s from "./circle.module.css";
import Image from 'next/image'
import img from "../public/cross.svg"
import { MiniCircleType } from "../../../interface/minCircleInterface";


export default function MiniCircle(props:MiniCircleType) {
 let miniCircle=useRef(null)
    let text=useRef(null)
    let [style,setStyle]=useState({})
    let [crossStyle,setCrossStyle]=useState({})
    let [textStyle,setTextStyle]=useState({})
    let [step,setStep]=useState({x:200,y:80})
    let side=Math.round(props.left-props.corLeft)
    useEffect(()=>{
        if(46<miniCircle.current.clientWidth&&miniCircle.current.clientWidth<80){

            setStep({x:100,y:80})
        }
        if(miniCircle.current.clientWidth<46&&miniCircle.current.clientWidth>41){

            setStep({x:70,y:70})
        }
        if(miniCircle.current.clientWidth<41){

            setStep({x:50,y:70})
        }
    },[])
    useEffect(()=>{

        console.log(props.top)

        if(miniCircle.current){


            let width=miniCircle.current.clientWidth
            let height=miniCircle.current.clientHeight
            let centrCorX=(width-text.current.clientWidth)/2
            let centrCorY= (height-text.current.clientHeight)/2

            setStyle({

                left:props.left-width/2,
                bottom:props.top-height/2


            })

            setCrossStyle({

                width:width*41/106,
                height:height*41/106,


            })

            if(side===0){
                if(props.top<0){
                    setTextStyle({

                        left:centrCorX,
                        top:centrCorY+step.y,
                        textAlign:"center",



                    })

                }
                else{
                    setTextStyle({

                        left:centrCorX,
                        top:centrCorY-step.y,
                        textAlign:"center",


                    })
                }

            }
            else if(side>0){
                setTextStyle({

                    left:centrCorX+step.x,
                    top:centrCorY,
                    textAlign:"left",


                })
            }
            else{
                setTextStyle({

                    left:centrCorX-step.x,
                    top:centrCorY,
                    textAlign:"right",


                })
            }

        }
    },[miniCircle,step])



    return(
        <div onMouseOver={()=>setTextStyle({...textStyle,opacity:1})} onMouseOut={()=>setTextStyle({...textStyle,opacity:0})}ref={miniCircle} style={style} className={s.miniCircle} >
            <Image  className={s.img}  src={props.img}  alt=""/>
            <span  style={textStyle} ref={text} className={s.mag}>
                {props.text}
            </span>
            <div style={crossStyle} className={s.cross}>

            </div>


        </div>


    )

}