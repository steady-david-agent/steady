// Notification display only. No push, caching, network calls, or background scheduling.
self.addEventListener('notificationclick', event => { event.notification.close(); });
