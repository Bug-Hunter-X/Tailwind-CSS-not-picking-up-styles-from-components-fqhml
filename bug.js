```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['.\src/**/*.{html,js,jsx,ts,tsx}'], // This line might be incorrect if your source files are in a different directory
  theme: {
    extend: {
      colors: {
        'custom-color': '#f00',
      },
    },
  },
  plugins: [],
};
```