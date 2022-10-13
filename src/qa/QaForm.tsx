import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addQA } from '../state/action-creators';
import './QaForm.css'

export default function QaForm() {
    const [qa, setQa] = useState({
        question: '',
        answer: '',
    })

    const dispatch = useDispatch()

    function onChangeQuestionInput(event: React.ChangeEvent<HTMLInputElement>) {
        setQa(prev => ({
            ...prev,
            question: event.target?.value ?? '',
        }))
    }

    function onChangeAnswerInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQa(prev => ({
            ...prev,
            answer: event.target?.value ?? '',
        }))
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addQA(qa.question, qa.answer))
        setQa((prevState) => ({
            ...prevState,
            question: '',
            answer: ''
          }));
    }

    return(
        <form onSubmit={handleOnSubmit} className='form'>
            <h2 className='form__title'>QA Redux</h2>
            <div className='form__inputs-box'>
                <input className='form__input' placeholder='Ask a question...' type='text' value={qa.question} onChange={onChangeQuestionInput}/>
                <textarea className='form__textarea' rows={7} cols={70} placeholder='Provide an answer...' value={qa.answer} onChange={onChangeAnswerInput}/>
            </div>
            <div className='form__button-box'>
                <button className='form__button' type='submit'>Upload</button>
            </div>
        </form>
    )
}