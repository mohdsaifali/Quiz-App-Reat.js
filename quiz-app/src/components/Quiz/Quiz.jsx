import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../Assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);

  const CheckAns = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add('correct');
      } else {
        e.target.classList.add('wrong');
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setLock(false);
      resetOptions();
    }
  };

  const resetOptions = () => {
    const options = document.querySelectorAll('li');
    options.forEach(option => {
      option.classList.remove('correct', 'wrong');
    });
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {data[index].question}</h2>
      <ul>
        <li onClick={(e) => CheckAns(e, 1)}>{data[index].option1}</li>
        <li onClick={(e) => CheckAns(e, 2)}>{data[index].option2}</li>
        <li onClick={(e) => CheckAns(e, 3)}>{data[index].option3}</li>
        <li onClick={(e) => CheckAns(e, 4)}>{data[index].option4}</li>
      </ul>
      <button onClick={nextQuestion}>Next</button>
      <div className="index">{index + 1} of {data.length} Questions</div>
    </div>
  );
};

export default Quiz;
