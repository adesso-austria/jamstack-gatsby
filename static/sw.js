// Required stuff
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js'
  )
  
  // The plugin will pass the files to cache here
  workbox.precaching.precacheAndRoute([])
  
  // Another things
  self.addEventListener('push', () => {
    // ..
  })