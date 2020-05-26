import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import style from './SingUp.module.css';
import {createNewUser} from "../../../slices/user/userSlice";
import {useHistory} from "react-router";

const SingUp = () =>     {
    const myRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [currentUser, createdUsers] = useState({
        name: '',
        email: '',
        password: '',
    });
    const history = useHistory();
    const enterAllFields = () => {
        if (null !== myRef.current) {
            changeInnerText(myRef.current, 'Enter All Fields');
            setTimeout(() => {
                if(null !== myRef.current)
                changeInnerText(myRef.current, '');
            }, 1000);
        }
    };

    function changeInnerText(el: HTMLElement, value: string) {
        el.innerText = value;
    }




    const nUser = () => {dispatch(createNewUser(currentUser)); createdUsers({name:'', password: '', email: ''});
        if (null !== myRef.current) {
            changeInnerText(myRef.current, 'Registered!');
            setTimeout(() => {
                    if(null !== myRef.current)
                    changeInnerText(myRef.current, '');
                    history.push('/');
            }, 1000);
        }};

    const isNotEmpty = () => {
        return (currentUser.email !== '' && currentUser.name !== '' && currentUser.password !== '')
    };
    return (
    <>
        <div>Name:</div>
        <div>
            <input
                type='text'
                name='name'
                placeholder='name'
                value={currentUser.name}
                onChange={e =>{ createdUsers({...currentUser, name: e.target.value})}}
            />
        </div>
        <div>  Email Address:</div>
        <div>
            <input
                type='email'
                name='email'
                placeholder='email'
                value={currentUser.email}
                onChange={e =>{ createdUsers({...currentUser, email: e.target.value})}}
            />
        </div>
        <div>Password:</div>
        <div>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={currentUser.password}
                onChange={e =>{ createdUsers({...currentUser, password: e.target.value})}}
            />
        </div>

        <button className={style.buttonSubmit} onClick={() => {(isNotEmpty()) ? nUser() : enterAllFields()}}>
            Create new User
        </button>
        <div className={style.errBox} ref={myRef}>
        </div>
    </>

)};

export default SingUp;