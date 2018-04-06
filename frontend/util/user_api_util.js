export const fetchUser = username => (
  $.ajax({
    method: 'GET',
    url: `api/user/`,
    data: {user: {username: username}}
  })
);
