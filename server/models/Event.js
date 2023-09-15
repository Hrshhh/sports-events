// models/events.js
module.exports = function(sequelize, DataTypes) {
    const events = sequelize.define(
      'Events',
       {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      updatedAt: "UpdatedAt",
      createdAt: "CreatedAt",
    }
   );
   return events;
  
  }