const Preferences = require('../models/Preferences');

exports.getPreferences = async (req, res) => {
    try {
        // Buscar preferências do usuário autenticado
        const preferences = await Preferences.findOne({ where: { userId: req.user.id } });
        if (!preferences) {
            return res.status(404).json({ error: 'Preferências não encontradas.' });
        }
        res.status(200).json(preferences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar preferências.' });
    }
};

exports.updatePreferences = async (req, res) => {
    const { renewableOnly, lowDemandHours } = req.body;
    try {
        // Buscar preferências do usuário autenticado
        let preferences = await Preferences.findOne({ where: { userId: req.user.id } });

        // Se não existir, criar novas preferências
        if (!preferences) {
            preferences = await Preferences.create({
                renewableOnly,
                lowDemandHours,
                userId: req.user.id,
            });
        } else {
            // Atualizar preferências existentes
            preferences.renewableOnly = renewableOnly !== undefined ? renewableOnly : preferences.renewableOnly;
            preferences.lowDemandHours = lowDemandHours || preferences.lowDemandHours;
            await preferences.save();
        }

        res.status(200).json(preferences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar preferências.' });
    }
};
