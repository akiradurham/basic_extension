let isFilterOn = false;
chrome.action.onClicked.addListener((tab) => {
  isFilterOn = !isFilterOn;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleColorFilter,
    args: [isFilterOn]
  });
});

function toggleColorFilter(applyFilter) {
  if (applyFilter) {
    document.body.style.filter = 'hue-rotate(90deg)';
  } else {
    document.body.style.filter = 'hue-rotate(-90deg)';
  }
}