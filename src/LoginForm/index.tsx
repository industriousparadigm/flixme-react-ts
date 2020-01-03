import React, { useState } from 'react'

export interface Props {
  onEmailChange: (email: string) => void
  onPasswordChange: (password: string) => void
  onSubmit: (username: string, password: string) => void
}

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
    props.onEmailChange(value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
    props.onPasswordChange(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.onSubmit(email, password)
  }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   console.log({ email, password })
  //   resetForm()
  // }

  // const resetForm = () => {
  //   setEmail('')
  //   setPassword('')
  // }

  return (
    <form data-testid='login-form' onSubmit={handleSubmit}>
      <p>Please log in</p>
      <label htmlFor='email'>
        <input
          data-testid='email'
          type='text'
          placeholder='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor='password'>
        <input
          data-testid='password'
          type='text'
          placeholder='password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type='submit' data-testid='submit'>
        log in
      </button>
    </form>
  )
}

export default LoginForm
