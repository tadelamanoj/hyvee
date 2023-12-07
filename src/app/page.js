"use client"
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import Image from 'next/image'
import App from './pages'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Header />
      <div className="container mx-auto p-3 flex-grow" style={{ overflowY: 'auto'}}>
        <App />
      </div>
      <Footer />
    </div>
  )
}
