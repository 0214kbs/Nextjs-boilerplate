"use client";
import React, { useState } from "react";
import Opensidebar from "@/components/opensidebar"
// import useLoginStore from "@/stores/useLoginStore";
import { MypageLayout, ContentLayout, ProfileLayout, OthersLayout } from "./Mypage.layout";
import Miniprofile from "@/components/miniprofile";

const Mypage = () => {
  // const { user } = useLoginStore();

  return (
    <MypageLayout>
      <Opensidebar></Opensidebar>
      <ContentLayout>
        <ProfileLayout><Miniprofile /></ProfileLayout>
        <OthersLayout>test others</OthersLayout>
      </ContentLayout>
    </MypageLayout>
  )
};

export default Mypage;
