import axios from "axios";
import { Character } from "../types/Character";
import { Location } from "../types/Location";
import { Episode } from "../types/Episode";
import { ApiResponse } from "../types/ApiResponse";

export const fetchCharacters = async (
  filters: {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
  } = {},
  endpoint: string = "https://rickandmortyapi.com/api/character?page=1&limit=100"
): Promise<ApiResponse<Character>> => {
  try {
    const { data } = await axios.get(endpoint, { params: filters });
    return data;
  } catch (error) {
    console.error(`Error fetching characters with filters ${JSON.stringify(filters)}:`, error);
    throw error;
  }
};

export const fetchLocations = async (
  filters: {
    name?: string;
    type?: string;
    dimension?: string;
  } = {},
  endpoint: string = "https://rickandmortyapi.com/api/location?page=1"
): Promise<ApiResponse<Location>> => {
  try {
    const { data } = await axios.get(endpoint, { params: filters });
    return data;
  } catch (error) {
    console.error(`Error fetching locations with filters ${JSON.stringify(filters)}:`, error);
    throw error;
  }
};

export const fetchEpisodes = async (
  filters: {
    name?: string;
    episode?: string;
  } = {},
  endpoint: string = "https://rickandmortyapi.com/api/episode?page=1"
): Promise<ApiResponse<Episode>> => {
  try {
    const { data } = await axios.get(endpoint, { params: filters });
    return data;
  } catch (error) {
    console.error(`Error fetching episodes with filters ${JSON.stringify(filters)}:`, error);
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
