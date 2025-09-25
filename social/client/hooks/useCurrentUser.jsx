import React from "react";
import { useEffect } from "react";
import { getCurrentUser } from "../src/apiCalls/authCalls";
import { useDispatch } from "react-redux";
import { setUserData } from "../src/redux/userSclice";

function useCurrentUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await getCurrentUser();
      dispatch(setUserData(data));
    }
    fetchData();
  }, []);
}
export default useCurrentUser;
