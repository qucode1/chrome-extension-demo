const getData = async (id = 1) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  ).then(response => response.json());
  return data;
};

// handleMessage darf keine async function sein, sonst wird undefined zurück geschickt! Daher: Promises statt async await!
function handleMessage(request, sender, sendResponse) {
  console.log(request);
  if (request.type === "ID") {
    getData(request.ID).then(data => {
      console.log("data");
      console.log(data);
      sendResponse(data);
    });
  }
  return true;
}

chrome.runtime.onMessage.addListener(handleMessage);
