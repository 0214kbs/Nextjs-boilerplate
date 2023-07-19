"use client";
import React from "react";
import useLoginStore from "@/stores/useLoginStore";

const Mypage = () => {
  const { user } = useLoginStore();

  return (
    <>
      <div>
        <h2> MyPage </h2>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Birth</td>
              <td>{user.birth}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mypage;
