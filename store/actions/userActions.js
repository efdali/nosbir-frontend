export const FETCHING_USER=FETCHING_USER;
export const fetchingUser=()=>({type:FETCHING_USER});

export const USER_REJECTED="USER_REJECTED";
export const userRejected=msg=>({type:USER_REJECTED,msg});

export const USER_SUCCESS="USER_SUCCESS";
export const userSuccess=(user,posts,total)=>({type:USER_SUCCESS,user,posts,total});

export const fetchUser=nick=>async(dispatch,getState,http) =>{

    dispatch(fetchingUser());

    await http.get("user.php",{
        params:{
            kadi:nick
        }
    })
    .then(res=>res.data)
    .then(reS=>{
        if(res.durum){
            dispatch(userSuccess(res.uye,res.post,res.toplamPost));
        }else{
            dispatch(userRejected(res.mesaj));
        }
    })
    .catch(err=>dispatch(userRejected(err)));
}