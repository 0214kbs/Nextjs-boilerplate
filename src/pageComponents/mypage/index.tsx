"use client";
import React, { useState } from "react";
import Opensidebar from "./components/opensidebar";
import { MypageLayout, EditPageLayout, ContentLayout, ProfileLayout, OthersLayout } from "./Mypage.layout";
import Miniprofile from "./components/miniprofile";
import Editinfo from "./components/editinfo";
import ResponsesList from "./components/responsedList";
import CreatedList from "./components/createdList";

const Mypage = () => {
  const [currentCat, setCurrentCat] = useState(0);
  const catLists = [
    { id: 0, name: "회원 정보" },
    { id: 1, name: "응답한 설문" },
    { id: 2, name: "만든 설문" },
    { id: 3, name: "당첨된 상품" },
    { id: 4, name: "포인트 사용" },
  ];

  const handleClickCategory = (cat: any) => {
    setCurrentCat(cat);
  };

  const renderContentOthers = () => {
    switch (currentCat) {
      case 1:
        return <ResponsesList />;
      case 2:
        return <CreatedList />;
    }
  };
  return (
    <MypageLayout>
      <Opensidebar currentCat={currentCat} catLists={catLists} handleClickCategory={handleClickCategory}></Opensidebar>
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
