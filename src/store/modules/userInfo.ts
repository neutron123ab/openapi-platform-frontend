import { defineStore } from "pinia";
import { UserType } from "../../../types/user";

export const useUserInfoStore = defineStore("userInfoStore", () => {
  let currentUser: UserType;
  const setUserInfo = (user: UserType) => {
    currentUser = user;
  };

  const getCurrentUser = (): UserType => {
    return currentUser;
  };
  return { currentUser, setUserInfo, getCurrentUser };
});
