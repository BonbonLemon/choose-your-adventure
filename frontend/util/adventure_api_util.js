export const fetchAdventures = data => (
  $.ajax({
    method: 'GET',
    url: 'api/adventures',
    data
  })
);
