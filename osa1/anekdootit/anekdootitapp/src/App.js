import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = Array(7).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(votes)

  const handleRandomClick = () => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copyPoints = [ ...points ]
    copyPoints[selected] += 1
    setPoints(copyPoints)

  }

  return (
    <div>
      <h1>Anocdote of the day</h1>
      <div>
      {anecdotes[selected]}
      </div>
      <p>has {points[selected]} votes </p>
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleRandomClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <MostVotes points={points} anecdotes={anecdotes} />
    </div>
  )
}

const MostVotes = (props) => {
  const most = Math.max(...props.points)
  const i = props.points.indexOf(most)

    return (
      <div>
        <p>{props.anecdotes[i]}</p>
        <p>has votes {props.points[i]}</p>
      </div>
    )
  }


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App