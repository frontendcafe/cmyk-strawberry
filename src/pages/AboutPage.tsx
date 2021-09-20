import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

const AboutPage: React.FC<any & RouteComponentProps<any>> = props => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const number = props.match.params.number

    if (number) {
      setMessage(`El parámetro es ${number}`)
    } else {
      setMessage('Sin parámetro!')
    }
  }, [props])

  return (
    <div>
      <p>{message}</p>
      <Link to="/">Ir a home page!</Link>

    </div>
  )
}

export default withRouter(AboutPage)
