// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isButtonShow: false}

  getOperationButton = () => {
    const {isButtonShow} = this.state
    const image = isButtonShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = isButtonShow ? 'minus' : 'plus'
    return <img src={image} alt={imgAlt} />
  }

  onChangeOperation = () => {
    this.setState(prevState => ({isButtonShow: !prevState.isButtonShow}))
  }

  renderAnswersAboutEachFaq = () => {
    const {myQuestion} = this.props
    const {answerText} = myQuestion
    const {isButtonShow} = this.state

    if (isButtonShow) {
      return (
        <div className="div">
          <hr className="separator" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {myQuestion} = this.props
    const {questionText} = myQuestion
    return (
      <li className="list-items">
        <div>
          <h1>{questionText}</h1>
          <button
            type="button"
            className="btn-op"
            onClick={this.onChangeOperation}
          >
            {this.getOperationButton()}
          </button>
        </div>
        {this.renderAnswersAboutEachFaq()}
      </li>
    )
  }
}
export default FaqItem
