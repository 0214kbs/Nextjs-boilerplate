import styled from "styled-components";

const MypageLayout = styled.div`
  display: flex;
  min-height: 94vh;
`;

const EditPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileLayout = styled.div`
  display: flex;
  height: 170px;
  background-color: #d9d9d9;
`;

const OthersLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: white;
`;
export { MypageLayout, EditPageLayout, ContentLayout, ProfileLayout, OthersLayout };
