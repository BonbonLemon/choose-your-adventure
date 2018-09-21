export const fetchPages = (adventureId) => (
  $.ajax({
    method: 'GET',
    url: 'api/pages',
    data: {adventure_id: adventureId}
  })
);

export const fetchPage = id => (
  $.ajax({
    method: 'GET',
    url: `api/pages/${id}`
  })
);

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

export const deletePage = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/pages/${id}`
  })
)
