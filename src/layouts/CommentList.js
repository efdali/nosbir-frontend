import React, { useState } from "react";
import Comment from "../components/Comment";
import LoadMoreButton from "../components/LoadMoreButton";
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import {fetchMoreComments} from '../store/actions/postAction';
import {useParams} from 'react-router-dom';
export default function CommentList(props) {
  const { comments, total } = props;
  const [page, setPage] = useState(1);
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const {title}=useParams();
  const loadMoreHandler=()=>{
    setPage(page+1);
    setLoading(true);
    dispatch(fetchMoreComments(title,page));
    setLoading(false);
  }
  if (comments.length <= 0) {
    return (
      <div className="alert alert-warning">
        Henüz Yorum Yapılmamış.İlk yorum yapan sen ol.
      </div>
    );
  }
  return (
    <div className="comment-list-container">
      {comments.map((c, i) => (
        <Comment comment={c} key={i} />
      ))}
      {total > page ? (
        <LoadMoreButton text="Daha Fazla Cevap" className="load-more-comment" onClick={loadMoreHandler} loading={loading}/>
      ) : (
        ""
      )}
    </div>
  );
}
CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  total: PropTypes.number
};
CommentList.defaultProps = {
  comments:[],
  total: 1
};
