import React, { useState } from "react";
import { Card, CardContent, Button, Input, Label } from "@/components/ui";

const TelemedicineApp = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const addAppointment = () => {
    if (newAppointment.name && newAppointment.date && newAppointment.reason) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({ name: "", date: "", reason: "" });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Telemedicina</h1>
          <Button>Entrar</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Consultas Agendadas</h2>
          {appointments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments.map((appointment, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent>
                    <h3 className="text-lg font-bold">{appointment.name}</h3>
                    <p>
                      <strong>Data:</strong> {appointment.date}
                    </p>
                    <p>
                      <strong>Motivo:</strong> {appointment.reason}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Nenhuma consulta agendada.</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Agendar Nova Consulta</h2>
          <div className="grid gap-4">
            <div>
              <Label>Nome do Paciente</Label>
              <Input
                type="text"
                name="name"
                value={newAppointment.name}
                onChange={handleInputChange}
                placeholder="Digite o nome do paciente"
              />
            </div>
            <div>
              <Label>Data da Consulta</Label>
              <Input
                type="date"
                name="date"
                value={newAppointment.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Motivo da Consulta</Label>
              <Input
                type="text"
                name="reason"
                value={newAppointment.reason}
                onChange={handleInputChange}
                placeholder="Descreva o motivo da consulta"
              />
            </div>
            <Button onClick={addAppointment} className="mt-4">
              Agendar Consulta
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TelemedicineApp;
