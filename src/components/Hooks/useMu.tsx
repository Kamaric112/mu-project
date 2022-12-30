import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
//netlify error, temp fix
// const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY
// const RAPIAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST

const RAPIDAPI_KEY = '8b1425a3cemsh601f9b8ab49a379p1f22cfjsnd97d40c7a19b'
const RAPIAPI_HOST = 'api-football-v1.p.rapidapi.com'
const NEWSAPI_KEY = import.meta.env.VITE_NEWSAPI_APIKEY
const getData = async () => {
  dayjs.extend(localizedFormat)

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
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIAPI_HOST
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
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIAPI_HOST
  }
}

const getPlayers = async () => {
  const { data } = await axios.request(optionsPlayers)
  return data.response[0].players
}
export const useGetPlayers = () => {
  return useQuery(['players'], getPlayers)
}

const optionsFixtures = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {
    season: '2022',
    team: '33',
    from: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), //get previous and next games in 1 month from current date
    to: dayjs().add(1, 'month').format('YYYY-MM-DD')
  },
  headers: {
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIAPI_HOST
  }
}

const getFixtures = async () => {
  const { data } = await axios.request(optionsFixtures)
  return data.response
}
export const useGetFixtures = () => {
  return useQuery(['fixtures'], getFixtures)
}

const optionNews = {
  method: 'GET',
  url: 'https://newsapi.org/v2/everything',
  params: {
    q: 'Man Utd',
    from: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
    to: `${dayjs().format('YYYY-MM-DD')}`,
    sortBy: 'relevancy',
    apiKey: NEWSAPI_KEY,
    language: 'en'
  }
}

const getNews = async () => {
  const { data } = await axios.request(optionNews)
  return data.articles
}

export const useGetNews = () => {
  return useQuery(['news'], getNews)
}
