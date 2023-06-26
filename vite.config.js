import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Indago",
        categories: ["developer", "developer tools", "productivity"],
        short_name: "Indago",
        start_url: "/",
        display: "standalone",
        scope: "./",
        description: "Organize and track your job opportunities.",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        shortcuts: [
          {
            name: "All Jobs",
            url: "/all-jobs",
            description: "Get all your jobs",
            icons: [
              {
                src: "/all-jobs-icon.png",
                type: "image/png",
                sizes: "512x512",
              },
            ],
          },
          {
            name: "Add Job",
            url: "/add-job",
            description: "Add your Job",
            icons: [
              {
                src: "/add-job-icon.png",
                type: "image/png",
                sizes: "512x512",
              },
            ],
          },
          {
            name: "Profile",
            url: "/profile",
            description: "Profile",
            icons: [
              {
                src: "/profile-icon.png",
                type: "image/png",
                sizes: "512x512",
              },
            ],
          },
        ],
        screenshots: [
          {
            src: "https://res.cloudinary.com/die12ywpb/image/upload/v1687759932/indago/Indago_oxu4uo.png",
            sizes: "800x600",
            platform: "android",
            label: "Track your Job application status easily.",
          },
          {
            src: "https://res.cloudinary.com/die12ywpb/image/upload/v1687662271/indago/Indago_03.b4983478_gjli9m.png",
            sizes: "800x600",
            platform: "android",
            label: "Track your Job application status easily.",
          },
        ],
        theme_color: "#171717",
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10, // Maximum 10 entries/files in the cache
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api")
            },
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})
