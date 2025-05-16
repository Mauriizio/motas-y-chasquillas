
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { Sparkles } from 'lucide-react';

    const galleryImages = [
      { id: 2, src: "../public/perros2.jpg", alt: "Perro Poodle blanco después del corte", caption: "Belleza Oscura" },


      { id: 3, src: "../public/perros3.jpg", alt: "Perro Poodle negro después del corte", caption: "Belleza oscura" },

      { id: 4, src: "../public/perros3.jpg", alt: "Perro Poodle marrón claro después del corte", caption: "Dulce mirada" },

      { id: 5, src:"../public/perros4.jpg", alt: "Perro Poodle marrón claro de cuerpo entero después del corte", caption: "Pose de estrella" },

      { id: 6, src: "../public/perros5.jpg", alt: "Perro mestizo pequeño después del baño", caption: "Frescura y alegría" },

      { id: 7, src: "../public/perros6.jpg", alt: "Yorkshire Terrier después del corte", caption: "Pequeño con gran estilo" },

      { id: 8, src: "../public/perros7.jpg", alt: "Perro blanco con pañoleta después del corte", caption: "Listo para la fiesta" },

      { id: 9, src: "../public/perros9.jpg", alt: "Perro Poodle blanco esponjoso después del corte", caption: "Nube de algodón" },

      { id: 10, src: "../public/perros10.jpg", alt: "Perro Samoyedo blanco sonriendo", caption: "Sonrisa de satisfacción" },
      
      { id: 11, src: "../public/perros8.jpg", alt: "Perro Shih Tzu después del corte", caption: "Glamour Shih Tzu" },

      { id: 11, src: "../public/perros8.jpg", alt: "Perro Shih Tzu después del corte", caption: "Glamour Shih Tzu" },

      { id: 11, src: "../public/perros8.jpg", alt: "Perro Shih Tzu después del corte", caption: "Glamour Shih Tzu" }
    ];

    const GalleryPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <section className="text-center py-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold mb-4 gradient-text"
            >
              Nuestras Estrellas Peludas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-foreground max-w-2xl mx-auto"
            >
              Un vistazo a las transformaciones y sonrisas que creamos cada día. ¡Pura magia y cariño!
            </motion.p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden glassmorphism-card h-full flex flex-col">
                  {image.beforeSrc && image.afterSrc ? (
                    <div className="grid grid-cols-2 h-64">
                      <div className="relative">
                        <img src={image.beforeSrc} alt={`Antes - ${image.alt}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white px-2 py-1 text-xs">Antes</div>
                      </div>
                      <div className="relative">
                        <img src={image.afterSrc} alt={`Después - ${image.alt}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                         <div className="absolute bottom-0 right-0 bg-brand-darkpink text-white px-2 py-1 text-xs">Después</div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-64 overflow-hidden">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  )}
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-lg font-semibold text-primary mb-2">{image.caption}</p>
                    <div className="flex justify-end items-center">
                       <Sparkles className="h-5 w-5 text-brand-pink group-hover:text-brand-darkpink transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    };

    export default GalleryPage;
  