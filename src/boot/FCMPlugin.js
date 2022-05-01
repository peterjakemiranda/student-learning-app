async function setupListeners() {
  const wasPermissionGiven = await FCM.requestPushPermission();
  if (wasPermissionGiven) {
      FCM.createNotificationChannel({
        id: "sound_alert6",
        name: "Sound Alert6",
        // description: "Useless",
        importance: "high",
        // visibility: "public",
        sound: "elet_mp3",
        // lights: false,
        // vibration: false,
      });
  }
}

document.addEventListener("deviceready", setupListeners, false);