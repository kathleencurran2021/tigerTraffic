import { Plugins, LocalNotification } from '@capacitor/core'
const { LocalNotifications } = Plugins

class Notifications {
  public async schedule(hour: number, minute: number) {
    try {
      // Request/ check permissions
      if (!(await LocalNotifications.requestPermission()).granted) {
        console.log('it was granted')
        return
      }

      // Clear old notifications in prep for refresh (OPTIONAL)
      const pending = await LocalNotifications.getPending()
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending)

      console.log('something happened')
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Tiger Traffic',
            body: 'youve been here a minute',
            id: 1,
            schedule: {
              at: new Date(new Date().getTime() + 1000),
              repeats: true,
            },
          },
        ],
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Notifications()

// export const Notifications = () => {
//   async function schedule(hour: number, minute: number) {
//     try {
//       if (!(await LocalNotifications.requestPermission()).granted) return

//       const pending = await LocalNotifications.getPending()
//       if (pending.notifications.length > 0) {
//         await LocalNotifications.cancel(pending)
//       }
//       await LocalNotifications.schedule({
//         notifications: [
//           {
//             title: 'Tiger Traffic',
//             body: "You've been here for a minute",
//             id: 1,
//             schedule: {
//               on: {
//                 hour,
//                 minute,
//               },
//             },
//           },
//         ],
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
