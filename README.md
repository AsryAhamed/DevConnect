# DevConnect - Developer Portfolio Builder

A modern, interactive portfolio builder for developers with real-time preview and multiple themes.

## Features

- ✨ **Real-time Preview** - See changes instantly as you edit
- 🎨 **Multiple Themes** - Modern, Minimal, and Creative themes
- 🎯 **Customizable Colors** - Choose from preset color schemes
- 📱 **Fully Responsive** - Works on all devices
- 📥 **Export to HTML** - Download your portfolio as a single HTML file
- 🚀 **Easy Deployment** - Ready to deploy on Netlify, Vercel, or any static host

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Context API** - State management
- **CSS3** - Styling (no external CSS frameworks)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd devconnect
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

## Usage

1. **Edit Your Information** - Use the left sidebar to navigate between sections
2. **Preview in Real-time** - See your changes instantly in the preview panel
3. **Customize Theme** - Choose from Modern, Minimal, or Creative themes
4. **Select Colors** - Pick a color scheme that matches your style
5. **Export** - Click "Export Portfolio" to download your HTML file

## Building for Production
```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## Project Structure
```
src/
├── components/          # React components
│   ├── Editor/         # Editor form components
│   ├── Preview/        # Preview and theme components
│   ├── Layout/         # Layout components
│   └── Export/         # Export functionality
├── context/            # React Context for state management
├── utils/              # Utility functions
├── styles/             # CSS files
├── App.jsx             # Main App component
└── main.jsx            # Entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Built with ❤️ for the developer community
