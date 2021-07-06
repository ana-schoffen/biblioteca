import assert from 'assert';
import app from '../../src/app';

describe('\'aluno\' service', () => {
  it('registered the service', () => {
    const service = app.service('aluno');

    assert.ok(service, 'Registered the service');
  });
});
