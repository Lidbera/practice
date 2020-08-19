import React, { useEffect } from "react";
import Users from "../components/Users";
import { getUsers } from "../modules/users";
import { connect } from "react-redux";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) return; // users가 이미 유효하다면 요청하지 않음
    getUsers();
  }, [getUsers, users]);
  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      users: state.users.users,
    };
  },
  { getUsers }
)(UsersContainer);
