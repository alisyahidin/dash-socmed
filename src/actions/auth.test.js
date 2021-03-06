import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  login,
  loginSuccess,
  loginFailure,
  logout,
} from './auth'

it('test login action creators', () => {
  const payload = {
    username: 'ali',
    email: 'ali@gmail.com'
  }
  expect(login(payload)).toEqual({type: LOGIN, payload})
})

it('test loginFailure action creators', () => {
  const message = 'Username and email not match'
  expect(loginFailure(message)).toEqual({type: LOGIN_FAILURE, payload: message})
})


it('test loginSuccess action creators', () => {
  const user = {
    username: 'ali',
    email: 'ali@gmail.com'
  }
  expect(loginSuccess(user)).toEqual({type: LOGIN_SUCCESS, payload: user})
})

it('test logout action creators', () => {
  expect(logout()).toEqual({type: LOGOUT})
})