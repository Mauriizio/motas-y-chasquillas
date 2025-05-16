
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { MapPin, Phone, Mail, MessageSquare, Send, Clock } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario (ej: API, emailjs)
        // Por ahora, solo mostramos un toast
        toast({
          title: "¡Mensaje Enviado!",
          description: `Gracias por tu mensaje, ${formData.name}. Nos pondremos en contacto contigo pronto.`,
        });
        setFormData({ name: '', email: '', message: '' });
      };

      const whatsappNumber = "+56912345678"; // Reemplazar con el número real
      const whatsappMessage = "Hola, me gustaría consultar sobre los servicios de Motas y Chasquillas.";

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              Ponte en Contacto
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-foreground max-w-2xl mx-auto"
            >
              ¿Tienes preguntas o quieres saber más? Estamos aquí para ayudarte. ¡Hablemos!
            </motion.p>
          </section>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glassmorphism-card">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary flex items-center">
                    <MessageSquare className="mr-3 h-8 w-8" /> Envíanos un Mensaje
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos a la brevedad.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-brand-darkpink">Tu Nombre</Label>
                      <Input id="name" value={formData.name} onChange={handleChange} placeholder="Ej: Ana Pérez" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-brand-darkpink">Tu Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Ej: ana.perez@correo.com" required />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-brand-darkpink">Tu Mensaje</Label>
                      <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Escribe tu consulta aquí..." rows={5} required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-pink to-brand-darkpink text-white hover:opacity-90 text-lg">
                      <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glassmorphism-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <MapPin className="mr-3 h-7 w-7" /> Nuestra Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground mb-2">Diego Portales 282, Puente Alto, Región Metropolitana, Chile.</p>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-brand-pink shadow-lg">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-70.57689%2C-33.61041%2C-70.57489%2C-33.60841&layer=mapnik&marker=-33.60941%2C-70.57589"
                      width="100%"
                      height="300"
                      style={{ border:0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa de ubicación de Motas y Chasquillas"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphism-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Phone className="mr-3 h-7 w-7" /> Otros Medios de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-green-600 hover:text-green-700 transition-colors duration-300 font-medium p-3 bg-green-100 rounded-lg hover:bg-green-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M19.07 4.93a10 10 0 1 1-12.73 0 10 10 0 0 1 12.73 0z"></path></svg>
                    Chatea por WhatsApp
                  </a>
                  <p className="flex items-center text-lg text-foreground">
                    <Mail className="mr-2 h-5 w-5 text-brand-darkpink" /> <a href="mailto:hola@motasychasquillas.cl" className="hover:text-brand-darkpink transition-colors">hola@motasychasquillas.cl</a>
                  </p>
                  <p className="flex items-center text-lg text-foreground">
                    <Clock className="mr-2 h-5 w-5 text-brand-darkpink" /> Horario: Lun-Vie 9am-6pm, Sáb 9am-2pm
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      );
    };

    export default ContactPage;
  