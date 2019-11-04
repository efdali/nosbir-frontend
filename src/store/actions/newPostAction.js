
export const POPULERLERI_GETIR = "POPULERLERI_GETIR";
export const populerlerGeldi = populerler => {
  return { type: POPULERLERI_GETIR, populerler };
};
export const getir = () => (dispatch,getState,http) => {
  http
    .get("populerler.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(populerlerGeldi(res.post));
      } else {
      }
    })
    .catch(error => {});
};
