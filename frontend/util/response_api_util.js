export const fetchResponses = () => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/responses'
  });
};

export const fetchResponse = (responseId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/responses/${responseId}`
  });
};

export const createResponse = (response) => {
  return $.ajax({
    method: 'POST',
    url: `api/responses`,
    data: { response: response }
  });
};

export const updateResponse = (response) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/responses/${response.id}`,
    data: { response: response }
  });
};

export const deleteResponse = (responseId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/responses/${responseId}`
  });
};