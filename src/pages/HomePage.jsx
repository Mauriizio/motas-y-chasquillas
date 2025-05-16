
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { PawPrint, Scissors, Sparkles } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const FeatureCard = ({ icon, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="text-center h-full glassmorphism-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="mx-auto bg-gradient-to-br from-brand-pink to-brand-darkpink p-4 rounded-full w-fit">
              {React.createElement(icon, { className: "h-10 w-10 text-white" })}
            </div>
            <CardTitle className="mt-4 text-2xl text-primary">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );

    const HomePage = () => {
      return (
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-16 rounded-xl bg-gradient-to-br from-brand-lilac via-brand-lightpink to-white shadow-2xl"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120 }}
                className="inline-block p-3 mb-6 bg-white rounded-full shadow-lg"
              >
                <PawPrint className="h-16 w-16 text-brand-darkpink" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Bienvenidos a Motas y Chasquillas
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
                Donde la pasión por los perros y el arte del estilismo se unen para realzar la belleza de tu mejor amigo.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-brand-pink to-brand-darkpink text-white hover:opacity-90 transition-opacity duration-300 text-lg px-8 py-6 rounded-full shadow-lg">
                  <Link to="/booking">¡Agenda una Cita!</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          <section className="py-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestros Servicios Estrella</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Scissors}
                title="Cortes con Estilo"
                description="Desde cortes de raza hasta estilos personalizados, tu mascota lucirá increíble y se sentirá cómoda."
                delay={0.2}
              />
              <FeatureCard
                icon={Sparkles}
                title="Baños Relajantes"
                description="Usamos productos de alta calidad, suaves para la piel y el pelaje, dejando a tu perro limpio y feliz."
                delay={0.4}
              />
              <FeatureCard
                icon={PawPrint}
                title="Cuidado Completo"
                description="Incluye limpieza de oídos, corte de uñas y el cariño que solo una experta como la Sra. Olga puede ofrecer."
                delay={0.6}
              />
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="py-16 glassmorphism-card"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6 text-primary">¿List@ para consentir a tu peludito?</h2>
              <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                En "Motas y Chasquillas", cada mascota es tratada con amor y profesionalismo. ¡Visítanos y descubre la diferencia!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-brand-darkpink text-brand-darkpink hover:bg-brand-lightpink hover:text-brand-darkpink text-lg px-8 py-6 rounded-full shadow-md">
                    <Link to="/gallery">Ver Galería</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-brand-pink to-brand-darkpink text-white hover:opacity-90 transition-opacity duration-300 text-lg px-8 py-6 rounded-full shadow-lg">
                     <Link to="/contact">Contáctanos</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      );
    };

    export default HomePage;
  