
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Calendar } from '@/components/ui/calendar';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { format, addDays, isPast, startOfDay } from 'date-fns';
    import { es } from 'date-fns/locale';
    import { PawPrint, CalendarCheck, Clock, User, Dog, Phone, Scissors } from 'lucide-react';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


    const availableTimes = [
      "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
      "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
    ];

    const dogSizes = ["Pequeño (hasta 10kg)", "Mediano (10-25kg)", "Grande (más de 25kg)"];
    const serviceTypes = ["Baño y Secado", "Corte Completo", "Baño y Corte Higiénico"];


    const BookingPage = () => {
      const [selectedDate, setSelectedDate] = useState(undefined);
      const [selectedTime, setSelectedTime] = useState('');
      const [petName, setPetName] = useState('');
      const [ownerName, setOwnerName] = useState('');
      const [phone, setPhone] = useState('');
      const [dogSize, setDogSize] = useState('');
      const [serviceType, setServiceType] = useState('');
      const [appointments, setAppointments] = useState([]);
      const { toast } = useToast();

      useEffect(() => {
        const storedAppointments = localStorage.getItem('appointments');
        if (storedAppointments) {
          setAppointments(JSON.parse(storedAppointments).map(apt => ({...apt, date: new Date(apt.date)})));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
      }, [appointments]);

      const isTimeSlotBooked = (date, time) => {
        if (!date) return false;
        return appointments.some(
          apt => format(apt.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd') && apt.time === time
        );
      };

      const handleBooking = (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime || !petName || !ownerName || !phone || !dogSize || !serviceType) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Por favor, completa todos los campos.",
          });
          return;
        }

        const newAppointment = {
          id: Date.now(),
          date: selectedDate,
          time: selectedTime,
          petName,
          ownerName,
          phone,
          dogSize,
          serviceType
        };

        setAppointments([...appointments, newAppointment]);

        toast({
          title: "¡Cita Agendada!",
          description: `Tu cita para ${petName} el ${format(selectedDate, 'PPP', { locale: es })} a las ${selectedTime} ha sido registrada.`,
        });

        setSelectedDate(undefined);
        setSelectedTime('');
        setPetName('');
        setOwnerName('');
        setPhone('');
        setDogSize('');
        setServiceType('');
      };
      
      const today = startOfDay(new Date());

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
              Agenda tu Cita
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-foreground max-w-2xl mx-auto"
            >
              Selecciona el día y la hora perfectos para consentir a tu mascota. ¡Es rápido y fácil!
            </motion.p>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glassmorphism-card p-2 sm:p-6">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary flex items-center">
                    <CalendarCheck className="mr-3 h-8 w-8" /> Elige Fecha y Hora
                  </CardTitle>
                  <CardDescription>
                    Las fechas pasadas y los horarios ocupados no están disponibles.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => isPast(date) && !isSameDay(date, today)}
                      locale={es}
                      className="rounded-md border-brand-pink self-center sm:self-start"
                      fromDate={today}
                    />
                    {selectedDate && (
                      <div className="flex-1 space-y-3">
                        <h3 className="text-lg font-semibold text-brand-darkpink">Horarios disponibles para {format(selectedDate, 'PPP', { locale: es })}:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {availableTimes.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? 'default' : 'outline'}
                              onClick={() => setSelectedTime(time)}
                              disabled={isTimeSlotBooked(selectedDate, time)}
                              className={`w-full ${selectedTime === time ? 'bg-brand-darkpink text-white' : 'border-brand-pink text-brand-darkpink hover:bg-brand-lightpink'} ${isTimeSlotBooked(selectedDate, time) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              <Clock className="mr-2 h-4 w-4" /> {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {selectedDate && selectedTime && (
                     <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="pt-6 border-t border-brand-pink"
                      >
                      <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <PawPrint className="mr-3 h-7 w-7"/> Completa los Datos
                      </h3>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="ownerName" className="flex items-center mb-1"><User className="mr-2 h-4 w-4"/>Nombre del Dueño</Label>
                            <Input id="ownerName" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder="Ej: María González" required />
                          </div>
                          <div>
                            <Label htmlFor="petName" className="flex items-center mb-1"><Dog className="mr-2 h-4 w-4"/>Nombre de la Mascota</Label>
                            <Input id="petName" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Ej: Pelusa" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone" className="flex items-center mb-1"><Phone className="mr-2 h-4 w-4"/>Teléfono de Contacto</Label>
                          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ej: +56912345678" required />
                        </div>

                        <div>
                          <Label htmlFor="dogSize" className="flex items-center mb-1"><Dog className="mr-2 h-4 w-4"/>Tamaño del Perro</Label>
                          <Select onValueChange={setDogSize} value={dogSize}>
                            <SelectTrigger id="dogSize">
                              <SelectValue placeholder="Selecciona el tamaño" />
                            </SelectTrigger>
                            <SelectContent>
                              {dogSizes.map(size => <SelectItem key={size} value={size}>{size}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="serviceType" className="flex items-center mb-1"><Scissors className="mr-2 h-4 w-4"/>Tipo de Servicio</Label>
                           <Select onValueChange={setServiceType} value={serviceType}>
                            <SelectTrigger id="serviceType">
                              <SelectValue placeholder="Selecciona el servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-pink to-brand-darkpink text-white hover:opacity-90 text-lg">
                          Confirmar Reserva
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glassmorphism-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Próximas Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  {appointments.length === 0 ? (
                    <p className="text-muted-foreground">No tienes citas agendadas.</p>
                  ) : (
                    <ul className="space-y-3">
                      {appointments
                        .filter(apt => !isPast(addDays(apt.date,1))) 
                        .sort((a,b) => new Date(a.date) - new Date(b.date) || availableTimes.indexOf(a.time) - availableTimes.indexOf(b.time)) 
                        .slice(0, 5) 
                        .map((apt) => (
                        <li key={apt.id} className="p-3 bg-brand-lightpink/50 rounded-md shadow-sm">
                          <p className="font-semibold text-brand-darkpink">{apt.petName} ({apt.ownerName})</p>
                          <p className="text-sm text-foreground">{format(apt.date, 'PPPP', { locale: es })} a las {apt.time}</p>
                          <p className="text-xs text-muted-foreground">{apt.serviceType} - {apt.dogSize}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
              <Card className="glassmorphism-card">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">¡Importante!</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground space-y-2">
                    <p>Por favor, llega 5 minutos antes de tu cita.</p>
                    <p>Si necesitas cancelar o reprogramar, avísanos con al menos 24 horas de anticipación.</p>
                    <p>Asegúrate que tu mascota haya hecho sus necesidades antes de la cita.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      );
    };
    
    const isSameDay = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
               d1.getMonth() === d2.getMonth() &&
               d1.getDate() === d2.getDate();
    }

    export default BookingPage;
  