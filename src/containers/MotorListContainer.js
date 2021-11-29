import React, { Component } from "react";
import MotorItem from '../component/MotorItems/MotorItem';
import MotorList from '../component/MotorLists/MotorList'


export default class MotorListContainer extends Component {
    render(){
        return(
            <div>
                <MotorList>
                    <MotorItem/>
                </MotorList>
            </div>
        );

    }
}
