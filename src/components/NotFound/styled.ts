import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const WrapperNotFound = styled(Box)`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 250px auto;
  padding: 0 10px;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-top: 100px;
    margin-bottom: 0;
  }
  @media (max-width: 375px) {
    margin: 60px auto 0;
  }
`;

export const LogoNotFound = styled.img`
  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
    margin-bottom: 15px;
  }
`;

export const BoxDescriptionNotFound = styled(Box)`
  width: 550px;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 300px;
  }
`;

export const TitleNotFound = styled(Typography)`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 48px;
  line-height: 1.1;
  @media (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const SubtitleNotFound = styled(Typography)`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const DescriptionNotFound = styled(Typography)`
  font-size: 20px;
  margin-bottom: 40px;
  :last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const LinkNavigation = styled(Link)`
  font-size: 20px;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;
