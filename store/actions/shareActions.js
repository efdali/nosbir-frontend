import http from '../../utils/http';
export const shareTextPost = (title, text, groupId) => {

  return http.post("post_olustur.php",{
      baslik:title,
      icerik:text,
      toplulukId:groupId
  })
  .then(res=>res.data);

};

export const shareImagePost=(title,picture,groupId)=>{
    let formData=new FormData();
    formData.append("resim",picture);
    formData.append("baslik",title);
    formData.append("toplulukId",groupId);
    return http.post("post_resim_olustur.php",formData)
    .then(res=>res.data);
}