'use strict';


document.addEventListener('DOMContentLoaded', function() {

    var newURL = document.getElementById('txtdefectStoryUrl');

    var btnOpenTabs = document.getElementById('btnOpenTabs');

    btnOpenTabs.addEventListener('click', function(){
      
        chrome.runtime.sendMessage({
            msg : 'opentab',            
            url : newURL.value
        }, function(response) {
            console.log(response);
        });

    });
    
});