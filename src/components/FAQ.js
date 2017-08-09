import React from 'react';

const FAQ = (props) => {
  return(
    <li>
      <div className="faq-question">
        <button onClick={props.viewAnswer}><i className={props.classType}></i></button> <div className="question">{props.question}</div>
      </div>
      {props.answerState && <p className="answer">{props.answer}</p>}
      <hr />
    </li>
  )
}

export default FAQ
