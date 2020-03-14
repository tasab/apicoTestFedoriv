import { renderTrendingDetailsInfo } from "../renderFunctions/renderTrendingDetailsInfo";
import { appendingNode } from "./appendingNode";
export function createListNode(list, flow) {
  list.forEach(item => {
    const listItem = document.createElement(`li`);
    listItem.innerHTML = `<a href='#'>${
      item.original_title === undefined ? item.name : item.original_title
    }</a>`;
    listItem.onclick = function() {
      renderTrendingDetailsInfo(item.id);
    };
    appendingNode(flow, listItem);
  });
}
