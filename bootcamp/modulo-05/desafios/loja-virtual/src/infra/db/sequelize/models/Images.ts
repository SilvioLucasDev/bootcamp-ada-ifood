import { DataTypes } from 'sequelize'
import { sequelize } from '..'

const ImageModel = sequelize.define('images', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    timestamps: false
  }
)

export { ImageModel }