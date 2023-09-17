// models/events.js
module.exports = function (sequelize, DataTypes) {
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
    
      Requested: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      RequestedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ApprovedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Approved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      empid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
    {
      updatedAt: "UpdatedAt",
      createdAt: "CreatedAt",
    }
   );
  
   return events;
  
  }
