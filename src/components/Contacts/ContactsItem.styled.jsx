import styled from 'styled-components';

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: #5062c7;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    padding: 0px 5px;
    font-size: 12px;
  }
`;

export const Paragraph = styled.p`
  /* margin-bottom: 10px; */
  /* display: inline-flexbox; */
  /* margin-left: 15px; */

  @media screen and (max-width: 768px) {
    margin: 5px 0px;
  }
`;

export const DataWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
