import styled from "styled-components";
import { Colors } from "../../shared/colors";

export const LatestResearchCardWrapper = styled.div<{
  backgroundImage?: string;
}>((props) => ({
  height: "630px",
  backgroundImage: props.backgroundImage,
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

export const LatestRelated = styled.div((props) => ({
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

export const LatestResearch = styled.div((props) => ({
  padding: "4px 6px",
  fontSize: "8px",
  fontWeight: 700,
  backgroundColor: Colors.RedMagenta,
  color: Colors.White,
  textTransform: "uppercase",
  position: "absolute",
  right: "25px",
  top: "30px",
  letterSpacing: "1px",
}));

export const LatestHeadline = styled.p(() => ({
  color: Colors.White,
  fontSize: "24px",
  fontWeight: 400,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "0 25px",
  marginBottom: "20px",
}));

export const LatestSummary = styled.p((props) => ({
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

export const LatestFooter = styled.div(() => ({
  display: "flex",
  padding: "3px 25px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  marginBottom: "30px",
  alignItems: "center",
}));

export const ReadTheResearchText = styled.div((props) => ({
  display: "flex",
  color: Colors.White,
  margin: "0 12px",
  position: "relative",
  cursor: "pointer",
  "&:before": {
    content: "''",
    position: "absolute",
    width: "1px",
    height: "22px",
    right: "-13px",
    backgroundColor: "#5e5e5e",
  },
}));

export const LatestSource = styled.div((props) => ({
  display: "flex",
  color: Colors.White,
  marginLeft: "12px",
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

export const LatestDate = styled.p(() => ({
  display: "flex",
  color: Colors.White,
  padding: "0 25px",
  fontSize: "12px",
}));

export const LatestBookmarkOutlinedWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px auto;
`;
