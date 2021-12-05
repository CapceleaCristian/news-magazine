import styled from "styled-components";
import { Colors } from "../../shared/colors";

export const CardWrapper = styled.div<{ backgroundImage: string }>((props) => ({
  height: "425px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundImage: props.backgroundImage,
  borderRadius: "6px",
}));

export const NewsRelated = styled.div((props) => ({
  fontSize: "10px",
  padding: "4px 20px",
  position: "absolute",
  backgroundColor: Colors.Swamp,
  border: `2px solid ${Colors.White}`,
  borderRadius: "20px",
  left: "25px",
  top: "30px",
  color: Colors.White,
}));

export const NewsHeadline = styled.p(() => ({
  color: Colors.White,
  fontSize: "20px",
  fontWeight: 400,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "0 25px",
  marginBottom: "20px",
}));

export const NewsDateWrapper = styled.div(() => ({
  display: "flex",
}));

export const NewsSummary = styled.p((props) => ({
  color: Colors.White,
  fontSize: "14px",
  fontWeight: 400,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "0 25px",
  marginBottom: "20px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const NewsFooter = styled.div(() => ({
  display: "flex",
  padding: "3px 25px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  marginBottom: "30px",
  alignItems: "center",
}));

export const NewsSource = styled.div((props) => ({
  display: "flex",
  color: Colors.White,
  position: "relative",
  "&:before": {
    content: "''",
    position: "absolute",
    width: "1px",
    height: "22px",
    right: "-15px",
    backgroundColor: "#5e5e5e",
  },
}));

export const NewsDate = styled.p(() => ({
  display: "flex",
  color: Colors.White,
  padding: "0 25px",
  fontSize: "12px",
}));

export const NewsBookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px auto;
`;
