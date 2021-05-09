import styled from "styled-components";

export const StyledAlbum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledAlbumPosterWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledAlbumPoster = styled.img`
  height: 200px;
  width: 200px;
`;

export const StyledAlbumTitle = styled.div`
  & a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    &:hover {
      color: #14F014;
    }
  }
`;