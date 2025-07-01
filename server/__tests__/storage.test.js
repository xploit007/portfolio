import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MemStorage } from '../storage.js';

function createStorage() {
  return new MemStorage();
}

test('createUser assigns incremental IDs and stores the user', async () => {
  const storage = createStorage();
  const user1 = await storage.createUser({ username: 'alice', password: 'pw1' });
  const user2 = await storage.createUser({ username: 'bob', password: 'pw2' });

  assert.equal(user1.id, 1);
  assert.equal(user2.id, 2);
  assert.deepEqual(await storage.getUser(1), user1);
  assert.deepEqual(await storage.getUser(2), user2);
});

test('getUser retrieves users by ID', async () => {
  const storage = createStorage();
  const user = await storage.createUser({ username: 'charlie', password: 'pw' });
  const fetched = await storage.getUser(user.id);
  assert.deepEqual(fetched, user);
});

test('getUserByUsername finds users by username', async () => {
  const storage = createStorage();
  const user = await storage.createUser({ username: 'dave', password: 'pw' });
  const fetched = await storage.getUserByUsername('dave');
  assert.deepEqual(fetched, user);
});
