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
    if (!document.getElementById('color-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'color-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(219, 59, 55, 0.12)';
      overlay.style.pointerEvents = 'none';
      overlay.style.zIndex = 9999;
      document.body.appendChild(overlay);
    }
  } else {
    const overlay = document.getElementById('color-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
}