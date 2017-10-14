# chrome-extension-screen-capture

Simple Chrome Extension which capture the screen shot of specific URL and save it to the desk using Native Chrome Host.

This repository has both Extension and Native Chrome host sample code

#Setup

 1. Modify the below two files based on the location of the Chrome Native Host

/NativeChromHost/NativeChromHost/AddHostToRegistry.bat
/NativeChromHost/NativeChromHost/chrome_screen_capture_save.json // Update the chrome extension key in this file

2. Run the AddHostToRegistry.bat file to add the chrome native host to registrary. 

3. No need to run the native host exe file and it will be automatically run by chrome. 
