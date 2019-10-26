import React from 'react'
import Comment from '../components/Comment';
export default function CommentList() {
    return (
        <div className="comment-list-container post-container">
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}
