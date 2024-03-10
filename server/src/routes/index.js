
import express from 'express';
import {
    ChampionShipsId,
    ChampionsTable,
    Artilleries,
    PhasesList,
    Phases,
    Rounds,
    Round,
    LiveMatches,
    ListMatches,
    Start,
    Time,
    NextMatches,
    PrevMatches,
    MatchesLive,
    Athlete
} from '../controllers/index.js';

export const router = express.Router();

router.get('/live', LiveMatches);// lista campeonatos
router.get('/championid/:id', ChampionShipsId);
router.get('/championstable/:id', ChampionsTable);
router.get('/artilleries/:id', Artilleries);
router.get('/phaseslist/:id', PhasesList);
router.get('/phases/:championsID/:matchID', Phases);//http://localhost:3000/phases/7/8
router.get('/rounds/:id', Rounds);
router.get('/round/:id/:roundID', Round);//http://localhost:3000/round/4/7
router.get('/matches', ListMatches);
router.get('/start/:id', Start);
router.get('/time/:id', Time);
router.get('/nextmatches/:id', NextMatches);
router.get('/prevmatches/:id', PrevMatches);
router.get('/matcheslive/:id', MatchesLive);
router.get('/athlete/:id', Athlete);
