export const fetchAdventures = data => (
  $.ajax({
    method: 'GET',
    url: 'api/adventures',
    data
  })
);

export const createAdventure = data => (
  $.ajax({
    method: 'POST',
    url: 'api/adventures',
    data
  })
)
