# chrome-extension-screen-capture

Simple Chrome Extension which capture the screen shot of specific URL and save it to the desk using Native Chrome Host.

This repositary has both Extension and Native Chome host sample code

@Setup

Modify the below two files based on the location of the Chrome Native Host

/NativeChromHost/NativeChromHost/AddHostToRegistry.bat
/NativeChromHost/NativeChromHost/chrome_screen_capture_save.json // Update he chrome extension key in this file

Run the AddHostToRegistry.bat file to add the chrome native host to registrary. 
No need to run the native host exe file and it will be automatically run by chrome. 
