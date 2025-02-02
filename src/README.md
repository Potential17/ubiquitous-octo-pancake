# Interactive Graph Visualization

A React-based interactive graph visualization application that allows users to manipulate and customize graph elements with undo/redo functionality. Built with React Flow, Redux, and TypeScript.

## Features

- Interactive graph with 10 interconnected nodes in a circular layout
- Node customization:
  - Color modification with color picker
  - Font size adjustment (12px to 24px)
- Drag and drop node positioning
- Undo/redo functionality for all modifications
- Responsive design
- Clean and intuitive user interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally preview production build
- `npm run lint` - Run ESLint to check code quality

## Dependencies

### Core Dependencies
- react: ^18.3.1
- react-dom: ^18.3.1
- @reduxjs/toolkit: ^2.2.1
- react-redux: ^9.1.0
- reactflow: ^11.10.4
- lucide-react: ^0.344.0

### Development Dependencies
- typescript: ^5.5.3
- vite: ^5.4.2
- @vitejs/plugin-react: ^4.3.1
- eslint: ^9.9.1
- tailwindcss: ^3.4.1
- autoprefixer: ^10.4.18
- postcss: ^8.4.35

## Usage Guide

1. **Starting the Application**
   - Run `npm run dev`
   - Open your browser to the provided local URL

2. **Basic Navigation**
   - The graph will display 10 nodes arranged in a circular layout
   - Click and drag nodes to reposition them
   - Use the controls in the bottom-right corner to pan and zoom

3. **Node Customization**
   - Click any node to select it
   - Use the customization panel on the right to:
     - Change node color using the color picker
     - Adjust font size using the slider (12px-24px)

4. **Undo/Redo**
   - Use the undo/redo buttons in the top-right corner
   - Actions that can be undone/redone:
     - Node position changes
     - Color changes
     - Font size adjustments

5. **Graph Controls**
   - Pan: Drag empty space
   - Zoom: Mouse wheel or zoom controls
   - Fit view: Click the fit view button in controls

## Project Structure

```
src/
├── components/           # React components
│   ├── CustomNode.tsx   # Custom node component
│   ├── GraphContainer.tsx   # Main graph container
│   ├── NodeCustomizationPanel.tsx  # Node styling panel
│   └── UndoRedoControls.tsx    # Undo/redo buttons
├── store/               # Redux store configuration
│   ├── graphSlice.ts    # Graph state management
│   ├── historySlice.ts  # Undo/redo state management
│   └── index.ts         # Store configuration
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── App.tsx             # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

