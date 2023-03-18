import api from './api.js';

const addLike = async (id) => {
  try {
    await fetch(api.likesUrl, {
      method: 'POST',
      body: JSON.stringify({ item_id: id }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.location.reload();
<<<<<<< HEAD
  } catch (error) { // eslint-disable-next-line
=======
  } catch (error) {
    // eslint-disable-next-line no-console
>>>>>>> 4a541125803084295767db962aaf60a7a4a8b4ec
    console.error(error);
  }
};

export default addLike;
