// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';
import { normalizeEmail } from 'validator';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const aluno = sequelizeClient.define('aluno', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (aluno as any).associate = function (models: any): void {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('postgres://');
    const aluno = sequelize.define('cep', {
      nome: { type: Sequelize.STRING },
      ra: { type: Sequelize.NUMBER },
      depto: { type: Sequelize.STRING },
      dataN: { type: Sequelize.DATE },
      cpf: { type: Sequelize.NUMBER },
      telefone: { type: Sequelize.NUMBER },
      rua: { type: Sequelize.STRING },
      complemento: { type: Sequelize.STRING },
      numero: { type: Sequelize.NUMBER },
      bairro: { type: Sequelize.STRING },
      cidade: { type: Sequelize.STRING },
      cep: { type: Sequelize.NUMBER },

      UF: { type: Sequelize.STRING },

      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
        field: "deleted_at",
      },
    });

  };
  return aluno;
}
