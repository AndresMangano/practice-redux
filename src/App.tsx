import { QaCard } from './qa/QaCard';
import './App.css'
import QaForm from './qa/QaForm';
import { useTypedSelector } from './state/reducers';
import { useDispatch } from 'react-redux';
import { removeQA } from './state/action-creators';

function App() { 
  const arrayQA = useTypedSelector((state) => state.qa.qaArray) 
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="container__form">
        <QaForm />
      </div>
      <div className='container__cards'>
        {arrayQA.map((item, index) => (
          <QaCard key={item.question} question={item.question} answer={item.answer} onDelete={() => dispatch(removeQA(index))}/>
        ))}
      </div>
    </div>
  );
}

export default App;
