const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Content = ({ parts }) => {
  console.log(parts)
  const partList = parts.map(part => {
    return (
      <Part key={part.name} name={part.name} exercises={part.exercises} />

    )
  })

  return (
    <div>
      {partList}
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.name} {props.exercises}</p>
    </div>
  )

}
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App