import { useState } from 'react';

const StatestikkApp = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [avrage, setAvrage] = useState(0)
  const [positiv, setPositiv] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setTotal(total +1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total +1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setTotal(total +1)
  }

  return (
    <div>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      {good > 0 && <p>good {good}</p>}

      {neutral > 0 && <p>neutral {neutral}</p>}
      {bad > 0 && <p>bad {bad}</p>}
      {total > 0 && <p>total {total}</p>}
      {avrage > 0 && <p>average {(total / 3).toFixed(0)}</p>}
      {(good / total * 100) > 0 && <p>positive {(good / total * 100).toFixed(0)} %</p>}

    </div>
  )
}

export default StatestikkApp;
