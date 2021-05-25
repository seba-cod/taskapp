import React, { useState, useRef} from 'react'
import styled, {css} from 'styled-components'

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #83c5be;
color: #83c5be;
margin: 1.9rem 1rem;
padding: 0.3rem 1rem;
transition: all 0.25s ease-out;
&:hover{
  transform: scale(1.02);
  color: white;
  background: #83c5be;
  border: 2px solid transparent;
}

${props => props.danger && css`
  background: transparent;
  color: #e63946;
  border: 2px solid #e63946;
  &:hover{
    background: #e63946;
    border: 2px solid trasparent;
  }
`} `

const Div = styled.div`
  position: relative;
  flex-basis: 32%;
  display: block;
  padding: 4px;
  box-shadow: 5px 10px 10px 1px;
  border: 2px solid grey;
  background-color: black;
  border-radius: 5px;
  color: grey;
  padding: 20px;
  margin: 1rem;
  background-color: white;
  &:before{
    content: "♥";
    font-family: 'Arial';
    font-size: 16px;
    border-radius: 50%;
    background: #9999;
    display:block;
    padding: 8px;
    border: 100px 150px;
    color: white;
    position: absolute;
    top: 5px;
    left: 215px;
  }
  `

export default function Task(props) {
  // console.log('esto es data en Task ', data)

  const data = props.data;
  const deleteItem = props.deleteFunction;
  const itemValue = useRef();
  const itemId = useRef();
  
  return (
      <React.Fragment>
          {
            data.map((item, i) => 
              {
                return(
                  <Div key={i} >
                      <p>
                        <span 
                        ref={itemId}
                        >
                          Id N°{item.id}
                        </span>
                      <br/>
                        <span 
                          ref={itemValue}
                        >
                          {item.value}
                        </span>
                      </p><br/>
                      <div style={{display:"flex", justifyContent:"center"}}>
                      <Button >View</Button>
                      <Button
                        danger
                        value={item.id}
                        onClick={( (e) => {
                          deleteItem(e.target.value)
                        })}
                        >
                      Delete</Button>
                      </div>
                  </Div>
                )
              }
            )
          }
            
      </React.Fragment>
    )
}
