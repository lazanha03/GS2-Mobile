import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard = () => {
    const [status, setStatus] = useState([]);
    const [preferences, setPreferences] = useState({ renewableOnly: false });

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/vehicles', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setStatus(response.data);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };

        fetchStatus();
    }, []);

    const handlePreferencesChange = async () => {
        try {
            const token = localStorage.getItem('token');
            await api.put('/preferences', preferences, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Preferências atualizadas!');
        } catch (error) {
            console.error('Erro ao atualizar preferências:', error);
        }
    };

    return (
        <div>
            <h1>Painel de Controle</h1>
            <div>
                <h2>Status de Recarga</h2>
                <ul>
                    {status.map((vehicle) => (
                        <li key={vehicle.id}>
                            {vehicle.model} - {vehicle.status} ({vehicle.batteryLevel}%)
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Preferências</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={preferences.renewableOnly}
                        onChange={(e) =>
                            setPreferences({ ...preferences, renewableOnly: e.target.checked })
                        }
                    />
                    Priorizar fontes renováveis
                </label>
                <button onClick={handlePreferencesChange}>Salvar Preferências</button>
            </div>
        </div>
    );
};

export default Dashboard;
