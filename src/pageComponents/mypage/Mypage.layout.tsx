import styled from "styled-components";

const MypageLayout = styled.div`
  display: flex;
  min-height: 94vh;
`
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileLayout = styled.div`
  display: flex;
  height: 170px;
  background-color: #d9d9d9;
  `

const OthersLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #F0F0F0;
`
export { MypageLayout, ContentLayout, ProfileLayout, OthersLayout };
