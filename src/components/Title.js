import React, { Component } from 'react';
import styled from 'styled-components';

// export default class Title extends Component {
// 	render(){
// 		console.log("PROPS=>", this.props);
// 		return(
//           <Header>{this.props.title}</Header>
// 		)
// 	}
// }

export default function Title({name, title}){
    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name}<strong className="text-blue"> {title}</strong>
                </h1>
            </div>
        </div>
    )
}

// const Header = styled.h2`
//     text-align: center;
//     color: #000;
//     margin: 0;
//     font-family: monospace;
//     font-size: 24px;
//     line-height: 32px;
// `;