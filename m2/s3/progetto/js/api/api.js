const bearerToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs";

const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";

export function getItem(id) {
  return fetch(`${apiUrl}${id}`, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export function getItems() {
  return fetch(apiUrl, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export function deleteItem(id) {
  return fetch(`${apiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Authorization: bearerToken,
    },
  });
}

export function createItem(details) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: bearerToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
}

export function updateItem(id, details) {
  return fetch(`${apiUrl}${id}`, {
    method: "PUT",
    headers: {
      Authorization: bearerToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
}
