export const FETCHING_POSTS = "FETCHING_POSTS";
export const fetchingPosts = () => ({ type: FETCHING_POSTS });

export const POSTS_FAIL = "POSTS_FAIL";
export const postsFail = msg => ({ type: POSTS_FAIL, msg });

export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const postsSuccess = (posts, total) => ({
  type: POSTS_SUCCESS,
  posts,
  total
});

export const fetchPosts = (group = "", page = 0) => async (
  dispatch,
  getState,
  http
) => {
  dispatch(fetchingPosts());
  const params = {
    s: page,
    topluluk: group ? group : null
  };

  await http
    .get("postlar.php", { params })
    .then(res => res.data)
    .then(res => {
      if (res.durum) dispatch(postsSuccess(res.postlar, res.toplam));
      else dispatch(postsFail(res.mesaj));
    })
    .catch(err => dispatch(postsFail(err)));
};
