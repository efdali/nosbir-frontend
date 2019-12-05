export const FETCHING_GROUPS = "FETCHING_GROUPS";
export const fetchingGroups = () => ({ type: FETCHING_GROUPS });

export const GROUPS_FAIL = "GROUPS_FAIL";
export const groupsFail = msg => ({ type: GROUPS_FAIL, msg });

export const GROUPS_SUCCESS = "GROUPS_SUCCESS";
export const groupsSuccess = groups => ({ type: GROUPS_SUCCESS, groups });

export const fetchGroups = () => (dispatch, getState, http) => {
  dispatch(fetchingGroups());
  http
    .get("gruplar.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum) dispatch(groupsSuccess(res.gruplar));
      else dispatch(groupsFail(res.mesaj));
    })
    .catch(err => dispatch(groupsFail(err)));

};