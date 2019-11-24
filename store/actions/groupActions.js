export const FETCHED_GROUPS = 'FETCHED_GROUPS';
export const REJECTED_GROUPS = 'REJECTED_GROUPS';
export const FETCHING_GROUPS = 'FETCHING_GROUPS';

export const fetchedGroups = groups => ({
  type: FETCHED_GROUPS,
  groups,
});
export const rejectedGroups = msg => ({
  type: REJECTED_GROUPS,
  msg,
});
export const fetchingGroups = () => ({
  type: FETCHING_GROUPS,
});
export const fetchGroups = () => (dispatch, getState, http) => {
  dispatch(fetchingGroups());
  http
    .get('gruplar.php')
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(fetchedGroups(res.gruplar));
      } else {
        dispatch(rejectedGroups(res.mesaj));
      }
    })
    .catch(err => dispatch(rejectedGroups(err)));
};
