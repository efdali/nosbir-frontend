import React from "react";
import FormInput from "../components/FormInput";
import LoggedAs from "../components/LoggedAs";
import { connect } from "react-redux";
import { fetchGroups } from "../store/actions/postAction";
import Errors from "../components/Errors";
import http from '../utils/http';
import { toast } from "react-toastify";
import PostEditor from "../components/PostEditor";
import {EditorState} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
class NewPost extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      editorState: EditorState.createEmpty(),
      group: 0,
      errors: []
    };

    this.onChange=(editorState)=>this.setState({editorState});
  }

  addPostHandler = e => {
    e.preventDefault();
    const { title, group } = this.state;
    const post=stateToHTML(this.state.editorState.getCurrentContent());
    const errors = [];
    if (!post || !title || group === 0) {
      errors.push("Bütün alanları doldurmanız gerekiyor.");
    }

    if (title.length <= 6 || title.length >= 255) {
      errors.push("Başlık 7 karakterden kısa 255 karakterden uzun olamaz.");
    }
    if (post.length < 22) {
      errors.push("İçerik 15 karakterden kısa olamaz.");
    }

    this.setState({ errors });
    if (errors.length > 0) {
      return false;
    }
    http.post("post_olustur.php",{
      baslik:title,
      icerik:post,
      toplulukId:group
    })
    .then(res=>res.data)
    .then(res=>{
      toast.success(res.mesaj);
      if(res.durum){
        this.props.history.push(`/baslik/${res.baslik}`);
      }else{
        console.log(res.mesaj);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  };

  render() {
    return (
      <div className="form-container form-container2">
        <h1>
          <i className="fas fa-fire-alt"></i> Yeni Nos
        </h1>
        <Errors errors={this.state.errors} />
        <form onSubmit={this.addPostHandler}>
          <FormInput
            name="Nos Başlığı"
            icon="comment-alt"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          <FormInput name="Grup">
            <select
              className="default-input post-group-select"
              value={this.state.group}
              onChange={e => this.setState({ group: e.target.value })}
            >
              <option value="0">Grup Seçiniz</option>
              {this.props.groups.map((g, i) => (
                <option value={g.group_id} key={i}>
                  {g.name}
                </option>
              ))}
            </select>
          </FormInput>
          <div className="post-ckeditor-panel">
            <label className="input-label">
              İçerik
              <span className="required">*</span>
            </label>
            <PostEditor editorState={this.state.editorState} onChange={this.onChange}/>
          </div>
          <LoggedAs />
          <button
            className="default-btn default-btn2 mt"
            onClick={this.addPostHandler}
          >
            Yayınla
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  groups: state.postReducer.groups
});
export default connect(
  mapStateToProps,
  { fetchGroups }
)(NewPost);
