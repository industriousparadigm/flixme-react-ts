import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import LoginForm, { Props } from '../LoginForm'

function renderLoginForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onEmailChange() {
      return
    },
    onPasswordChange() {
      return
    },
    onSubmit() {
      return
    }
  }
  return render(<LoginForm {...defaultProps} {...props} />)
}

describe('<LoginForm />', () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    // setup
    const { findByTestId } = renderLoginForm()

    // act
    const loginForm = await findByTestId('login-form')

    // assert
    expect(loginForm).toHaveFormValues({
      email: '',
      password: ''
    })
  })

  test('should allow entering an email', async () => {
    const onEmailChange = jest.fn()
    const { findByTestId } = renderLoginForm({ onEmailChange })
    const email = await findByTestId('email')

    fireEvent.change(email, { target: { value: 'test' } })

    expect(onEmailChange).toHaveBeenCalledWith('test')
  })

  test('should allow entering a password', async () => {
    const onPasswordChange = jest.fn()
    const { findByTestId } = renderLoginForm({ onPasswordChange })
    const password = await findByTestId('password')

    fireEvent.change(password, { target: { value: 'password' } })

    expect(onPasswordChange).toHaveBeenCalledWith('password')
  })

  test('should submit the form with username, password, and remember', async () => {
    const onSubmit = jest.fn()
    const { findByTestId } = renderLoginForm({
      onSubmit
    })
    const email = await findByTestId('email')
    const password = await findByTestId('password')
    const submit = await findByTestId('submit')

    fireEvent.change(email, { target: { value: 'test' } })
    fireEvent.change(password, { target: { value: 'password' } })
    fireEvent.click(submit)

    expect(onSubmit).toHaveBeenCalledWith('test', 'password')
  })
})
