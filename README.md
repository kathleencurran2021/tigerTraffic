# Tiger Traffic Guide

## To View In Browser

1. Navigate to Tiger Traffic in the Terminal
2. Run `ionic serve`

## Deploying to Mobile (iOS)

1. Navigate to Tiger Traffic in the Terminal
2. Run `ionic cap add ios`
3. If you have made changes, run `ionic cap copy` to copy the changes into the native project
4. If you make any changes in the native project, you can push it back to the source code with `ionic cap sync`
5. Run `ionic cap open ios` to open the native iOS project in Xcode
6. Deploying to a simulator:
   - In the top left corner of Xcode click the button that says 'Generic iOS Device'
   - Select your preferred device and build it
7. Deploying to a device:
   - Connect your iPhone to your Mac
   - On your phone, open Settings -> General -> Profiles and Device Management
     - Tap Apple development: your team and select Trust
   - In Xcode click 'build' to install and launch the app onto your apple device

## Deploying to Mobile (Android)

1. Navigate to Tiger Traffic in the Terminal
2. Run `ionic cap add android`
3. If you have made changes, run `ionic cap copy` to copy the changes into the native project
4. If you make any changes in the native project, you can push it back to the source code with `ionic cap sync`
5. Run `ionic cap open android` to open the native project in Android Studio
6. Deploying to a emulator:
   - Open tools —> AVD manager
   - A window called Your Virtual Devices will open. Click 'Create Virtual Device'
   - Select the category phone and your desired version and click Next
   - Select the system image. API level 28 is recommended
   - Give your device a name and click Finish
   - Exit out of virtual devices and build your app. Then click Run
7. Deploying to an Android Device
   - Connect the device to your computer
   - In Android Studio click the Run button, select your Android device, then click OK to install and launch the app on the device
