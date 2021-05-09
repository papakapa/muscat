import styled from "styled-components";

export const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledPlaylistPosterWrapper = styled.div`
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const StyledPlaylistPoster = styled.img`
  height: 200px;
  width: 200px;
`;

export const StyledPlaylistTitle = styled.div`
  & a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    &:hover {
      color: #14F014;
    }
  }
`;
