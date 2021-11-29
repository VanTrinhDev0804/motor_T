/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MotorItem from "../MotorItems/MotorItem";


export default function MotorList() {
    return (
        <div className="Motor pageChild">
            <div className="pageChild__header">
                <h2>MOTOR</h2>
            </div>
            <div id="Motor_Content" className="Motor_Content row">
            <MotorItem/>
            <MotorItem/>
            </div>
        </div>
    );
}