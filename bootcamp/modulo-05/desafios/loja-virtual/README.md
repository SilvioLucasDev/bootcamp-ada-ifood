# Loja Virtual

## Requisitos:

1. Criar a estrutura inicial da aplicação e configure o Sequelize.
2. Configure a criação das seguintes tabelas:
   1. products: 
      - id: VARCHAR(36) PK,
      - name: VARCHAR(100) NOT NULL,
      - price: FLOAT NOT NULL
      - id_image: VARCHAR(36) NULL FOREIGN KEY
   2. images: 
      - id: VARCHAR(36) PK, 
      - name: VARCHAR(100) NOT NULL,
      - type: VARCHAR(50) NOT NULL,
      - path: VARCHAR(250) NOT NULL,
      - size: INTEGER