## Warning Banners Implementation
The implementation of the warning banners are implemented in few steps, which first are implemented in the `pushNotificationMessage` function.
The function then pushes a new message into the stack and renders it with a notification initalized boolean:
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
}
```
[pushNotificationMessage Implementation](https://github.com/microsoft/pxt/blob/master/react-common/components/Notification.tsx#L73-L82)

It then processes into the warning notification function, which gets passed by pushNotificationMessage:
``` ts
function showNotificationMsg(kind: string, msg: string) {
    pushNotificationMessage({ kind: kind, text: msg, hc: false }); // No high contrast support in skillmap
}
```
And then all these steps get executed by `showNotificationMsg`.  Finally, these functions then are called in `errorNotification` and `warningNotification`:

``` ts
export function errorNotification(msg: string) {
    pxt.tickEvent("notification.error", { message: msg })
    debugger // trigger a breakpoint when a debugger is connected, like in U.oops()
    showNotificationMsg("err", msg)
}

export function warningNotification(msg: string) {
    pxt.log("warning: " + msg)
    showNotificationMsg("warn", msg)
}
```
[notification banner implementation](https://github.com/microsoft/pxt/blob/master/skillmap/src/lib/notifications.ts#L07-L20)

