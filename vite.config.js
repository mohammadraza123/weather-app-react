import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"React-vite-app",
    short_name:"react-vite-app",
    description:"I am a simple vite app",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})



// import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       manifest: {
//         "short_name": "Weather",
//         "name": "Raza Weather",
//         "icons": [
//           {
//             "src": "src/assests/weather-icon.png",
//             "type": "image/svg+xml",
//             "sizes": "512x512"
//           },
//           {
//             "src": "src/assests/weather-icon.png",
//             "type": "image/png",
//             "sizes": "192x192"
//           },
//           {
//             "src": "src/assests/weather-icon.png",
//             "type": "image/png",
//             "sizes": "512x512"
//           }
//         ],
//         id: '/?source=pwa',
//         start_url: '/?source=pwa',
//         background_color: '#3367D6',
//         display: 'standalone',
//         scope: '/',
//         theme_color: '#3367D6',
//         shortcuts: [
//           {
//             name: "How's the weather today?",
//             short_name: 'Today',
//             description: 'View weather information for today',
//             url: '/today?source=pwa',
//             icons: [{ src: '/images/today.png', sizes: '192x192' }],
//           },
//           {
//             name: "How's the weather tomorrow?",
//             short_name: 'Tomorrow',
//             description: 'View weather information for tomorrow',
//             url: '/tomorrow?source=pwa',
//             icons: [{ src: '/images/tomorrow.png', sizes: '192x192' }],
//           },
//         ],
//         description: 'Weather forecast information',
//         screenshots: [
//           {
//             src: '/images/screenshot1.png',
//             type: 'image/png',
//             sizes: '540x720',
//             form_factor: 'narrow',
//           },
//           {
//             src: '/images/screenshot2.jpg',
//             type: 'image/jpg',
//             sizes: '720x540',
//             form_factor: 'wide',
//           },
//         ],
//       },
//     }),
//   ],
// });
