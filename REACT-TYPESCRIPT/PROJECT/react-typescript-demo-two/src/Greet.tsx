type GreetProps={
    name:string
    messageCount:number
    isLogged :boolean
}

const Greet = (props:GreetProps) => {
  return (
    <>
    {props.isLogged && <div>
      <p>username: {props.name}</p>
      <p>messages: {props.messageCount}</p>
      </div>}
    </>
  )
}

export default Greet