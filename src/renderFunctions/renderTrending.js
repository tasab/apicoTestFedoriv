import Api from "../Api/index";
import { createListNode } from "../helpers/createListNode";
const Root = document.getElementById("root");

export async function renderTrending() {
  const {
    data: { results: TrendingMovieData }
  } = await Api.Trending.getTrending();
  const TrendingMovieWrapper = document.createElement("div");
  const TrendingMovieList = document.createElement("ul");
  createListNode(TrendingMovieData, TrendingMovieList);

  TrendingMovieWrapper.appendChild(TrendingMovieList);
  Root.appendChild(TrendingMovieWrapper);
}
