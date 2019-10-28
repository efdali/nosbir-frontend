import React from "react";
import FormInput from "../components/FormInput";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LoggedAs from '../components/LoggedAs';
export default function NewPost() {
  return (
    <div className="form-container form-container2">
      <h1><i className="fas fa-fire-alt"></i> Yeni Nos</h1>
      <form>
        <FormInput name="Nos Başlığı" icon="comment-alt" />
        <FormInput name="Grup">
          <select className="default-input post-group-select">
            <option>Grup Seçiniz</option>
            <option>Dünya Halleri</option>
            <option>Sıcak Gündem</option>
            <option>Nofab</option>
            <option>Teknoloji</option>
            <option>Programlama</option>
            <option>Spor</option>
            <option>Genel</option>
          </select>
        </FormInput>
        <div className="post-ckeditor-panel">
            <label className="input-label">
                İçerik
                <span className="required">*</span>
            </label>
        <CKEditor
          editor={ClassicEditor}
          data="nos" 
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        </div>
        <LoggedAs/>
        <button className="default-btn default-btn2 mt">Yayınla</button>
      </form>
    </div>
  );
}
