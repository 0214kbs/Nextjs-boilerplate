import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const StyledMyPage = styled.div`
  margin: 100px auto;
  width: 420px;
  padding: 50px;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
`;
export { StyledTable, StyledMyPage };
