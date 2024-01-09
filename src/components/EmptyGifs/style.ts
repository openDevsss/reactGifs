import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const EmptyGifsWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyGifsMessage = styled.p`
  margin: 0;
  font-size: 20px;
`;
export const EmptyGifsImage = styled.img`
  max-width: 600px;
  width: 100%;
`;
export const EmptyGifsLink = styled(Link)`
  color: #5f3db5;
  text-decoration: none;
  font-size: 18xpx;
`;
