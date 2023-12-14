'use client';
import dynamic from 'next/dynamic'
import { Provider } from 'react-redux'
import { UserProvider } from 'providers/userContext'
import store from 'redux/store'

const HomeContainer = dynamic(() => import('containers'))

export default function Home() {
  return (
    <Provider store={store}><UserProvider><HomeContainer /></UserProvider></Provider>
  )
}
