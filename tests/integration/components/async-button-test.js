import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitUntil, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve, Promise } from 'rsvp';
import { later } from '@ember/runloop';

module('Integration | Component | async-button', function(hooks) {
  setupRenderingTest(hooks);

  test('the default text', async function(assert) {
    this.set('saveUser', () => {
      return resolve();
    });

    await render(hbs`
      <AsyncButton
        @defaultText="Save"
        @pendingText="Saving..."
        @onClick={{saveUser}} />
    `);

    assert.dom('button').hasText('Save');
    assert.dom('button').isNotDisabled();
  });

  test('pendingText is displayed when the button is clicked', async function(assert) {
    this.set('saveUser', () => {
      return new Promise((resolve) => {
        later(() => {
          resolve();
        }, 0);
      });
    });

    await render(hbs`
      <AsyncButton
        @defaultText="Save"
        @pendingText="Saving..."
        @onClick={{saveUser}} />
    `);

    click('button');

    await waitUntil(() => {
      return find('button').textContent.trim() === 'Saving...';
    });

    assert.dom('button').hasText('Saving...');
    assert.dom('button').isDisabled();
  });

  test('the button goes back to defaultText after being clicked', async function(assert) {
    this.set('saveUser', () => {
      return resolve();
    });

    await render(hbs`
      <AsyncButton
        @defaultText="Save"
        @pendingText="Saving..."
        @onClick={{saveUser}} />
    `);

    await click('button');

    assert.dom('button').hasText('Save');
    assert.dom('button').isNotDisabled();
  });
});
