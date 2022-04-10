import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({data}) => {
    dispatch(setPizzas(data));
  });
};
// l8 2.11.50

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});
