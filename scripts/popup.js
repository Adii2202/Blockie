var WebsiteUrl;
var WebsiteHostName;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  WebsiteUrl = tabs[0].url;
  WebsiteHostName = new URL(tabs[0].url).hostname;
  document.getElementById("url").innerText = WebsiteHostName;
});

function showError(text) {
  var div = document.createElement("div");
  div.setAttribute("id", "ERRORcontainer");
  div.innerHTML = `
    <div class="ERROR">
    <p>${text}</p>
    </div>
    `;
  document.getElementsByClassName("bottomItem")[0].appendChild(div);
  setTimeout(() => {
    document.getElementById("ERRORcontainer").remove();
  }, 3000);
}

document.getElementById("btn").addEventListener("click", () => {
  if (WebsiteUrl.toLowerCase().includes("chrome://")) {
    showError("You cannot block a chrome URL");
  } else {
    chrome.storage.local.get("BlockedUrls", (data) => {});
  }
});
