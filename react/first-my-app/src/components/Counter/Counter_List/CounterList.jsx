import React, { useState } from 'react';
import './CounterList.scss'

function CounterList(){
    let [글제목, 글제목변경함수] = useState(['두더지의 삶', '산양의 삶', '기린의 삶', '말의 삶', '고라니의 삶']); 
    let [좋아요1, 좋아요함수1] = useState(0);
    let [좋아요2, 좋아요함수2] = useState(0);
    let [좋아요3, 좋아요함수3] = useState(0);
    let [좋아요4, 좋아요함수4] = useState(0);
    let [좋아요5, 좋아요함수5] = useState(0);
    let [싫어요1, 싫어요함수1] = useState(0);
    let [싫어요2, 싫어요함수2] = useState(0);
    let [싫어요3, 싫어요함수3] = useState(0);
    let [싫어요4, 싫어요함수4] = useState(0);
    let [싫어요5, 싫어요함수5] = useState(0);
    return(
        <div>
            <div className="list list1">
                <h3> {글제목[0]}<span onClick={() => { 좋아요함수1(좋아요1 + 1) }}> 👍🏽 </span> {좋아요1} <span onClick={() => { 싫어요함수1(싫어요1 - 1) }}> 👎🏾 </span> {싫어요1}</h3>
                <p>수명:7년</p>
            </div>
            <div className="list list2">
                <h3> {글제목[1]}<span onClick={() => { 좋아요함수2(좋아요2 + 1) }}> 👍🏽 </span> {좋아요2} <span onClick={() => { 싫어요함수2(싫어요2- 1) }}> 👎🏾 </span> {싫어요2} </h3>
                <p>수명:12년</p>
            </div>
            <div className="list list3">
            <h3> {글제목[2]}<span onClick={() => { 좋아요함수3(좋아요3 + 1) }}> 👍🏽 </span> {좋아요3} <span onClick={() => { 싫어요함수3(싫어요3 - 1) }}> 👎🏾 </span> {싫어요3} </h3>
                <p>수명:18년</p>
            </div>
            <div className="list list4">
                <h3> {글제목[3]}<span onClick={() => { 좋아요함수4(좋아요4 + 1) }}> 👍🏽 </span> {좋아요4} <span onClick={() => { 싫어요함수4(싫어요4 - 1) }}> 👎🏾 </span> {싫어요4}  </h3>
                <p>수명:16년</p>
            </div>
            <div className="list list5">
                <h3> {글제목[4]}<span onClick={() => { 좋아요함수5(좋아요5 + 1) }}> 👍🏽 </span> {좋아요5} <span onClick={() => { 싫어요함수5(싫어요5 - 1) }}> 👎🏾 </span> {싫어요5}  </h3>
                <p>수명:14년</p>
            </div>
        </div> 
    )
}

export default CounterList;