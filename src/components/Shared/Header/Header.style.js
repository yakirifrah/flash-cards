import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  overflow: hidden;
  background-color: #6c7acb;

  ul {
    list-style-type: none;
    display: flex;
    padding: 13px;

    li {
      margin-left: 13px;

      .selected {
        background-color: #55cb33 !important;
        color: #ffffff;
      }
    }
  }
`;
