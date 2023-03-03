# Send Push Notification using nodejs

## Introduction
    Send push notification using nodejs with typeScript.send push notification by firebase using fcm library.

    FCM provides a specific set of delivery options for messages sent to Android devices, and allows for similar options on Apple platforms and web. For example, "collapsible" message behavior is supported on Android via FCM's collapse_key , on Apple via apns-collapse-id , and on JavaScript/Web via Topic .

## Setup Steps:
### Required details for setup this project
   1. Add your mongodb database string in env file.
   2. Add your jwt token in env file.
   3. Add your firebase server key in env file.
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`