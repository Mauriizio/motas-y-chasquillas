
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { UserCircle, MapPin, Award, Heart } from 'lucide-react';

    const AboutPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <section className="text-center py-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-bold mb-4 gradient-text"
            >
              Conoce a la Artista Detrás de las Tijeras
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-foreground max-w-2xl mx-auto"
            >
              La Sra. Olga Cortés, una vida dedicada al arte de embellecer a nuestros amigos de cuatro patas.
            </motion.p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card className="glassmorphism-card overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-brand-pink to-brand-darkpink p-0">
                  <div className="relative w-full h-80 md:h-96">
                     <img 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                      alt="Sra. Olga Cortés con un perro"
                     src="https://images.unsplash.com/photo-1664837946343-3666ee0b008e" />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                      <CardTitle className="text-4xl text-white font-bold">Sra. Olga Cortés</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-lg text-primary mb-2">
                    <UserCircle className="mr-2 h-6 w-6" />
                    Peluquera Canina Profesional
                  </div>
                  <div className="flex items-center text-lg text-primary mb-2">
                    <MapPin className="mr-2 h-6 w-6" />
                    Colombiana, residente en Chile
                  </div>
                  <div className="flex items-center text-lg text-primary">
                    <Award className="mr-2 h-6 w-6" />
                    +30 años de experiencia
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold text-primary">Una Pasión que Cruza Fronteras</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Originaria de Colombia, la Sra. Olga Cortés lleva en su corazón y en sus manos más de tres décadas de amor y dedicación al estilismo canino. Su viaje la trajo a Chile, donde continúa su noble labor, transformando a cada perrito en una obra de arte.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Su vasta experiencia no solo se refleja en la técnica impecable de sus cortes, sino también en el trato amable y paciente que ofrece a cada mascota. Para la Sra. Olga, cada perro es único y merece un cuidado especial que resalte su belleza natural y personalidad.
              </p>
              <div className="flex items-center text-brand-darkpink p-4 bg-brand-lightpink rounded-lg shadow">
                <Heart className="mr-3 h-8 w-8 animate-pulse-gentle" />
                <p className="font-semibold text-lg">"Mi mayor recompensa es ver la alegría de los dueños y la comodidad de sus mascotas tras un buen arreglo." - Sra. Olga</p>
              </div>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="py-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-primary mb-6">¿Por qué elegir a la Sra. Olga?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Experiencia Inigualable", text: "Más de 30 años perfeccionando el arte del grooming canino." },
                { title: "Amor por los Animales", text: "Trato cariñoso y paciente, asegurando una experiencia positiva." },
                { title: "Calidad Profesional", text: "Técnicas actualizadas y productos de primera para el mejor cuidado." },
                { title: "Estilo Colombiano", text: "Un toque único de calidez y dedicación en cada servicio." },
                { title: "Resultados Visibles", text: "Transformaciones que resaltan la belleza y bienestar de tu mascota." },
                { title: "Pasión Auténtica", text: "Una vocación que se siente en cada detalle del servicio." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="h-full glassmorphism-card hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      );
    };

    export default AboutPage;
  