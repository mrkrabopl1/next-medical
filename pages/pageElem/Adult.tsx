import React from "react"
import s from "./adult.module.css"
import Image from 'next/image'
import profilePic from "./public/adult.png"
export default function Adult(props) {

    return(
        <div className={s.adultCont}>
              <p className={s.clause}>Взрослый</p>
            <Image className={s.img}  src={profilePic} alt=""/>


                <p className={s.f} >Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</p>
                <p className={s.text} >По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. </p>
                <p className={s.text}>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. </p>



        </div>
    )

}