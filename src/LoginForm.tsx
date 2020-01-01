import React, { useState } from 'react'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ email, password })
    resetForm()
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <form>
      <p>Please log in</p>
      <label htmlFor='email'>
        <input
          type='text'
          placeholder='email'
          name='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor='password'>
        <input
          type='text'
          placeholder='password'
          name='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button onClick={handleSubmit}>log in</button>
    </form>
  )
}

export default LoginForm
