export const fetchAdventures = data => (
  $.ajax({
    method: 'GET',
    url: 'api/adventures',
    data
  })
);

export const fetchAdventure = id => (
  $.ajax({
    method: 'GET',
    url: `api/adventures/${id}`
  })
);

export const createAdventure = data => (
  $.ajax({
    method: 'POST',
    url: 'api/adventures',
    data
  })
);

export const editAdventure = id => (
  $.ajax({
    method: 'PATCH',
    url: `api/adventures/${id}`
  })
);
