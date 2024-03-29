import { DataTypes } from 'sequelize'
import { sequelize } from '..'
import { ImageModel } from './Images';

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
    allowNull: false,
    references: {
      model: 'images',
      key: 'id'
    }
  }
},
  {
    timestamps: false
  }
)

ProductModel.belongsTo(ImageModel, { foreignKey: 'id_image' });

export { ProductModel }