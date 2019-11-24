import React from 'react';

const NewPostForm = () => (
  <div className="new-post-form">
    <form>
      <textarea
        className="post-content"
        placeholder="ne düşünüyorsun?"
      ></textarea>
      <ul className="button-container">
        <li>
          <button>durum</button>
          <img src="/status-icon.png" alt="post" width="32" height="32" />
        </li>
        <li>
          <button>görsel</button>
          <img src="/post-picture.png" alt="post" width="32" height="32" />
        </li>
        <li>
          <button>link</button>
          <img src="/post-link.png" alt="post" width="32" height="32" />
        </li>
        <li>
          <button className="share-btn">paylaş</button>
        </li>
      </ul>
    </form>
  </div>
);

export default NewPostForm;
