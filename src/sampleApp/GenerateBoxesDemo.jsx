import React, { useState } from 'react'
import Button from '../components/Button';
import BoxListDemo from './BoxListDemo';
import InputFormDemo from './InputFormDemo';
import LabelInputDemo from './LabelInputDemo';

function GenerateBoxesDemo() {
    const [boxes, setBoxes] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [boxText, setBoxText] = useState('');


    function handleClickBox(id) {
        console.log('here ur box-id: ', id);
    };


    function handleSubmit(e) {      // add e when submit form
        e.preventDefault();

        // let trigger = true;      // ko can dong nay

        //check inputvalue
        if(inputValue === '' || inputValue < 0 || inputValue > 128) {
            alert('please enter value from 0 to 128');
            // return trigger = false;
            return;
        }


        // create an array from input value and turn it into and arraylikeObj
        const inputArray = Array.from(Array(Number(inputValue)).keys());
        const newBoxes = inputArray.map(ele => {
            return {
                id: ele,
                text: `Box #${ele+1}`
            }
        });

        // set back state for boxes
        setBoxes(
            newBoxes
        );


        if(boxes.length < 1) {
            setBoxText('no box');
        }

        console.log('welelele: ', inputArray);
        console.log('welel123123ele: ', newBoxes);
        console.log('hmmm: ', boxes);
        
    };


    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <LabelInputDemo htmlFor="formInput" text="Number of boxes: " />
                <InputFormDemo 
                    id="formInput"
                    type="number"
                    min="0"
                    max="128"
                    name="inputNumber"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="The value is between 0 and 128"
                />
                <Button type="submit" text="Generate" />
            </form>
            <br/>
            <BoxListDemo boxes={boxes} boxText={boxText} handleClickBox={handleClickBox} />
            <hr/>
            
        </div>
    )
}

export default GenerateBoxesDemo