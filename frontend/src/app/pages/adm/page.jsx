// components/Dashboard.jsx
'use client';
import React, { useState } from 'react';
import './adm.module.css';

// Componentes
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>TeleMed</h2>
      </div>
      <ul className="menu">
        <li className="active"><i className="fa fa-home"></i> Dashboard</li>
        <li><i className="fa fa-calendar"></i> Consultas</li>
        <li><i className="fa fa-user-md"></i> Médicos</li>
        <li><i className="fa fa-users"></i> Pacientes</li>
        <li><i className="fa fa-file-medical"></i> Prontuários</li>
        <li><i className="fa fa-pills"></i> Prescrições</li>
        <li><i className="fa fa-chart-line"></i> Estatísticas</li>
        <li><i className="fa fa-cog"></i> Configurações</li>
      </ul>
      <div className="user-info">
        <div className="avatar">
          <img src="/default-avatar.png" alt="Avatar do usuário" />
        </div>
        <div className="details">
          <p className="name">Dr. Silva</p>
          <p className="role">Cardiologista</p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Pesquisar..." />
      </div>
      <div className="actions">
        <div className="notification">
          <i className="fa fa-bell"></i>
          <span className="badge">3</span>
        </div>
        <div className="message">
          <i className="fa fa-envelope"></i>
          <span className="badge">5</span>
        </div>
        <button className="new-appointment">
          <i className="fa fa-plus"></i> Nova Consulta
        </button>
      </div>
    </div>
  );
};

const AppointmentCard = ({ patient, time, status, type }) => {
  return (
    <div className={`appointment-card ${status.toLowerCase()}`}>
      <div className="appointment-time">{time}</div>
      <div className="appointment-info">
        <h3>{patient}</h3>
        <p>{type}</p>
      </div>
      <div className="appointment-status">
        <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="appointment-actions">
        <button className="action-button">
          <i className="fa fa-video"></i>
        </button>
        <button className="action-button">
          <i className="fa fa-file-alt"></i>
        </button>
        <button className="action-button">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="stats-card">
      <div className="stats-icon" style={{ backgroundColor: color }}>
        <i className={`fa fa-${icon}`}></i>
      </div>
      <div className="stats-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

// Dashboard Principal
const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  
  // Formatação da data
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
  
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="welcome-section">
          <div>
            <h1>Bem-vindo, Dr. Silva</h1>
            <p className="date">{formattedDate}</p>
          </div>
          <div className="today-status">
            <p>Você tem <strong>8 consultas</strong> hoje</p>
          </div>
        </div>
        
        <div className="stats-container">
          <StatsCard title="Consultas Hoje" value="8" icon="calendar-check" color="#4CAF50" />
          <StatsCard title="Pacientes Totais" value="247" icon="users" color="#2196F3" />
          <StatsCard title="Pendentes" value="3" icon="clock" color="#FF9800" />
          <StatsCard title="Canceladas" value="1" icon="times-circle" color="#F44336" />
        </div>
        
        <div className="appointments-section">
          <div className="section-header">
            <h2>Próximas Consultas</h2>
            <div className="filter">
              <select defaultValue="today">
                <option value="today">Hoje</option>
                <option value="tomorrow">Amanhã</option>
                <option value="week">Esta Semana</option>
                <option value="month">Este Mês</option>
              </select>
            </div>
          </div>
          
          <div className="appointments-list">
            <AppointmentCard 
              patient="Maria Oliveira" 
              time="09:00 - 09:30" 
              status="Agendada" 
              type="Consulta de Rotina"
            />
            <AppointmentCard 
              patient="João Santos" 
              time="10:15 - 10:45" 
              status="Em Andamento" 
              type="Exame Cardiológico"
            />
            <AppointmentCard 
              patient="Ana Costa" 
              time="11:30 - 12:00" 
              status="Concluída" 
              type="Retorno"
            />
            <AppointmentCard 
              patient="Carlos Silva" 
              time="14:00 - 14:30" 
              status="Pendente" 
              type="Segunda Opinião"
            />
          </div>
        </div>
        
        <div className="two-columns">
          <div className="patient-activity">
            <div className="section-header">
              <h2>Atividade Recente</h2>
              <button className="see-all">Ver Todos</button>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon sent">
                  <i className="fa fa-file-prescription"></i>
                </div>
                <div className="activity-details">
                  <p>Prescrição enviada para <strong>Ana Costa</strong></p>
                  <span className="activity-time">Há 35 minutos</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon updated">
                  <i className="fa fa-file-medical"></i>
                </div>
                <div className="activity-details">
                  <p>Prontuário atualizado de <strong>João Santos</strong></p>
                  <span className="activity-time">Há 1 hora</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon completed">
                  <i className="fa fa-video"></i>
                </div>
                <div className="activity-details">
                  <p>Consulta finalizada com <strong>Paulo Mendes</strong></p>
                  <span className="activity-time">Há 2 horas</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon scheduled">
                  <i className="fa fa-calendar-plus"></i>
                </div>
                <div className="activity-details">
                  <p>Nova consulta agendada com <strong>Maria Oliveira</strong></p>
                  <span className="activity-time">Há 3 horas</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="resources">
            <div className="section-header">
              <h2>Recursos Rápidos</h2>
            </div>
            <div className="resource-cards">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fa fa-file-medical"></i>
                </div>
                <div className="resource-info">
                  <h3>Prontuários</h3>
                  <p>Acesse prontuários dos pacientes</p>
                </div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fa fa-calendar-alt"></i>
                </div>
                <div className="resource-info">
                  <h3>Agenda</h3>
                  <p>Visualize sua agenda completa</p>
                </div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fa fa-pills"></i>
                </div>
                <div className="resource-info">
                  <h3>Prescrições</h3>
                  <p>Gerencie prescrições médicas</p>
                </div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fa fa-chart-pie"></i>
                </div>
                <div className="resource-info">
                  <h3>Relatórios</h3>
                  <p>Visualize relatórios e análises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;