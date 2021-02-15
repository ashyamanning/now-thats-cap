import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import soloTeamNameReducer from '../../src/features/MenuPage/playerNameSlices/soloTeamNameSlice'
import scoreReducer from '../../src/features/Score/scoreSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    soloPlayerName: soloTeamNameReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
