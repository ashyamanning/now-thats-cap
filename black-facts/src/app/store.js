import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import soloTeamNameReducer from '../../src/features/MenuPage/playerNameSlices/soloTeamNameSlice'
import multiplayerTeamNameReducer from '../../src/features/MenuPage/playerNameSlices/multiplayerTeamNameSlice'
import scoreReducer from '../../src/features/Score/scoreSlice'
import categoryReducer from '../../src/features/CategoryPage/CategoryStateFolder/categorySlice'
import loadingReducer from '../features/LoadingSlice/loadingSlice'
import timerReducer from '../features/Timer/timerSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    soloPlayerName: soloTeamNameReducer,
    multiplayerTeamNames: multiplayerTeamNameReducer,
    score: scoreReducer,
    category: categoryReducer,
    loading: loadingReducer,
    timer: timerReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
