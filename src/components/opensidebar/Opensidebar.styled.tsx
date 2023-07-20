'use client'
import styled from "styled-components";

const SidebarLayout = styled.div`
    /* position:sticky; */
    width: 180px;
    height: 100%;
    border-right: 2px solid #62656b;
    left: 0;
`;

const SidebarListLayout = styled.div`
    display: flex;
    height: 100%;
    margin-bottom: 10px;
    flex-direction: column;
`;

const StyledCategory = styled.div`
    margin : 15px 20px 15px 20px;    
    font-size: 15px;
    cursor :pointer;
`;
export { SidebarLayout, SidebarListLayout, StyledCategory };