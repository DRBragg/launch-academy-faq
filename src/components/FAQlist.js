import React from 'react';
import FAQ from './FAQ';

const FAQlist = (props) => {
  let questionsList = props.list.map((item) => {
    let ident = item.id
    let handleClick = () => props.viewAnswer(ident)
    let revealAnswer = (ident==props.answerState ? true : false)
    let classCheck = (revealAnswer ? "fa fa-minus-square fa-5x collapse" : "fa fa-plus-square fa-5x expand")

    return(
      <FAQ
        key={ident}
        question={item.question}
        answer={item.answer}
        viewAnswer={handleClick}
        answerState={revealAnswer}
        classType= {classCheck}
      />
    )
  })

  return(
    <ul>
      {questionsList}
    </ul>
  )
}

export default FAQlist
