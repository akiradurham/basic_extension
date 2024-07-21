document.getElementById('apply').addEventListener('click', () => {
    const hue = document.getElementById('hue').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: (hue) => {
          document.body.style.filter = `hue-rotate(${hue}deg)`;
        },
        args: [hue]
      });
    });
  });
  