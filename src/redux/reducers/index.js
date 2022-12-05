const initialState = {
  favourites: {
    cities: []
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITIES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          cities: [...state.favourites.cities, action.payload]
        }
      }

    //   case "REMOVE_CITIES":
    //     return {
    //       ...state,
    //       favourites: {
    //         ...state.favourites,
    //         cities: [
    //           ...state.favourites.cities.filter(
    //             (city) => jobs._id !== action.payload._id
    //           )
    //         ]
    //       }
    //     }

    default:
      return state
  }
}

export default mainReducer
