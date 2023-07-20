import styled from "styled-components";

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;

//   th,
//   td {
//     padding: 8px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//   }

//   th {
//     background-color: #f2f2f2;
//   }
// `;


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
  height: 300px;
  background-color: #d9d9d9;
  `

const OthersLayout = styled.div`
  display: flex;
  height: 100%;
  background-color: #F0F0F0;
`
export { MypageLayout, ContentLayout, ProfileLayout, OthersLayout };
