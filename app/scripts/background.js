'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

var currentTabId;
var imageUrl;

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({ text: '\'Capture' });

chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps){
  
      if (tabId != currentTabId || changedProps.status != 'complete')
          return;

      setTimeout(function () {
        chrome.tabs.captureVisibleTab(null, { }, function (dataURI) {
          
          chrome.runtime.sendNativeMessage('dell_chrome_screen_capture_save', 
          {
            data:dataURI,
            fileNmae: currentTabId + '.jpeg'            
          }, 
          function(response){
            console.log(response);
          });

          chrome.tabs.remove(currentTabId, function() {
            console.log('tab closed');
           });
          
        });
      }, 10000);  
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  console.log(sender.tab ? sender.tab.url : 'from Extension');
  console.log(request.msg);  

  if(request.msg == 'opentab')
  {
      chrome.tabs.create({ url: request.url}, function(tab) {
          
          currentTabId = tab.id;
          console.log(tab);
      });
  }
});


chrome.alarms.onAlarm.addListener(function (alaram){
  

});