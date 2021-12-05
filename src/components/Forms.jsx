import React, {useRef, useState} from 'react'

const defaultTitle = {
    title: 'learn react',
    age: 18,
    age1: 18,
    age2: 18,
    age3: 18,
    age4: 18,
};

const genders = [
    {
        label: 'Male',
        value: 'male'
    },
    {
        label: 'Female',
        value: 'female'
    },
];

// main component
function Forms() {
    const [name, setName] = useState('');
    const refBookInput = useRef(null);      // cách đặt tên uncontrolled component, null vì mới vào ko xác định đc
    // const [gender, setGender] = useState('male')
    const [gender, setGender] = useState(genders[0].value)
    // const [titles, setTitles] = useState([
    //     {
    //         id: 1,
    //         title: 'learn react',
    //     }
    // ]);

    const [titles, setTitles] = useState([
        {
            id: 1,
            ...defaultTitle
        }
    ]);

    const [forms, setForms] = useState({
        firstName: '',
        lastName: '',

    });

    const [form, setForm] = useState({
        learn: 'react',
        age: 30
    });

    const onChange = event => {
        const name = event.target.name;

        setForm(prevState => ({
            ...prevState,
            [name]: event.target.value
        }))
    }


    // callback function changeName in controlled e.g.
    function handleChangeName(event) {
        const {value} = event.target;
        setName(value);
    }

    console.log('controlled component11: ', name);

    function handleSubmitBook(event) {
        event.preventDefault();
        // console.log('refBookInput: ', refBookInput)   // useRef sẽ trả về 1 object, lấy ra DOM input thì .current;
        // muốn lấy ra giá trị input thì .current.value
        console.log('refBookInput: ', refBookInput.current.value);
        console.log('Type gender: ', gender);
    }

    console.log('Uncontrolled component: ', refBookInput)


    // add more dynamic form
    function handleAddMore() {
        const newTitles = {
            ...defaultTitle,
            id: Date.now(),
            title: '',
        }

        setTitles(prevState => {
            // const newState = [...prevState, newTitles];
            // return newState;

            // tương đương cách viết trên
            return [
                ...prevState,
                newTitles
            ]
        })
    }


    // curry arrow function
    // const handleDelete = argument => return function => return result;
    // const handleDelete = idx => () => {
    //     console.log('handleDelete: ', idx);
    // }


    // curry traditional function
    function handleDelete(id) {
        // console.log('handleDelete: ', idx)
        return function() {
            // titles.splice(idx, 1);
            // console.log('titles: ', titles)
            setTitles(prevState => {
                const newTitle = [...prevState];
                // console.log('udesadasee: ', newTitle);      // reutrn ra 1 array object gồm 4 object nhỏ tạo từ btn add new
                const indexTitle = newTitle.findIndex(ele => ele.id === id)
                newTitle.splice(indexTitle, 1);
                return newTitle;
            })
        }
    }

    const handleChange = (e, id) => {
        // take the input value from user
        const {value} = e.target;
        // shallow copy array input into new memory
        const newTitles = [...titles]
        // console.log('củ chuối: ', newTitles)
        // findindex của mảng array - vd change input 2 là phải có index của input 2 trong mảng array input - để thay đổi object trong input đó rồi setState lại
        const index = titles.findIndex(ele => ele.id === id)
        // console.log('eqweqweqwe11113: ', item)
        titles[index].title = value;
        setTitles(newTitles);
        // console.log(value, id);
    }

    console.log('3123123ddddđ: ', titles)

    function handleGender(e) {
        setGender(e.target.value)
    }

    function handleChangeForm(e) {
        const {name, value} = e.target;

        setForms(prevState => {
            return {
                ...prevState,
                [name]: value,      /// nếu viết name: value ===>> thì máy hiểu là key là name: value, còn mình đang muốn truyền biến name vào, ko phải tạo mới key name, nên dùng [name]
            }
        })

        // console.log('day la name: ', name);
        // console.log('day la value: ', value);
    };

    console.log('multiple form input: ', forms);


    return (
        <div>
            <h4>Controlled component</h4>
            <form>
                {/* Name: <input type="text" /> */}
                {/* Name: <input type="text" value={name} /> */}
                Name: <input type="text" value={name} onChange={handleChangeName} />
                <button type="submit">Submit</button>
            </form>

            <br/><br/>

            <h4>Uncontrolled component</h4>
            <form onSubmit={handleSubmitBook}>
                Book: <input defaultValue="abc" type="text" ref={refBookInput} />
                <br/><br/>
                Gender:
                <select value={gender} onChange={handleGender}>
                    {genders.map((ele, idx) => (
                        <option key={idx} value={ele.value}>{ele.label}</option>    // key = idx đc do ko modify gì ở đây
                    ))}
                    {/* <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="xyz">xyz</option> */}
                </select>
                <button type="submit">Submit</button>
            </form>

            <br/><br/>

            <form>
                <input type="text" name="learn" value={form.learn} onChange={onChange} />
                <input type="number" name="age" value={form.age} onChange={onChange} />
            </form>

            <br/><br/>

            <h4>dynamic form</h4>
            {titles.map(ele => (
                <div key={ele.id}>
                    {/* <input type="text" /> */}
                    <input type="text" value={ele.title} onChange={e => handleChange(e, ele.id)} />
                    <button type="button" onClick={handleDelete(ele.id)}>Delete</button>
                </div>    
            ))}
            <br/><br/>
            <button type="button" onClick={handleAddMore}>add more</button>

            <br/><br/>

            <h4>Multiple input</h4>
            <form>
                FirstName: <input type="text" name="firstName" value={forms.firstName} onChange={handleChangeForm} /> <br/>
                LastName: <input type="text" name="lastName" value={forms.lastName} onChange={handleChangeForm} /> <br/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Forms
