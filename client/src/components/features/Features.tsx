
import { Feature } from '../../containers'
import './_features.scss'

const featuresData = [
  {
    title: 'New Possibilities',
    text: 'Over 175 billion parameters determining the relationships (100 times more than previous version).'
  },
  {
    title: 'New Experience',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, commodi.'
  },
  {
    title: 'Improving the reality',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, commodi.'
  },
  {
    title: 'Lower company costs ',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, commodi.'
  },
]

export const Features = () => {


  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient-text">The future depends on what we do in the present.</h1>
        <p>The future starts today, join us!</p>

      </div>
      <div className="gpt3__features-container">
        {
          featuresData.map((item, index) => (
            <div key={index}>
              <Feature title={item.title} text={item.text} />
            </div>
          ))
        }
      </div>
    </div >
  )
}