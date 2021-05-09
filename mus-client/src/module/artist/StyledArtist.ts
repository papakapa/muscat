import styled from "styled-components";

export const StyledArtist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledArtistPosterWrapper = styled.div`
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const StyledArtistPoster = styled.img`
  border-radius: 50%;
  
  height: 200px;
  width: 200px;
`;

export const StyledArtistTitle = styled.div`
  & a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    &:hover {
      color: #14F014;
    }
  }
`;
