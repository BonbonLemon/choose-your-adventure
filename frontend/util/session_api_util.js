export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  })
);

export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {user}
  })
);

export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
