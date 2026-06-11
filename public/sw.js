self.addEventListener('install', () => {
  self.skipWaiting()
  self.registration.unregister()
})
self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(clients => {
    clients.forEach(client => client.navigate(client.url))
  })
})
