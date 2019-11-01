import http from "../../utils/http";
export const FETCHED_USER_POSTS = "FETCHED_USER_POSTS";
export const fetchedUserProfile = (profile, post, total) => {
  return { type: FETCHED_USER_POSTS, profile, post, total };
};
export const fetchUserPosts = nick => dispatch => {
  http
    .get("profil_goster.php", {
      params: {
        kadi: nick
      }
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(fetchedUserProfile(res.uye, res.post, res.toplamPost));
      } else {
        console.log(res.mesaj);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCHED_USER_ANSWERS="FETCHED_USER_ANSWERS";
export const fetchedUserAnswers=(profile,comments,totalComment)=>{
  return {type:FETCHED_USER_ANSWERS,profile,comments,totalComment};
}
export const fetchUserAnswers=nick=>dispatch=>{
  http.get("profil_yorum.php",{
    params:{
      kadi:nick
    }
  })
  .then(res=>res.data)
  .then(res=>{
    if(res.durum){
      dispatch(fetchedUserAnswers(res.uye,res.yorumlar,res.toplamYorum));
    }else{
      console.log(res.mesaj);
    }
  })
  .catch(err=>console.log(err));
}