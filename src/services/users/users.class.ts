import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Runnable } from 'mocha';
import { Application } from '../../declarations';

export class Users extends Service {

  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);

  }
}
