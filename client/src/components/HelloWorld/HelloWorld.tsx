import { FC } from 'react'

interface HelloWorldProps {
  name: string;
}

const HelloWorld:FC<HelloWorldProps> = ({name}) => {
  return (
    <div>HelloWorld {name}</div>
  )
}

export default HelloWorld