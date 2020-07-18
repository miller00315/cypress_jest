const Client = require('../../models/client');

describe('clients', () => {
  beforeEach(async () => {});

  test('Retornar todos os dados', () => {
    let clients = Client.all();

    expect(clients.length).toEqual(3);
  });

  test('Return client', () => {
    let client = Client.first();

    expect(client.id).not.toBeUndefined;
    expect(client.name).not.toBeUndefined;
    expect(client.phone).not.toBeUndefined;
  });
});
