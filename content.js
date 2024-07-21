chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "applyFilter") {
      console.log('Filter toggled');
      document.body.style.filter = `hue-rotate(${request.hue}deg)`;
      sendResponse({status: "Filter applied"});
    }
  });
  