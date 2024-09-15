import Link from 'next/link'
import React from 'react'

interface User {
    id:number 
    name:string
    email: string
}

const UsersPage = async () => { //we use async bc we're using a await function to get rest api 
    const res = await fetch("https://jsonplaceholder.typicode.com/users", 
        {cache: "no-store"}, //server side render
        
        /*
        {next: {revalidate: 10}} 
        Once the 10-second period has passed, the next request to the page will trigger a re-fetch of the data.
        The page will be regenerated in the background with the fresh data while the old version is still served to users.
        */
    )    



    const users: User[] = await res.json() //By using User[], TypeScript will enforce that the array of users contains only valid User objects, providing safety and clarity.
        
    return (
    <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
           
           
            <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>


            <Link href = "/">Home</Link>
            
        </>
  )

}

export default UsersPage