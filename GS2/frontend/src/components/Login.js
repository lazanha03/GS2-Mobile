import api from '../services/api';

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post('/users/login', { email, password });
        localStorage.setItem('token', response.data.token);
        alert('Login bem-sucedido!');
        window.location.href = '/dashboard'; // Redireciona para o painel
    } catch (error) {
        console.error('Erro no login:', error);
        alert('Falha no login');
    }
};
