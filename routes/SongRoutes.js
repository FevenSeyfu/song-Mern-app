import express from 'express';
const router = express.Router();
import { createSong,listSongs,updateSong,removeSong,returnStatistics } from '../controllers/SongControllers';



export default router;
router.get('/songs', listSongs)
router.post('/songs', createSong)
router.put('/songs/:id',updateSong )
router.delete('/songs/:id',removeSong )
router.get('/stats', returnStatistics)
