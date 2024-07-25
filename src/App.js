import {Component} from 'react'
import Button from './components/Button'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    languageObj: languageGreetingsList[0],
  }

  changeLanguage = id => {
    const newlanguageObj = languageGreetingsList.filter(
      eachObj => eachObj.id === id,
    )
    this.setState({
      languageObj: newlanguageObj[0],
    })
  }

  render() {
    const {languageObj} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttonsUl">
          {languageGreetingsList.map(eachObj => (
            <Button
              key={eachObj.id}
              data={eachObj}
              changeLanguage={this.changeLanguage}
              isAcitve={eachObj.id === languageObj.id}
            />
          ))}
        </ul>
        <img
          className="img"
          src={languageObj.imageUrl}
          alt={languageObj.imageAltText}
        />
      </div>
    )
  }
}

export default App
