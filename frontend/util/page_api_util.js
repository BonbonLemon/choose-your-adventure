export const createPage = data => (
  $.ajax({
    method: 'POST',
    url: 'api/pages',
    data
  })
);
