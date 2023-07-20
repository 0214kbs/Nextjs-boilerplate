'use client'
import React, { useState } from "react";
import { SidebarLayout, SidebarListLayout, StyledCategory } from "./Opensidebar.styled";

const Opensidebar = () => {

    const catLists = [
        { id: 0, name: "회원 정보" },
        { id: 1, name: "응답한 설문" },
        { id: 2, name: "만든 설문" },
        { id: 3, name: "당첨된 상품" },
        { id: 4, name: "포인트 사용" },
    ]

    const [currentCat, setCurrentCat] = useState(0);
    const handleClickCatagory = (cat: any) => {
        setCurrentCat(cat);
    }

    return (
        <div>
            <SidebarLayout>

                <SidebarListLayout>
                    {catLists.map((el, index) => (
                        <StyledCategory key={el.id} style={index === currentCat ? { color: '#6698f7' } : { color: 'black' }} onClick={() => handleClickCatagory(index)}>
                            {el.name}
                        </StyledCategory>
                    ))}

                </SidebarListLayout>
            </SidebarLayout>
        </div>
    );
};

export default Opensidebar;