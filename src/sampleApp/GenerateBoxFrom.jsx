import React, { useState } from 'react'
import Button from '../components/Button';
import BoxListDemo from './BoxListDemo';
import InputFormDemo from './InputFormDemo';
import LabelInputDemo from './LabelInputDemo';

function GenerateBoxesDemo({ inputValue, setInputValue, handleSubmit }) {
    return (
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
    )
}

export default GenerateBoxesDemo