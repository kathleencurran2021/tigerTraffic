import { Plugins, LocalNotification } from '@capacitor/core'

import { BuildingProps } from './Building'
const { LocalNotifications } = Plugins

class Notifications {
  public async scheduleFirst() {
    try {
      // Request/ check permissions
      if (!(await LocalNotifications.requestPermission()).granted) {
        console.log('it was not granted')
        return
      }
      console.log('permission granted')

      const pending = await LocalNotifications.getPending()
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending)

      console.log('something happened')
      LocalNotifications.registerActionTypes({
        types: [
          {
            id: 'BEEN_AWAY',
            actions: [
              {
                id: 'checkout',
                title: 'Okay',
                foreground: true,
              },
              {
                id: 'dismiss',
                title: 'Dismiss',
                destructive: true,
              },
            ],
          },
        ],
      })

      // this is the info on the notification banner
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Tiger Traffic',
            body: 'You have been checked out of Hoover',
            id: 1,
            schedule: {
              at: new Date(new Date().getTime() + 1000),
              // repeats: true,
            },
          },
        ],
      })
    } catch (error) {
      console.error(error)
    }
  }

  //end of schedulefirst

  public async scheduleSecond(whatBuilding: BuildingProps) {
    try {
      if (!(await LocalNotifications.requestPermission()).granted) {
        console.log('it was not granted')
        return
      }
      console.log('permission granted')

      const pending = await LocalNotifications.getPending()
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending)

      console.log('something happened')
      LocalNotifications.registerActionTypes({
        types: [
          {
            id: 'BEEN_AWAY',
            actions: [
              {
                id: 'checkout',
                title: 'Okay',
              },
              {
                id: 'dismiss',
                title: 'Dismiss',
                destructive: true,
              },
            ],
          },
        ],
      })

      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Tiger Traffic',
            body: `Are you still studying in ${whatBuilding.name}?`,
            actionTypeId: 'BEEN_AWAY',
            id: 2,
            schedule: {
              at: new Date(new Date().getTime() + 1000),
              // repeats: true,
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
