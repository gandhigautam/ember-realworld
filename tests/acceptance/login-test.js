import { test } from 'qunit';
import testSelector from 'ember-test-selectors';
import moduleForAcceptance from 'realworld-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', assert => {
  const user = server.create('user', { email: 'bob@example.com', password: 'password123' });

  visit('/login');

  fillIn(testSelector('email'), user.email);
  fillIn(testSelector('password'), user.password);

  click(testSelector('login'));

  andThen(() => {
    assert.equal(currentURL(), '/', 'URL after login is Home');
    assert.ok(find(testSelector('currentUser-loggedIn')).length, 'Found currentUser profile link');
  });
});
