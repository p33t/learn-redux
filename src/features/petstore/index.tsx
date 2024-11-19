import { useState } from "react"
import * as petApi from "../../store/petApi"
import styles from "../quotes/Quotes.module.css"


export const Ui = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10)
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    petApi.useFindPetsByStatusQuery({status: 'available'})

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Select the status:</h3>
        <select
          className={styles.select}
          value={numberOfQuotes}
          onChange={e => {
            setNumberOfQuotes(Number(e.target.value))
          }}
        >
          {[5, 10, 20].map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.map(({ id, name, status }) =>
          <p>{id} - {name} - {status}</p>
        )}
      </div>
    )
  }

  return null
}
