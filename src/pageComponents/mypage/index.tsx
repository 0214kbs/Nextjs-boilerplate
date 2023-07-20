"use client";
import React, { useState } from "react";
import Opensidebar from "@/components/opensidebar";
// import useLoginStore from "@/stores/useLoginStore";
import { MypageLayout, EditPageLayout, ContentLayout, ProfileLayout, OthersLayout } from "./Mypage.layout";
import Miniprofile from "@/components/miniprofile";
import Editinfo from "@/components/editinfo";
import ResponsesList from "@/components/responsedList";

const Mypage = () => {
  const [currentCat, setCurrentCat] = useState(0);

  const renderContentOthers = () => {
    switch (currentCat) {
      case 1:
        return <ResponsesList />;
    }
  };
  return (
    <MypageLayout>
      <Opensidebar currentCat={currentCat} setCurrentCat={setCurrentCat}></Opensidebar>
      {currentCat === 0 && (
        <EditPageLayout>
          <Editinfo></Editinfo>
        </EditPageLayout>
      )}
      {currentCat !== 0 && (
        <ContentLayout>
          <ProfileLayout>
            <Miniprofile />
          </ProfileLayout>
          {renderContentOthers()}
        </ContentLayout>
      )}
    </MypageLayout>
  );
};

export default Mypage;
