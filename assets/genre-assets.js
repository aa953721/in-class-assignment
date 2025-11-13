// Mapping from genre display names to image paths
const GENRE_IMAGES={
  "Tv shows":"assets/images/tv-shows.svg",
  "Movies":"assets/images/movies.svg",
  "Holidays":"assets/images/holidays.svg",
  "Celebrities":"assets/images/celebrities.svg",
  "Religion":"assets/images/religion.svg",
  "History":"assets/images/history.svg",
  "Politics":"assets/images/politics.svg",
  "Music":"assets/images/music.svg",
  "Technology":"assets/images/technology.svg",
  "Adventure":"assets/images/adventure.svg"
};
function genreImagePath(name){
  return GENRE_IMAGES[name]||"assets/images/default.svg";
}
