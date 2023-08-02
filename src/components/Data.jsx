import {useState} from 'react'

{/* aprendendo sobre useState */}

const Data = () => {
  const [anotherNumber, setAnotherNumber] = useState(0)

  return (
    <div>
      <h2>useState</h2>
      <p>valor: {anotherNumber}</p>
      <button onClick={() => 
      setAnotherNumber(anotherNumber + 1)}>
        Mudar State +1
      </button>
      <button onClick={() => setAnotherNumber(0)}>
        Redefinir
      </button>
      <button onClick={() => setAnotherNumber(anotherNumber - 1)}>
        Mudar State -1
      </button>
    </div>
  )
}

export default Data