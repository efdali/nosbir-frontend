export const FETCHING_POPULARS = "FETCHING_POPULARS";
export const fetchingPopulars = () => ({ type: FETCHING_POPULARS });

export const POPULARS_FAIL = "FETCHING_POPULARS";
export const popularsFail = msg => ({ type: POPULARS_FAIL, msg });

export const POPULARS_SUCCESS = "POPULARS_SUCCESS";
export const popularsSuccess = populars => ({
  type: POPULARS_SUCCESS,
  populars
});

export const fetchPopulars = () => (dispatch, getState, http) => {
  dispatch(fetchingPopulars());

  http
    .get("populerler.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum)dispatch(popularsSuccess(res.post));
      else dispatch(popularsFail(res.mesaj));
    })
    .catch(err=>dispatch(popularsFail(err)));
};
