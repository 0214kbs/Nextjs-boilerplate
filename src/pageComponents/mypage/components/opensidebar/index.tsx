"use client";
import React, { useState } from "react";
import { SidebarLayout, SidebarListLayout, StyledCategory } from "./Opensidebar.styled";

const Opensidebar = ({ catLists, currentCat, handleClickCategory }: any) => {
  return (
    <div>
      <SidebarLayout>
        <SidebarListLayout>
          {catLists.map((el: any, index: any) => (
            <StyledCategory
              key={el.id}
              style={index === currentCat ? { color: "#6698f7" } : { color: "black" }}
              onClick={() => handleClickCategory(index)}
            >
              {el.name}
            </StyledCategory>
          ))}
        </SidebarListLayout>
      </SidebarLayout>
    </div>
  );
};

export default Opensidebar;
