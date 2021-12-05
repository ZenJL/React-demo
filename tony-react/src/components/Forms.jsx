import React, { useState, useRef } from 'react';

const defaultTile = {
  title: 'learn react',
  age: 18,
  ag1: 18,
  age3: 18,
  ag4: 18,
}

const genders = [
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  },
  
]

function Forms() {
  const [name, setName] = useState('123');
  const refBookInput = useRef(null);
  const [gender, setGender] = useState(genders[0].value);
  const [titles, setTitles] = useState([
    {
      id: 1,
      ...defaultTile
    }
  ]);
  const [forms, setForms] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    agree: false
  })

  function handleChangeForm(event) {
    const { name, value, checked, type } = event.target;
    let text = '';
    switch(type) {
      case 'text': {
        text = value
        break;
      }
      case 'checkbox': {
        text = checked
        break;
      }
      case 'radio': {
        text = value
        break;
      }
      default:
        break;
    }

    setForms(prevState => {
      return {
        ...prevState,
        [name]: text
      }
    })
  }

  console.log('multiple input: ', forms)

  function handleChangeName(event) {
    const { value } = event.target;
    setName(value);
  }

  function handleGender(event) {
    setGender(event.target.value)
  }

  function handleSubmitBook(event) {
    event.preventDefault();
    console.log('refBookInput', refBookInput.current.value)
    console.log('type gender ', gender)
  }

  function handleAddMore() {
    const newTitles = {
      ...defaultTile,
      id: Date.now(),
      title: '',
    }
    setTitles(prevState => {
      const newState = [...prevState, newTitles] //memoryB
      return newState
    })
  }

  // function handleDelete(idx) {
  //   console.log('handleDelete', idx)
  // }

  // curry function (arrow function)
  // const  handleDelete = idx => () => {
  //   console.log('handleDelete', idx)
  // }

   // curry function (tranditional function)
  function handleDelete(id) {
    return function() {
      setTitles(prevState => {
        const newTitle = [...prevState];
        const indexTitle = newTitle.findIndex(ele => ele.id === id)
        newTitle.splice(indexTitle, 1)
        return newTitle
      })
    }
  }

  const handleChange = (event, id) => {
    const { value } = event.target;
    const newTitle =  [...titles];
    const index = newTitle.findIndex(ele => ele.id === id);
    newTitle[index].title = value;
    setTitles(newTitle);
  }

  function handleCheckbox(event) {
    console.log(event)
  }

  function handeRadioGender(event) {
    console.log('handeRadioGender: ', event.target.value, event.target.checked)
  }

  return (
    <div>
      <h4>Controlled component</h4>
      <form>
        Name: <input type="text" value={name} onChange={handleChangeName} />
        <button type="submit">submit</button>
      </form>
      <br /><br />
      <h4>Uncontrolled component</h4>
      <form onSubmit={handleSubmitBook}>
        Book: <input defaultValue="abc" type="text" ref={refBookInput} />
        <br />
        Gender:
        <select value={gender} onChange={handleGender}>
          {genders.map((ele, idx) => (
            <option key={idx} value={ele.value}>{ele.label}</option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form>
      <br /><br />
      <h4>Dynamic form</h4>
      {titles.map((ele, idx) => (
        <div key={ele.id}>
          <input type="text"  value={ele.title} onChange={event => handleChange(event, ele.id)} />
          <button type="button" onClick={handleDelete(ele.id)}>Delete</button>
        </div>
      ))}
      <br /><br />
      <button type="button" onClick={handleAddMore}>Add more</button>


      <br /><br />
      <h4>Multiple input</h4>
      <form>
        FirstName: <input type="text" name="firstName" value={forms.firstName} onChange={handleChangeForm} />
        <br />
        LastName: <input type="text" name="lastName" value={forms.lastName} onChange={handleChangeForm} />
        <br />
        Agree: <input type="checkbox" name="agree" onChange={handleChangeForm} />
        <br />
        Gender: 
        <br />
        <input type="radio" value="male" name="gender"  onChange={handleChangeForm}/> 
        <label for="html">Male</label><br />
        <input type="radio" value="female" name="gender"  onChange={handleChangeForm}/>
        <label for="html">Female</label><br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Forms
