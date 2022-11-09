const User = require('./User');
const Message = require('./Message')

User.hasMany(Message, {
    foreignKey: 'user_username',
});

Message.hasOne(User, {
    foreignKey: 'user_username',
});

module.exports = { User, Message };
