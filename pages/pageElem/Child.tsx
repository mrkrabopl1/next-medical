import Image from 'next/image'
import s from "./adult.module.css"
import React from "react";
import profilePic from "./public/child.png"
export default function Child(props) {

    return (

        <div className={s.adultCont}>
            <p className={s.clause}>Ребенок</p>
            <Image className={s.img} src={profilePic} alt=""/>

            <p className={s.f}>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                в отношении наличия СМА.
            </p>
            <p className={s.text}>Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
                терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                дегенерации при прогрессировании заболевания </p>


        </div>
    )
}