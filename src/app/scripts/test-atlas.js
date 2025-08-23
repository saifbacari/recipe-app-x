const mongoose = require('mongoose');
require('dotenv').config(); // charge ton .env

(async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI manquante');
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connecté à MongoDB :', conn.connection.host);

    const Ping = mongoose.model('Ping', new mongoose.Schema({ at: Date }), 'ping_test');
    await Ping.create({ at: new Date() });
    const count = await Ping.countDocuments();
    console.log('✅ Documents dans ping_test :', count);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur MongoDB :', err.message);
    process.exit(1);
  }
})();