import React, {useState,useRef} from 'react';
import styled, {css} from 'styled-components';
import Task from './Task/Task';

// styles
const Div = styled.div`
    width: 100%;
    color: cornflowerblue;
    border: 4px solid cornflowerblue;
    padding: 2px;
    background-color: white
`
const PrimarySection = styled.section`
    display: block;
    width: 80%;
    color: white;
    padding: 25px;
    background-color: white;
`
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #f1faee;
    color: white;
    margin: 1.9rem 1rem;
    padding: 0.3rem 1rem;
    transition: all 0.25s ease-out;
    &:hover{
    transform: scale(1.05);
    color: #white;
    background: #83c5be;
    border: 2px solid transparent;
    }

    ${props => props.primary && css`
        background: white;
        color: #457b9d;
        border: 2px solid #2a9d8f;
        &:hover{
            background: #2a9d8f;
            color: white;
        }
    `} 
    ${props => props.secondary && css`
        background: white;
        color: #bdb2ff;
        border: 2px solid #bdb2ff;
        &:hover{
            background: #bdb2ff;
            color: white;
        }
    `}  
`

export default function TaskAppMainContent() {
    // references
        const itemsInput = useRef()
        const addButton = useRef()

    // States
        const [newItem, setNewItem] = useState({})
        const [listOfItems, setListOfItems] = useState([])

    // funcionality
    function clearInput(){
        itemsInput.current.value = '';
    }

    function addItem() {
        let value = itemsInput.current.value
        let item = {
            id: (Math.random()*50).toFixed(2), 
            value
        }
        setNewItem(item)
        setListOfItems([...listOfItems, item] )
        clearInput()
    }
    
    function deleteItem(item) {
        const newList = listOfItems.filter( el => el.id !== item)
        console.log(newList)
        return setListOfItems(newList)
    }

    return (
        <PrimarySection>
            <Div>
                That's right, keep going<br/>
                <input 
                  ref={itemsInput}
                  type={'text'}
                  placeholder={'Write your task'}
                  onKeyPress={ (e) => {
                    let key = e.key;
                    if (key === "Enter"){
                      addItem()
                    }
                  }}
                >
                </input>
                <Button
                  primary 
                  onClick={( (e) => addItem())}
                  ref={addButton}
                >
                Add New
                </Button>
                <Button secondary>Print all</Button>

                <div style={{display:"flex", flexWrap:'wrap', width:"100%", justifyContent:"center"}}>
                { (listOfItems.length>0) && 
                        <Task data={listOfItems} deleteFunction={deleteItem}/>
                    }
                </div>
            </Div>
        </PrimarySection>
    )
}
