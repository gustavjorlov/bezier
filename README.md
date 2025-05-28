# Easing Function Editor

A beautiful, interactive web-based editor for designing CSS cubic-bezier easing functions with real-time visual feedback.

![Easing Function Editor](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.0-purple)

## Features

### 🎯 Interactive Curve Editor
- **Visual Bezier Curve Editor**: Drag control points to design custom easing functions
- **Real-time Preview**: See your curve update instantly as you modify control points
- **Precise Controls**: Keyboard navigation with arrow keys for fine-tuned adjustments
- **Grid Background**: Visual grid for better positioning and alignment

### 🎬 Animation Preview
- **Live Animation**: Watch your easing function in action with a animated preview box
- **Multiple Animation Types**:
  - Horizontal movement (translateX)
  - Scaling transformations
  - 360° rotations
  - Opacity transitions
  - Combined multi-property animations
- **Duration Control**: Adjustable animation duration from 0.1s to 5s
- **Timeline Scrubber**: Manual frame-by-frame animation analysis

### 📚 Preset Library
- **Built-in CSS Easings**: ease, ease-in, ease-out, ease-in-out, linear
- **Extended Collection**: Popular easing curves including:
  - Quadratic, cubic, and quartic easings
  - Back easings for bouncy effects
  - Material Design inspired curves
- **One-click Application**: Instantly apply any preset to your curve

### 🔧 Advanced Controls
- **Animation Type Selector**: Switch between different animation properties
- **Real-time Adjustments**: All changes update immediately
- **Responsive Design**: Works on desktop and tablet devices

### 💻 Code Generation
- **Multiple Output Formats**:
  - CSS Transitions
  - CSS Animations with keyframes
  - CSS Custom Properties
  - Complete keyframe blocks
- **Copy to Clipboard**: One-click copying of generated CSS code
- **Usage Instructions**: Contextual help for each code format

### 🔗 URL Sharing
- **Shareable URLs**: Every configuration is encoded in the URL
- **Instant Collaboration**: Share your easing functions with a simple link
- **Deep Linking**: Direct access to specific easing configurations

## Technology Stack

- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped styling
- **Canvas API** for smooth bezier curve rendering
- **CSS Animations** for 60fps preview animations

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd easing-function-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Design Your Curve**: Drag the control points in the curve editor to create your desired easing function
2. **Preview Animation**: Select an animation type and watch the preview to see how your easing feels
3. **Adjust Settings**: Fine-tune duration and other parameters using the controls panel
4. **Copy Code**: Switch between different CSS formats and copy the code you need
5. **Share**: Use the share button to generate a URL for collaboration

## Browser Support

- Chrome 90+
- Firefox 88+ 
- Safari 14+
- Edge 90+

## Project Structure

```
src/
├── components/          # React components
│   ├── CurveEditor/    # Bezier curve editor with canvas
│   ├── AnimationPreview/ # Live animation preview
│   ├── PresetLibrary/  # Easing function presets
│   ├── ControlPanel/   # Animation controls
│   └── CodeOutput/     # CSS code generation
├── hooks/              # React hooks and context
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by CSS easing function tools and the need for better visual feedback
- Built with modern web standards for optimal performance
- Designed with accessibility and usability in mind 