// const ADD_FAVORITES = "ADD_FAVORITES";
// const DELETE_FAVORITES = "DELETE_FAVORITES";
// const ADD_SAVED="ADD_SAVED";
// const DELETE_SAVED="DELETE_SAVED";

// export const addFavorites = (id, title, genre) => ({
//   type: "ADD_FAVORITES",
//   payload: { id, title, genre },
// });

// export const deleteFavorites = (id) => ({
//   type: DELETE_FAVORITES,
//   payload: id,
// });

// export const addSaved = (id, title, genre) => ({
//     type: ADD_SAVED,
//     payload: { id, title, genre },
//   });
  
// export const deleteSaved = (id) => ({
//     type: DELETE_SAVED,
//     payload: id,
//   });

// const moviesReducer = (favorites = { favoriteFilms: [], totalCount: 0 },saved={savedFilms:[],totalCount:0 },
// action) => {
//   switch (action.type) {
//     case ADD_FAVORITES:
//       return {
//         ...favorites,
//         favoriteFilms: [...favorites.favoriteFilms, action.payload],
//         totalCount: [...favorites.favoriteFilms].length + 1,
//       };
//     case DELETE_FAVORITES:
//       if (favorites.totalCount > 0) {
//         return {
//           ...favorites,
//           favoriteFilms: [
//             ...favorites.favoriteFilms.filter(
//               (item) => item.id !== action.payload
//             ),
//           ],
//           totalCount: [...favorites.favoriteFilms].length - 1,
//         };
//       } 
//     else {
//         return favorites;
//       }
//       case ADD_SAVED:
//         return {
//             ...saved,
//             savedFilms: [...saved.savedFilms, action.payload],
//             totalCount: [...saved.savedFilms].length + 1,
//           };
//     case DELETE_SAVED:
//         if (saved.totalCount > 0) {
//             return {
//               ...saved,
//               savedFilms: [
//                 ...saved.savedFilms.filter(
//                   (item) => item.id !== action.payload
//                 ),
//               ],
//               totalCount: [...saved.savedFilms].length - 1,
//             };
//           } 
//         else {
//             return saved;
//           }
//     default:
//       return {favorites};
//   }
// };

//  export default moviesReducer;