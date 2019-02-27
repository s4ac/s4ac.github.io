console.log('🍪rotten-cookie🍪');

browser.cookies.onChanged.addListener(function (changeInfo) {
  console.log('Cookie changed: ' +
    '\n * Cookie: ', changeInfo.cookie,
    '\n * Cause: ' + changeInfo.cause +
    '\n * Removed: ' + changeInfo.removed);
  const notification_title = `Cookie 🍪 from ${changeInfo.cookie.domain} has changed!`;
  const notification_text = `The new value of ${changeInfo.cookie.name}\nhas canged to\n${changeInfo.cookie.value}`;

  browser.notifications.create({
    "type": "basic",
    "iconUrl": "icons/link-48.png",
    "title": notification_title,
    "message": notification_text
  });
});