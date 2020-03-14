import Api from "../Api/index";
import { removeChildrenNode } from "../helpers/removeChildrenNode";
import { renderTrendingDetailsInfo } from "../renderFunctions/renderTrendingDetailsInfo";
import { appendingNode } from "../helpers/appendingNode";
const Root = document.getElementById("root");
const searchInput = document.getElementById("searchInput");

export async function searchIventFunction() {
  removeChildrenNode(Root);

  const searchResultsWrapper = document.createElement("div");
  const searchResultsList = document.createElement("ul");

  const {
    data: { results: searchResults }
  } = await Api.Search.getResaults(searchInput.value);

  searchResults.forEach(item => {
    const searchResultsItem = document.createElement(`li`);
    searchResultsItem.innerHTML = `<a href='#'>${item.original_title}</a>`;
    searchResultsItem.onclick = function() {
      renderTrendingDetailsInfo(item.id);
    };
    appendingNode(searchResultsList, searchResultsItem);
  });
  appendingNode(searchResultsWrapper, searchResultsList);
  appendingNode(Root, searchResultsWrapper);
}
