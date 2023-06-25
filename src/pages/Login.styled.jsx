import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 7px 10px;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: #4497a9;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5px 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const LoginWrapper = styled.section`
  width: 500px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(0, 0, 0, 0.57);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 320px) {
    margin: 10px;
    padding: 20px;
  }
`;
