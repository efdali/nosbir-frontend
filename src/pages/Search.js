import React from "react";
import {Route,Switch,useParams} from 'react-router-dom';
import PostList from "../layouts/PostList";
import CommentList from "../layouts/CommentList";
import UserList from '../layouts/UserList';
import GroupList from "../layouts/GroupList";
export default function Search() {
    const {query} = useParams();
    console.log(query);
  return (
    <React.Fragment>
      <div className="search-input-panel post-container">
        <div className="inputs">
          <input
            type="text"
            placeholder="aranacak kelimeler..."
            className="default-input"
          />
          <select className="post-group-select">
            <option>Kullanıcılar</option>
            <option>Gruplar</option>
            <option>Noslar</option>
            <option>Cevaplar</option>
          </select>
        </div>
        <button className="default-btn mt-2 default-btn2">Search</button>
      </div>

      <Switch>
          <Route path={`/arama/${query}/gruplar`} component={GroupList}/>
          <Route path={`/arama/${query}/noslar`} component={PostList}/>
          <Route path={`/arama/${query}/cevaplar`} component={CommentList}/>
          <Route component={UserList}/>
      </Switch>
    </React.Fragment>
  );
}
