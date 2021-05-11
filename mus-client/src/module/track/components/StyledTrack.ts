import styled from "styled-components";

export const StyledTrack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 25px 15px;
  border: 0;
  border-radius: 17px;
  padding: 10px;
  &:hover {
    background: #cccccc;
  }
`;

export const StyledTrackSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledLike = styled.span`
  cursor: pointer;
  font-size: 28px;
  color: #B8ABC4;
`;

export const StyledUnLike = styled.span`
  cursor: pointer;
  font-size: 28px;
  color: #14F014;
`;

export const StyledTrackInfo = styled.div`
  display: flex;
  flex-direction: row;
  border: 0;
  background: transparent;
  font-size: 16px;
`;

export const StyledTrackPoster = styled.img`
  margin-left: 10px;
  width: 50px;
  height: 50px;
`;

export const StyledTrackIcon = styled.span`
  cursor:pointer;
  font-size: 30px;
  margin-right: 10px;
`;

export const StyledTrackTitle = styled.div`
  padding-left: 26px;
`;

export const StyledTrackAuthor = styled.div`
  color: black;
`;

export const StyledTrackName = styled.div`
  color: #838883;
`;