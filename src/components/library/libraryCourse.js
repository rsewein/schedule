import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu pulvinar purus, eget vestibulum mi. Curabitur dignissim ex nec libero faucibus vehicula. Curabitur ultrices tortor in justo egestas, vel euismod nunc scelerisque. Quisque sapien est, hendrerit at maximus ut, porttitor et lorem. Integer sed venenatis turpis. Duis pulvinar orci quis varius tempor.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;