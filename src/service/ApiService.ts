import axios from "axios";
import { Character } from "../types/Character";
import { Location } from "../types/Location";
import { Episode } from "../types/Episode";
import { ApiResponse } from "../types/ApiResponse";

export const fetchCharacters = async (page: number = 1): Promise<ApiResponse<Character>> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return data;
  } catch (error) {
    console.error(`Error fetching characters list for page ${page}:`, error);
    throw error;
  }
};

export const fetchLocations = async (page: number = 1): Promise<ApiResponse<Location>> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`);
    return data;
  } catch (error) {
    console.error(`Error fetching locations list for page ${page}:`, error);
    throw error;
  }
};

export const fetchEpisodes = async (page: number = 1): Promise<ApiResponse<Episode>> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`);
    return data;
  } catch (error) {
    console.error(`Error fetching episodes list for page ${page}:`, error);
    throw error;
  }
};

export const fetchCharacter = async (endpoint: string): Promise<Character> => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
};

export const fetchLocation = async (endpoint: string): Promise<Location> => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};

export const fetchEpisode = async (endpoint: string): Promise<Episode> => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching episode:", error);
    throw error;
  }
};
