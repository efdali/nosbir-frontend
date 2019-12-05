export const FETCHING_COMMENTS = "FETCHING_COMMENTS";
export const fetchingComments = () => ({ type: FETCHING_COMMENTS });

export const COMMENTS_FAIL = "COMMENTS_FAIL";
export const commentsFail = msg => ({ type: COMMENTS_FAIL, msg });

export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
export const commentsSuccess = (comments, total) => ({
  type: COMMENTS_SUCCESS,
  comments,
  total
});

export const fetchPostDetails = seo => async (dispatch, getState, http) => {
  const post = await http
    .get("post_detay.php", {
      params: {
        link: seo
      }
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(commentsSuccess(res.yorum.data, res.yorum.sayi));
        return res.post;
      } else {
        dispatch(commentsFail(res.mesaj));
        return {};
      }
    })
    .catch(err => commentsFail(err));
  return post;
};

export const ADD_COMMENT="ADD_COMMENT";
export const addComment=newComment=>({type:ADD_COMMENT,newComment});
export const shareComment = (comment, postId) => (dispatch, getState, http) => {
  http
    .post("yorum_ekle.php", {
      icerik: comment,
      postId: postId
    })
    .then(res => res.data)
    .then(res => {
      console.log(res);
      if (res.durum) {
        const newComment = {
          text: comment,
          created_at: Date.now(),
          nick: getState().auth.user.kadi
        };
        dispatch(addComment(newComment));
      }else{
        console.log("hata");
      }
    })
    .catch(err=>console.log(err));
};
