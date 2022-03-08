import React from "react";
import "./TitleName.scss"

const TitleName = (props) => (
    <div>
        <h1 className="TitleName">나의 첫번째 React_Project {props.name}</h1>
    </div>
)


export default TitleName;