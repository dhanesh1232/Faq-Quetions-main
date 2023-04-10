// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {myFaqsList} = props
  return (
    <div className="bg-container">
      <div className="card">
        <h1 className="header">FAQs</h1>
        <ul>
          {myFaqsList.map(eachFaq => (
            <FaqItem myQuestion={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
