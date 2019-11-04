export const FETCHED_POPULAR_POST = "FETCHED_POPULAR_POST";
export const START_FETCH_POPULAR_POST = "START_FETCH_POPULAR_POST";
export const REJECT_FETCH_POPULAR_POST = "REJECT_FETCH_POPULAR_POST";
export const fetchedPopularPost = popular => {
  return { type: FETCHED_POPULAR_POST, popular };
};
export const startFetchPopularPost = () => {
  return { type: START_FETCH_POPULAR_POST };
};
export const rejectFetchPopularPost = failMessage => {
  return { type: REJECT_FETCH_POPULAR_POST, failMessage };
};
export const fetchPopularPosts = () => (dispatch,getState,http) => {
  dispatch(startFetchPopularPost());
  http
    .get("populerler.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(fetchedPopularPost(res.post));
      } else {
        dispatch(rejectFetchPopularPost(res.mesaj));
      }
    })
    .catch(error => {
      dispatch(rejectFetchPopularPost(error));
    });
};
