chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("boxedwine.html?app=ski32&p=ski32.exe")
  });
});
