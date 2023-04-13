import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedBack = good + neutral + bad
  const averageFeedBack = (good-bad)/totalFeedBack
  const positiveFeedBack = (good/totalFeedBack)*100
  if (totalFeedBack == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={totalFeedBack} />
      <StatisticLine text="average" value ={averageFeedBack} />
      <StatisticLine text="positive" value ={positiveFeedBack} percent="%"/>
    </table>  
  )
}

const StatisticLine = (props) => {
  return (
  <tbody>
    <tr>
      <td>{props.text} {props.value} {props.percent}</td>
    </tr>
  </tbody>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
