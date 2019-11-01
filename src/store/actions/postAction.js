import http from "../../utils/http";
// import { toast } from "react-toastify";
export const SUCCESS_FETCH_POSTS = "SUCCESS_FETCH_POSTS";
export const SUCCESS_FETCH_GROUPS = "SUCCESS_FETCH_GROUPS";
export const SUCCESS_FETCH_BY_ID = "SUCCESS_FETCH_BY_ID";
export const SUCCESS_FETCH_MORE_COMMENTS = "SUCCESS_FETCH_MORE_COMMENTS";
export const SUCCESS_SHARE_COMMENT = "SUCCESS_SHARE_COMMENT";
export const SUCCESS_FETCH_MORE_POSTS = "SUCCESS_FETCH_MORE_POSTS";
export const successShareComment = (comment, user) => {
  const newComment = {
    text: comment,
    created_at: "Az Önce",
    user_id: user.id,
    nick: user.kadi,
    picture: user.resim
  };
  return { type: SUCCESS_SHARE_COMMENT, newComment };
};

export const shareComment = (postId, comment, user) => dispatch => {
  http
    .post("yorum_ekle.php", {
      icerik: comment,
      postId
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(successShareComment(comment, user));
      } else {
      }
    })
    .catch(err => {});
};
export const successFetchMoreComments = comments => {
  return { type: SUCCESS_FETCH_MORE_COMMENTS, comments };
};

export const fetchMoreComments = (id, s) => dispatch => {
  http
    .get("yorum_listele.php", {
      params: {
        s,
        id
      }
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(successFetchMoreComments(res.yorum));
      } else {
        // toast.warn(res.mesaj);
      }
    })
    .catch(error => {});
};

export const fetchPostById = title => dispatch => {
  http
    .get("post_detay.php", {
      params: {
        link: title
      }
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(successFetchById(res.post, res.yorum));
      } else {
        // toast.warn(res.mesaj);
      }
    })
    .catch(error => {
      // toast.warn(error);
    });
};
export const successFetchById = (post, yorum) => {
  return {
    type: SUCCESS_FETCH_BY_ID,
    data: post,
    comments: yorum.data,
    totalComments: yorum.sayi
  };
};
export const fetchPosts = (groupName, page) => dispatch => {
  http
    .get("postlar.php", {
      params: {
        topluluk: groupName,
        s: page
      }
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        if (page > 0) dispatch(successFetchMorePosts(res.postlar, res.toplam));
        else dispatch(successPostsFetch(res.postlar, res.toplam));
      } else {
      }
    })
    .catch(error => {});
};
export const successFetchMorePosts = (posts, total) => {
  return { type: SUCCESS_FETCH_MORE_POSTS, posts, total };
};
export const successPostsFetch = (posts, total) => {
  return { type: SUCCESS_FETCH_POSTS, posts, total };
};

export const fetchGroups = () => dispatch => {
  http
    .get("gruplar.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(successGroupsFetch(res.gruplar));
      } else {
      }
    })
    .catch(error => {
      // toast.error(error);
    });
};
export const successGroupsFetch = groups => {
  return { type: SUCCESS_FETCH_GROUPS, groups };
};
