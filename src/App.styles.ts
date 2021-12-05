import styled from "styled-components";
import { Colors } from "./shared/colors";

export const Header = styled.div<{ flexDirection?: "column" }>((props) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  ...(props.flexDirection && { flexDirection: props.flexDirection }),
}));

export const InputWrapper = styled.div<{ marginBottom?: string }>((props) => ({
  display: "flex",
  alignItems: "center",
  ...(props.marginBottom && { marginBottom: props.marginBottom }),
}));

export const Input = styled.input<{ width?: string }>((props) => ({
  width: "200px",
  padding: "0 5px",
  ...(props.width && { width: props.width }),
  "&:focus": {
    outline: "none",
  },
}));

export const LoadingText = styled.div`
  font-size: 30px;
  color: ${Colors.White};
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 40px 30px;
  background-color: ${Colors.Swamp};
`;

export const PageSwitcherWrapper = styled.div`
  display: flex;
  padding: 25px 0;
  > div:first-child {
    margin-right: 20px;
  }
`;

export const PageSwitcherLink = styled.div<{ opacity?: number }>((props) => ({
  cursor: "pointer",
  fontSize: "20px",
  color: Colors.White,
  ...(props.opacity && { opacity: props.opacity }),
}));

export const NoBookmarsText = styled.div`
  font-size: 30px;
  color: ${Colors.White};
`;

export const Icon = styled.span`
  display: flex;
`;
