# FiveM Loading Screen

A customizable and visually appealing loading screen for FiveM servers. This loading screen includes:
- A dynamic slideshow background.
- A typewriter effect for text messages.
- Social media buttons (Discord, YouTube, Web Store).
- A progress bar with percentage display.
- Background music with play/pause controls.

---

## Features

- **Slideshow Background**: Displays a series of images in the background.
- **Typewriter Effect**: Displays text messages with a typewriter animation.
- **Social Media Buttons**: Redirects users to your Discord, YouTube, and web store.
- **Progress Bar**: Shows the loading progress with a percentage.
- **Background Music**: Plays background music with volume control.

---

## Installation

1. **Download the Resource**:
   - Click the `Code` button on this GitHub page and select `Download ZIP`.
   - Extract the ZIP file to your FiveM server's `resources` folder.

2. **Rename the Folder**:
   - Rename the extracted folder to `lv-loading`.

3. **Add the Resource to `server.cfg`**:
   - Open your `server.cfg` file.
   - Add the following line to start the resource:
     ```plaintext
     start lv-loading
     ```

4. **Customize the Loading Screen**:
   - Replace the images in the `client/img/` folder with your own images.
   - Replace the music file in the `client/audio/` folder with your own music.
   - Update the social media links in `client/index.html`:
     ```html
     <a href="https://discord.gg/your-invite-code" target="_blank" class="social-btn discord">
         <i class="fab fa-discord"></i>
         <span>Join Discord</span>
     </a>
     <a href="https://www.youtube.com/your-channel" target="_blank" class="social-btn youtube">
         <i class="fab fa-youtube"></i>
         <span>YouTube</span>
     </a>
     <a href="https://your-webstore.com" target="_blank" class="social-btn webstore">
         <i class="fas fa-shopping-bag"></i>
         <span>Web Store</span>
     </a>
     ```

5. **Restart Your Server**:
   - Restart your FiveM server to apply the changes.

---

## File Structure

lv-loading/
│
├── fxmanifest.lua
├── server/
│ └── server.lua
├── client/
│ ├── index.html
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ ├── img/
│ │ ├── logo.png
│ │ ├── img1.webp
│ │ └── ... (other images)
│ ├── audio/
│ │ └── music.mp3
│ └── lua/
│ └── client.lua

Copy

---

## Customization

### **Change Background Images**
1. Replace the images in the `client/img/` folder with your own images.
2. Ensure the images are in `.webp` or `.png` format.
3. Update the `slides` array in `client/js/script.js` if you add or remove images:
   ```javascript
   const slides = [
       './img/img1.webp',
       './img/img2.webp',
       './img/img3.webp',
       // Add more images here
   ];
Change Background Music
Replace the music.mp3 file in the client/audio/ folder with your own music.

Ensure the file is in .mp3 format.

Update Social Media Links
Open client/index.html.

Update the href attributes in the social media buttons:

html
Copy
<a href="https://discord.gg/your-invite-code" target="_blank" class="social-btn discord">
    <i class="fab fa-discord"></i>
    <span>Join Discord</span>
</a>
<a href="https://www.youtube.com/your-channel" target="_blank" class="social-btn youtube">
    <i class="fab fa-youtube"></i>
    <span>YouTube</span>
</a>
<a href="https://your-webstore.com" target="_blank" class="social-btn webstore">
    <i class="fas fa-shopping-bag"></i>
    <span>Web Store</span>
</a>
Run HTML
Support
If you encounter any issues or have questions, feel free to:

Open an issue on this GitHub repository.

Join our Discord server for support.

Credits
Developed by [Your Name].

Icons by Font Awesome.

Background music by [Artist Name] (replace with actual credits).

Enjoy your new loading screen! 🚀
