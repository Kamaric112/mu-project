import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getData = async () => {
  const { data } = await axios.request(options)
  console.log(data)
  return data
}

const useMu = () => {
  return useQuery(['Mu'], getData)
}
export default useMu

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
  params: { league: '39', season: '2020', team: '33' },
  headers: {
    'X-RapidAPI-Key': '8b1425a3cemsh601f9b8ab49a379p1f22cfjsnd97d40c7a19b',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
}

const optionsStandings = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
  params: { season: '2022', league: '39' },
  headers: {
    'X-RapidAPI-Key': '8b1425a3cemsh601f9b8ab49a379p1f22cfjsnd97d40c7a19b',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
}

const getStandings = async () => {
  const { data } = await axios.request(optionsStandings)
  return data.response[0].league.standings[0]
}
export const useGetStandings = () => {
  return useQuery(['standings'], getStandings)
}

const optionsPlayers = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
  params: { team: '33' },
  headers: {
    'X-RapidAPI-Key': '8b1425a3cemsh601f9b8ab49a379p1f22cfjsnd97d40c7a19b',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
}

const getPlayers = async () => {
  const { data } = await axios.request(optionsPlayers)
  return data.response[0].players
}
export const useGetPlayers = () => {
  return useQuery(['players'], getPlayers)
}
