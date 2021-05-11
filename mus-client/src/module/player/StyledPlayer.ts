import styled from "styled-components";

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #B8ABC4;
  background-color: #fff;
  z-index: 2;
`;

export const StyledTrackWrapper = styled.div`
  width: 250px;
`;

export const StyledPlayerControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPlayerMainControls = styled.div`
  margin: 10px 0;
`;

export const StyledPlayerIcon = styled.span`
  font-size: 30px;
  cursor: pointer;
  margin: 0 8px;
`;

export const StyledProgressBar = styled.div`
  width: 500px;
  height: 8px;
  border-radius: 18px;
  background-color: #B8ABC4;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const StyledProgress = styled.div`
  height: 8px;
  border-radius: 18px;
  background-color: black;
`;

export const StyledPlayerTools = styled.div`
  min-width: 200px;
`;

export const StyledPlayerVolume= styled.div`
  width: 100px;
  height: 8px;
  cursor: pointer;
  border-radius: 18px;
  background: #B8ABC4;
`;

export const StyledPlayerVolumeProgress = styled.div`
  height: 8px;
  border-radius: 18px;
  background: black;
`;