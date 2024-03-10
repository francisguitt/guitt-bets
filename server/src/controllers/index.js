
import dotenv from 'dotenv';
dotenv.config();

const apikey = `${process.env.API_KEY_PROD}`;

import { Endpoints } from '../utils/index.js';

import { apiBet } from '../instances/index.js';

const headers = {
    'Authorization': `Bearer ${apikey}`,
}

export const AllChampions = async (req, res) => {
    //campeonatos 

    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}`, {
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
        console.log(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}



export const ChampionShipsId = async (req, res) => {
    //campeonatos id
    const id = req.params.id
    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}`, {
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
        console.log(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}


export const ChampionsTable = async (req, res) => {
    //tabela de campeonatos
    const id = req.params.id
    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.table}`, {
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
        console.log(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const Artilleries = async (req, res) => {
    const id = req.params.id
    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.artilleries}`, {
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const PhasesList = async (req, res) => {
    //lista de fases

    const id = req.params.id
    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.list_phases}`, {
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}


export const Phases = async (req, res) => {
    //Fases
    const { championsID, matchID } = req.params;

    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${championsID}/${Endpoints.list_phases}/${matchID}`, {
            //http://localhost:3000/phases/7/8
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const Rounds = async (req, res) => {
    //Rodadas
    const { id } = req.params;

    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.rounds}`, {
            //http://localhost:3000/phasesfrom/7/8
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const Round = async (req, res) => {
    //Rodada
    const { id, roundID } = req.params;

    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.rounds}/${roundID}`, {
            /*   Para listar os IDs dos campeonatos disponíveis utilize o endpoint / v1 / campeonatos
            Su//bstituta rodada pelo número da rodada que deseja buscar ex: ${roundsID } que sera  a rodada
            */
            headers: headers
        })
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const LiveMatches = async (req, res) => {
    //partidas ao vivo
    try {
        const response = await apiBet.get(`/v1/${Endpoints.live}`, {
            //v1/campeonatos
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const ListMatches = async (req, res) => {
    const { id } = req.params;
    //lista de partidas
    try {
        const response = await apiBet.get(`/v1/${Endpoints.championships}/${id}/${Endpoints.matches}`, {

            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const Start = async (req, res) => {
    const { id } = req.params;
    //partida
    try {
        const response = await apiBet.get(`/v1/${Endpoints.matches}/${id}`, {
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const Time = async (req, res) => {
    const { id } = req.params;
    //Time
    try {
        const response = await apiBet.get(`/v1/${Endpoints.time}/${id}`, {

            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


export const NextMatches = async (req, res) => {
    const { id } = req.params;
    // proxima partida
    try {
        const response = await apiBet.get(`/v1/${Endpoints.time}/${id}/${Endpoints.matches}/${Endpoints.next_matches_time}`, {
            /*
             https://api.api-futebol.com.br/v1/times/{time_id}/partidas/proximas
             Substituta time_id pelo ID do time que deseja buscar.
            */
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


export const PrevMatches = async (req, res) => {
    const { id } = req.params;
    // partida anteriores
    try {
        const response = await apiBet.get(`/v1/${Endpoints.time}/${id}/${Endpoints.matches}/${Endpoints.prev_matches_time}`, {
            /*
             https://api.api-futebol.com.br/v1/times/{time_id}/partidas/proximas
             Substituta time_id pelo ID do time que deseja buscar.
            */
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const MatchesLive = async (req, res) => {
    const { id } = req.params;
    try {
        const responde = await apiBet.get(`/v1/${Endpoints.time}/${id}/${Endpoints.matches}/${Endpoints.matches_live}}`, {
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    }
    catch (error) {
        res.status(500).send(error)
    }
}


export const Athlete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await apiBet.get(`/v1/${Endpoints.athletes}/${id}`, {
            headers: headers
        });
        res.status(200).json({ "sucess": response.data });
    } catch (error) {
        res.status(500).send(error)
    }
}