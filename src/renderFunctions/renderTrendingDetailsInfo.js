import Api from "../Api/index";
import { appendingElements } from "../helpers/appendingElements";
import { createListNode } from "../helpers/createListNode";
const Root = document.getElementById("root");
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

export async function renderTrendingDetailsInfo(itemId) {
  Root.removeChild(Root.firstChild);

  const {
    data: { results: recomendationsData }
  } = await Api.Movie.getRecomendations(itemId);
  const movieData = await Api.Movie.getById(itemId);

  const rootChild = document.createElement("div");
  const title = document.createElement("h1");
  const overview = document.createElement("p");
  const posterPath = document.createElement("img");
  const recomendationsTitle = document.createElement("h3");
  const listOfRecomendations = document.createElement("ul");

  recomendationsTitle.innerHTML = "Recomendations";
  posterPath.setAttribute("src", `${IMAGE_URL}${movieData.data.poster_path}`);
  overview.innerHTML = `${movieData.data.overview}`;
  title.innerHTML = `${movieData.data.original_title}`;
  createListNode(recomendationsData, listOfRecomendations);

  const innerObj = [
    posterPath,
    title,
    overview,
    recomendationsTitle,
    listOfRecomendations
  ];
  let flow = appendingElements(innerObj);
  rootChild.appendChild(flow);

  Root.appendChild(rootChild);
}
