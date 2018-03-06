export const createOption = data => (
  $.ajax({
    method: 'POST',
    url: 'api/options',
    data
  })
);
