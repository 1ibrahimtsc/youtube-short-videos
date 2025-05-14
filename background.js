chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "loading" &&
    tab.url?.includes("youtube.com/shorts/")
  ) {
    console.log("Tab updated:", tab.url);
    const match = tab.url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      const videoId = match[1];
      const redirectUrl = `https://www.youtube.com/watch?v=${videoId}`;
      chrome.tabs.update(tabId, { url: redirectUrl });
    }
  }
});
