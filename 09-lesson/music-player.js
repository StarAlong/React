Skip to content
Search 11,600+ tutorials


Menu
Profile
Certified Full Stack Developer Curriculum
Build a Music Player
index.htmlEditor
styles.cssEditor
script.jsEditor
ConsoleHide the previewPreviewMove the preview to a new window and focus it
155156157158
Step 46Passed
Notice that the album art in the HTML and songs in the userData.songs array have changed. We've swapped out the original songs for shorter ones that you can use to test your app.

All the core functionalities are now in place. The only issue now is that the next song does not automatically play when the currently playing song ends.

To fix that, you can set up an event listener which will detect when the currently playing song ends. The "ended" event listener is appropriate for this. It is fired when the playback of a media reaches the end.

Add an event listener to the audio element which listens for the "ended" event and pass in a reference to the playNextSong function. With that the music player project is complete!


pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

  
Check Your Code (Ctrl + Enter)
Reset


/**
* Your test output will go here
*/
Navigated to Step 46 Passed
