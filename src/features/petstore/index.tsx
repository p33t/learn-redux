import { useState } from "react"
import * as petApi from "../../store/petApi"
import styles from "../quotes/Quotes.module.css"

import type { Pet } from "../../store/petApi"

type PetStatus =  Pet['status']
type PetStatusArg = PetStatus | undefined

export const Ui = () => {
  const [petStatus, setPetStatus] = useState<PetStatusArg>("available")
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    petApi.useFindPetsByStatusQuery({status: petStatus})

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
          value={petStatus}
          onChange={e => {
            setPetStatus(e.target.value as PetStatusArg)
          }}
        >
          {/*Need to hard-code options because cannot iterate string union type*/}
          {["available", "pending", "sold"].map(option => (
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
