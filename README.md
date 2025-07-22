# Bulk remove videos from Youtube playlists
This script helps you to easily select and remove multiple videos from a Youtube playlist. Usage of the script requires no coding knowledge, the script creates checkboxes and buttons that handle all functionalities.  

Use for personal playlists, Watch later, Liked videos.

## Note
Youtube only loads the first 100 videos in a playlist when you open it. If you have more than 100 videos in your playlist, you will need to do the following:
1. Scroll to the bottom of the page and wait for more videos to load.
2. Click on the **Refresh Checkboxes** button to add checkboxes to the newly loaded videos. **Please note that this will deselect any currently selected videos.**

## How to use
1. In a browser, open the playlist you want to remove videos from.
2. Open the developer console. There are multiple shortcuts to do this, but you can just right-click anywhere on the page, click on Inspect, and find the Console tab.
3. Copy the contents of [youtube-playlist-bulk-remove.js](youtube-playlist-bulk-remove.js) into the console and press Enter. Now you should see checkboxes next to each video and 3 buttons in the bottom right corner.  

After completing steps 1-3, you can now choose from the below options.

### Remove selected videos
1. Click on the checkbox next to a video to select it to be removed.
2. Once you are happy with your selection, click on the **Remove Selected** button. The selected videos will now be deleted one by one. You will see a message in the console informing you when the removal was successful.  
  
*Please note that you will see windows popping up during the removal process. These are the pop-up menus you would see when you manually remove a video by clicking on the 3 dots next to the video. The script just handles this process for you.*

### Remove unavailable videos
1. Click on the 3 dots next to the playlist name, and click on **Show unavailable videos**.
2. Click on the **Remove Unavailable Videos** button. All loaded unavailable videos will now be deleted one by one. You will see a message in the console informing you when the removal was successful.  
  
This does not mean ALL unavailable videos have been removed from the playlist. This removal only applies to the currently loaded videos. See note above for more info.

***Error?*** If there is an issue with removing unavailable videos, please reload the page, DO NOT complete the initial steps, but first select the **Show unavailable videos** option as written above, and only after that do the initial 3 steps. After the buttons show up, complete the removal as written above.
  
*Please note that you will see windows popping up during the removal process. These are the pop-up menus you would see when you manually remove a video by clicking on the 3 dots next to the video. The script just handles this process for you.*

### Refresh checkboxes
Click on the **Refresh Checkboxes** button if you want to deselect all checkboxes.
