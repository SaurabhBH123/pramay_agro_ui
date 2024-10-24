import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="bg">
                {
                colors?.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                ))
                }
            </div>
        )
    }
}

export default Colors