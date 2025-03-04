import './App.css'

function App() {

  return (
    <div>
      <Text display="Hello World" />
      <Text display="Welcome" />
    </div>
  )
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
