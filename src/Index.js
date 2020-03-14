import { renderTrending } from "./renderFunctions/renderTrending";
import { searchIventFunction } from "./search/searchIventFunction";
const searchButton = document.getElementById("searchButton");

searchButton.onclick = function() {
  searchIventFunction();
};

async function bootstrap() {
  await renderTrending();
}

bootstrap();
