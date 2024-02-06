import { DataTypes } from 'sequelize'
import { sequelize } from '..'

const ProductModel = sequelize.define('products', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  id_image: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  }
)

export { ProductModel }