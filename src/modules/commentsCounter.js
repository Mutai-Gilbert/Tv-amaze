// modules/getComments.js

import api from './api.js';

const getComments = async (id) => {
  const response = await fetch(`${api.commentUrl}?item_id=${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data;
};

export default getComments();
