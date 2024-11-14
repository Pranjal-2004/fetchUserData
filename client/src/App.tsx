import React, { FC } from "react"
import HelloWorld from "./components/HelloWorld/HelloWorld"
import FetchComponent from "./components/FetchComponent/FetchComponent"


const App:FC = () => {
  return (
    <React.Fragment>
      <HelloWorld name="Pranjal" />
      <FetchComponent />
    </React.Fragment>
  )
}

export default App