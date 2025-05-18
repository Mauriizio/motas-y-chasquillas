
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import HomePage from '@/pages/HomePage';
    import AboutPage from '@/pages/AboutPage';
    import GalleryPage from '@/pages/GalleryPage';
    import BookingPage from '@/pages/BookingPage';
    import ContactPage from '@/pages/ContactPage';
    import { Toaster } from '@/components/ui/toaster';
    import { PawPrint, Scissors, Bone, Home, Info, Image, CalendarDays, Mail } from 'lucide-react';

    const navItems = [
      { name: 'Inicio', path: '/', icon: Home },
      { name: 'Sobre Nosotros', path: '/about', icon: Info },
      { name: 'Galería', path: '/gallery', icon: Image },
      { name: 'Reserva de Citas', path: '/booking', icon: CalendarDays },
      { name: 'Contacto', path: '/contact', icon: Mail },
    ];

    function App() {
      return (
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-lightpink via-brand-lilac to-white">
            <header className="sticky top-0 z-50 shadow-lg bg-white/80 backdrop-blur-md">
              <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                  <Link to="/" className="flex items-center space-x-2">
                    <PawPrint className="h-10 w-10 text-brand-darkpink animate-pulse-gentle" />
                    <span className="font-heading text-3xl font-bold gradient-text">
                     GABRIEL HERNANDEZ
                    </span>
                  </Link>
                  <div className="hidden md:flex space-x-2">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out flex items-center space-x-2 hover:bg-brand-pink hover:text-white ${
                            isActive ? 'bg-brand-darkpink text-white shadow-md' : 'text-primary hover:shadow-sm'
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  <div className="md:hidden">
                  </div>
                </div>
              </nav>
            </header>

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            <footer className="bg-brand-pink text-white py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <PawPrint className="h-6 w-6" />
                  <Scissors className="h-6 w-6" />
                  <Bone className="h-6 w-6" />
                </div>
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} Motas y Chasquillas. Todos los derechos reservados.
                </p>
                <p className="text-xs mt-1">Diego Portales 282, Puente Alto, Chile.</p>
                <p className="text-xs mt-1">Diseñado con <span role="img" aria-label="amor">💖</span> por Maurizio Caballero</p>
              </div>
            </footer>
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;
  