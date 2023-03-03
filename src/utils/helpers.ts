
function sendPushNotification(token: any, title: string, body: string, data: any, type = 'app') {
    var FCM = require('fcm-node');
    var serverKey = process.env.FCM_KEY;
    var fcm = new FCM(serverKey);
    let notification = {
        title: title,
        body: body,
        sound: 'sound',// Sound Url
    }
    var message: any = {
        to: token
    };
    if (type == 'web') {
        message.data = {
            ...notification,
            ...data
        }
    } else {
        message.notification = notification
        message.data = data
    }
    console.log(message)
    fcm.send(message, function (err: any, response: any) {
        if (err) {
            console.log("Something has gone wrong in sending push!", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}





export {
    sendPushNotification,
   
}
 

