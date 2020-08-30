import { login, logout } from '../../actions/auth';
import authReducer from '../../reducers/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('should generate login action object', () => {
  const loginAction = login('asfasdfaf');
  expect(loginAction).toEqual({
    type: 'LOGIN',
    uid: 'asfasdfaf'
  });
});

test('should generate logout action object', () => {
  const logoutAction = logout();
  expect(logoutAction).toEqual({
    type: 'LOGOUT'
  });
});

test('should save uid to state when login', () => {
  const data = { uid: 'asfasdfaf' };
  const loginAction = login(data.uid);
  const state = authReducer(data, loginAction);
  expect(state).toEqual(data);
});

test('should save uid to state when login', () => {
  const data = { uid: 'asfasdfaf' };
  const logoutAction = logout();
  const state = authReducer(data, logoutAction);
  expect(state).toEqual({});
});