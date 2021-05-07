export const backRoutes = {
  validateToken: 'http://localhost:7777/auth/isAuth',
  validateLogin: 'http://localhost:7777/auth/check',
  signIn: 'http://localhost:7777/auth/signIn',
  signUp: 'http://localhost:7777/auth/signUp',
  createArtist: 'http://localhost:7777/artist/create',
  getArtists: 'http://localhost:7777/artist/all',
  createTrack: 'http://localhost:7777/track/create',
  getTracks: 'http://localhost:7777/track/all',
  getLikedTracks: 'http://localhost:7777/track/likedTracks',
  addLikedTrack: 'http://localhost:7777/track/like',
  deleteLikedTrack: 'http://localhost:7777/track/unlike',
  getPlaylists: 'http://localhost:7777/playlist/all',
  createPlaylist: 'http://localhost:7777/playlist/create'
}
