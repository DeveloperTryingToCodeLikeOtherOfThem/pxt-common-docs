## Implementation of the Warning Banners
The implementation of the warning banners are implemented in few steps, which first are implemented in the `pushNotificationMessage` function.
The function then pushes a new message into the stack and renders it.
## Implementation
Here is the implementation of `pushNotificationMessage`.
``` ts
export function pushNotificationMessage(options: NotificationOptions): void {
    if (!notificationsInitialized) {
        notificationsInitialized = true;
        const wrapper = document.body.appendChild(document.createElement('div'));
        notificationMessages = ReactDOM.render(React.createElement(Notification, options), wrapper);
        notificationMessages.push(options);
    } else if (notificationMessages) {
        notificationMessages.push(options);
    }
```

[warning](https://github.com/microsoft/pxt/blob/master/skillmap/src/lib/notifications.ts#L7-L9)
