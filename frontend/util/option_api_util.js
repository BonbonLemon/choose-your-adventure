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
    url: `api/options/${data.option.id}`,
    data
  })
)

export const deleteOption = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/options/${id}`
  })
)
