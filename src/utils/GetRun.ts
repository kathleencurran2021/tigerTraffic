import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Database, Storage } from '@ionic/storage'
import { UserProps } from '../components/User'

export async function GetRun(db: Database | null, user: UserProps) {
  const val = await db.get('user')
  return val
  // console.log('the user', user)
}
