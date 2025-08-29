# Beautiful Love Story Website 💕

A romantic website built with React, TypeScript, and Tailwind CSS to celebrate love and create beautiful memories.

## Features ✨

- **Interactive Love Letter** with typewriter animation
- **Timeline** showcasing relationship milestones
- **Music Player** with playlist support
- **Photo Gallery** for memories
- **Quotes Carousel** with romantic quotes
- **Shared Interests** expandable sections
- **Countdown Timer** for special dates
- **Contact Form** for wishes and messages
- **Floating Hearts** animation
- **Responsive Design** for all devices

## Setup Instructions 🚀

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/love-story-website.git
cd love-story-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your Music Files
Since music files are too large for GitHub, you'll need to add them manually:

**Option A: Local Files**
1. Create a `public/songs/` folder
2. Add your MP3 files to this folder
3. Update the `src` paths in `src/components/MusicPlayer.tsx` to use `/songs/filename.mp3`

**Option B: Cloud Storage (Recommended)**
1. Upload your music files to a cloud service like:
   - Google Drive (make public)
   - Dropbox (get direct links)
   - AWS S3
   - Cloudinary
   - Any CDN service

2. Update the `src` paths in `src/components/MusicPlayer.tsx` with your cloud URLs

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## Music Setup Guide 🎵

### Using Google Drive (Free & Easy):
1. Upload your songs to Google Drive
2. Right-click each file → "Get link" → "Anyone with the link"
3. Convert the sharing link to direct download link:
   - From: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - To: `https://drive.google.com/uc?export=download&id=FILE_ID`

### Using Dropbox:
1. Upload songs to Dropbox
2. Get sharing link and change `dl=0` to `dl=1` at the end

### Using AWS S3:
1. Create an S3 bucket
2. Upload files and make them public
3. Use the direct S3 URLs

## Customization 🎨

### Colors
Edit the color scheme in `src/index.css`:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  /* Add your colors */
}
```

### Content
- **Love Letter**: Edit `src/components/LoveLetter.tsx`
- **Timeline**: Update events in `src/components/Timeline.tsx`
- **Quotes**: Modify quotes in `src/components/Quotes.tsx`
- **Music**: Update playlist in `src/components/MusicPlayer.tsx`

## Deployment 🌐

### GitHub Pages:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Netlify:
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel:
1. Import your GitHub repo to Vercel
2. It will auto-detect the settings

## File Structure 📁

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── LoveLetter.tsx
│   ├── Timeline.tsx
│   ├── MusicPlayer.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── index.css          # Global styles
└── App.tsx           # Main app component

public/
├── songs/            # Music files (not in repo)
└── images/          # Images and assets
```

## Technologies Used 🛠️

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Contributing 💝

This is a personal love project, but feel free to fork it and create your own version!

## License 📄

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for Maramy