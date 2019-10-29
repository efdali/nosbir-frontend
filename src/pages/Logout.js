import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../store/actions/userAction";
import {toast} from 'react-toastify';
export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  dispatch(logout());
  toast.warning("Çıkış Yapıldı");
  history.goBack();
  return <div></div>;
}
