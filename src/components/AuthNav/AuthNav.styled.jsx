import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  height: 45px;

  &.active {
    color: white;
    background-color: #5062c7;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }

  @media screen and (max-width: 320px) {
    height: 25px;
    font-size: 12px;
    padding: 4px 8px;
  }
`;
