const getDataBtn = document.querySelector("#getDataBtn");
const resultContainer = document.querySelector("#result");
const idInput = document.querySelector("#idInput");

getDataBtn.addEventListener("click", () => {
  function handleResponse(res) {
    if (res && res.title) {
      resultContainer.textContent = res.title;
    }
  }

  chrome.runtime.sendMessage(
    {
      type: "ID",
      ID: `${idInput.value}`
    },
    function(response) {
      console.log("response data:");
      console.log(response);
      handleResponse(response);
    }
  );
});
