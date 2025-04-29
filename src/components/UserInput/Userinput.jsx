import React from 'react';
import style from './Userinput.module.css';
import { useDispatch } from 'react-redux';
import { setMin, setMax, setCount, setTimer } from '../../store/slices/inputSlice';
import { useNavigate } from 'react-router-dom';

export default function Userinput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getMin = (e) => {
    dispatch(setMin(e.target.value));
  };

  const getMax = (e) => {
    dispatch(setMax(e.target.value));
  };

  const getCount = (e) => {
    dispatch(setCount(e.target.value));
  };

  const getTimer = (e) => {
    dispatch(setTimer(e.target.value));
  };

  const startExam = (e) => {
    e.preventDefault();
    navigate('/exam');
  };

  return (
    <div className={style.wrapper_input}>
      <form className={style.user_input}>
        <input type="text" placeholder="Enter Min" onChange={getMin} />
        <input type="text" placeholder="Enter Max" onChange={getMax} />
        <input type="text" placeholder="Enter Count" onChange={getCount} />
        <input
          type="number"
          placeholder="Enter Timer (in minutes)"
          onChange={getTimer}
          className={style.time_input}
        />
        <button onClick={startExam} className={style.btn}>
          Start Exam
        </button>
      </form>
    </div>
  );
}
