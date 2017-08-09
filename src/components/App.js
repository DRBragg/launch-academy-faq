import React from 'react';
import FAQlist from './FAQlist';
import FAQ from './FAQ'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.classType = "fa fa-plus-square fa-5x expand"
    this.state = {
      answerId: null
    }
    this.viewAnswer = this.viewAnswer.bind(this)
  }



  viewAnswer(id) {
    this.setState(this.state.answerId==id ? {answerId: null} : {answerId: id})
  }


  render() {
    let header = 'We\'re Here To Help';

    return(
      <div>
        <h1>{header}</h1>
        <FAQlist list={this.props.data} viewAnswer={this.viewAnswer} classType={this.classType} answerState={this.state.answerId}/>
      </div>
    )
  }
}

export default App;
