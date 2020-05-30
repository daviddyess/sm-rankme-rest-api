'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rankme = sequelize.define(
    'Rankme',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      steam: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      lastip: {
        type: DataTypes.STRING
      },
      score: {
        type: DataTypes.INTEGER
      },
      kills: {
        type: DataTypes.INTEGER
      },
      deaths: {
        type: DataTypes.INTEGER
      },
      suicides: {
        type: DataTypes.INTEGER
      },
      tk: {
        type: DataTypes.INTEGER
      },
      shots: {
        type: DataTypes.INTEGER
      },
      hits: {
        type: DataTypes.INTEGER
      },
      headshots: {
        type: DataTypes.INTEGER
      },
      connected: {
        type: DataTypes.INTEGER
      },
      rounds_tr: {
        type: DataTypes.INTEGER
      },
      rounds_ct: {
        type: DataTypes.INTEGER
      },
      lastconnect: {
        type: DataTypes.INTEGER
      },
      knife: {
        type: DataTypes.INTEGER
      },
      glock: {
        type: DataTypes.INTEGER
      },
      usp: {
        type: DataTypes.INTEGER
      },
      p228: {
        type: DataTypes.INTEGER
      },
      deagle: {
        type: DataTypes.INTEGER
      },
      elite: {
        type: DataTypes.INTEGER
      },
      fiveseven: {
        type: DataTypes.INTEGER
      },
      m3: {
        type: DataTypes.INTEGER
      },
      xm1014: {
        type: DataTypes.INTEGER
      },
      mac10: {
        type: DataTypes.INTEGER
      },
      tmp: {
        type: DataTypes.INTEGER
      },
      mp5navy: {
        type: DataTypes.INTEGER
      },
      ump45: {
        type: DataTypes.INTEGER
      },
      p90: {
        type: DataTypes.INTEGER
      },
      galil: {
        type: DataTypes.INTEGER
      },
      ak47: {
        type: DataTypes.INTEGER
      },
      sg550: {
        type: DataTypes.INTEGER
      },
      famas: {
        type: DataTypes.INTEGER
      },
      m4a1: {
        type: DataTypes.INTEGER
      },
      aug: {
        type: DataTypes.INTEGER
      },
      scout: {
        type: DataTypes.INTEGER
      },
      sg552: {
        type: DataTypes.INTEGER
      },
      awp: {
        type: DataTypes.INTEGER
      },
      g3sg1: {
        type: DataTypes.INTEGER
      },
      m249: {
        type: DataTypes.INTEGER
      },
      hegrenade: {
        type: DataTypes.INTEGER
      },
      flashbang: {
        type: DataTypes.INTEGER
      },
      smokegrenade: {
        type: DataTypes.INTEGER
      },
      head: {
        type: DataTypes.INTEGER
      },
      chest: {
        type: DataTypes.INTEGER
      },
      stomach: {
        type: DataTypes.INTEGER
      },
      left_arm: {
        type: DataTypes.INTEGER
      },
      right_arm: {
        type: DataTypes.INTEGER
      },
      left_leg: {
        type: DataTypes.INTEGER
      },
      right_leg: {
        type: DataTypes.INTEGER
      },
      c4_planted: {
        type: DataTypes.INTEGER
      },
      c4_exploded: {
        type: DataTypes.INTEGER
      },
      c4_defused: {
        type: DataTypes.INTEGER
      },
      ct_win: {
        type: DataTypes.INTEGER
      },
      tr_win: {
        type: DataTypes.INTEGER
      },
      hostages_rescued: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'rankme',
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );
  Rankme.associate = function (models) {
    // associations can be defined here
  };
  return Rankme;
};
