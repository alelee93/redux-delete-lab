import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, band] }
    
    case 'DELETE_BAND':
      //debugger
      console.log(action.payload)
      return{bands: state.bands.filter(band => band.id !== action.payload.payload)}

    default:
      return state;
  }
};
