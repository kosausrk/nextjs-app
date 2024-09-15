'use client' //This will differentiate between server side rendered, this entire component is rendered in client 
import ProductCard from "./components/ProductCard";

export default function Home(){
  return (
    <main>
      
    <h1>Hello Koushik!!! </h1>
    <a href="/users/new">Users</a>
    <ProductCard></ProductCard>
    </main>
  )
}