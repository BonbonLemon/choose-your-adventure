export const createOption = data => (
  $.ajax({
    method: 'POST',
    url: 'api/options',
    data
  })
);

export const editOption = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/adventures/${data.option.id}`,
    data
  })
)
