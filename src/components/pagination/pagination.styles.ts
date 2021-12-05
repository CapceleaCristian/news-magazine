import styled from "styled-components";
import { Colors } from "../../shared/colors";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  flex-wrap: wrap;
`;
export const PageWrapper = styled.div`
  display: flex;
`;
export const CurrentElementsInterval = styled.p`
  color: ${Colors.White};
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const TotalElementsCount = styled.p`
  margin-left: 7px;
  color: ${Colors.Gray36};
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const PageButton = styled.button`
  color: ${Colors.White};
  font-size: 10px;
  border-radius: 60px;
  background-color: ${Colors.Eclipse};
  border: none;
  width: 116px;
  height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Gray36};
  }
  &:disabled {
    background-color: ${Colors.Eclipse};
    cursor: not-allowed;
  }
`;

export const PageButtonsWrapper = styled.div(() => ({
  display: "flex",
  "> button:not(:first-child)": {
    marginLeft: "10px",
  },
}));
