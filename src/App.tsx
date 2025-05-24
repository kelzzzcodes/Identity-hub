import { useEffect, useState } from 'react'
import { Card, Header } from './component'

export const App = () => {
  const [user, setUser] = useState<null | {
    name: string
    gender: string
    country: string
    email: string
    phone: string
    imageUrl: string
  }>(null)

  const fetchUser = async () => {
    try {
      const res = await fetch('https://randomuser.me/api/')
      const data = await res.json()

      console.log('Raw API response:', data) // Log entire API response

      const result = data.results[0]

      const fullName = `${result.name.title} ${result.name.first} ${result.name.last}`
      const userData = {
        name: fullName,
        gender: result.gender,
        country: result.location.country,
        email: result.email,
        phone: result.phone,
        imageUrl: result.picture.large,
      }

      console.log('Processed user data:', userData) // Log processed user data

      setUser(userData)
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="flex flex-col gap-24  min-h-screen bg-slate-100">
      <Header />
      {user ? (
        <Card {...user} getNewUser={fetchUser} />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-slate-500 text-xl">Loading user...</p>
        </div>
      )}
    </div>
  )
}
