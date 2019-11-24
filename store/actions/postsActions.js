export const FETCHED_POSTS = 'FETCHED_POSTS';
export const REJECTED_POSTS = 'REJECTED_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';

export const fetchedPosts = (posts, total) => ({
  type: FETCHED_POSTS,
  posts,
  total,
});
export const rejectedPosts = msg => ({
  type: REJECTED_POSTS,
  msg,
});
export const fetchingPosts = () => ({
  type: FETCHING_POSTS,
});

export const fetchPosts = (group = '') => (dispatch, getState, http) => {
  dispatch(fetchingPosts());
  let params = {};
  if (group)
    params = {
      topluluk: group,
    };

  http
    .get('postlar.php', {
      params,
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(fetchedPosts(res.postlar, res.toplam));
      } else {
        dispatch(rejectedPosts(res.mesaj));
      }
    })
    .catch(err => dispatch(rejectedPosts(err)));
};
