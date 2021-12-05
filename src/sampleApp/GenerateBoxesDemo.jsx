import React, { useState } from 'react'
import Button from '../components/Button';
import BoxListDemo from './BoxListDemo';
import InputFormDemo from './InputFormDemo';
import LabelInputDemo from './LabelInputDemo';
import GenerateBoxesForm from './GenerateBoxFrom';

function GenerateBoxesDemo() {
    const [boxes, setBoxes] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [boxText, setBoxText] = useState('');


    function handleClickBox(id) {
        console.log('here ur box-id: ', id);
    };


    function handleSubmit(e) {      // add e when submit form
        e.preventDefault();

<<<<<<< HEAD
        // let trigger = true;      // ko can dong nay
=======
        // let trigger = true;
>>>>>>> 20631b36a81b843b5bd1985be72dfc2863a18a17

        //check inputvalue
        if(inputValue === '' || inputValue < 0 || inputValue > 128) {
            alert('please enter value from 0 to 128');
<<<<<<< HEAD
            // return trigger = false;
            return;
        }


=======
            return ;
        }

>>>>>>> 20631b36a81b843b5bd1985be72dfc2863a18a17
        // create an array from input value and turn it into and arraylikeObj
        const inputArray = Array.from(Array(Number(inputValue)).keys());
        const newBoxes = inputArray.map(ele => {
            return {
                id: ele,
                text: `Box #${ele+1}`
            }
        });
<<<<<<< HEAD

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
=======

        // set back state for boxes
        setBoxes(
            newBoxes
        );


        if(boxes.length < 1) {
            setBoxText('no box');
        }
>>>>>>> 20631b36a81b843b5bd1985be72dfc2863a18a17

        console.log('welelele: ', inputArray);
        console.log('welel123123ele: ', newBoxes);
        console.log('hmmm: ', boxes);

    };

    return (
        <div>
            <GenerateBoxesForm handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
            <br/>
            <BoxListDemo boxes={boxes} boxText={boxText} handleClickBox={handleClickBox} />
            <hr/>
            
        </div>
    )
}

export default GenerateBoxesDemo