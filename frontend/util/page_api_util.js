export const createPage = data => (
  $.ajax({
    method: 'POST',
    url: 'api/pages',
    data
  })
);

export const editPage = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/pages/${data.page.id}`,
    data
  })
);
