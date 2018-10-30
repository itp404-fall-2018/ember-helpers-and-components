import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | characters-remaining', function(hooks) {
  setupRenderingTest(hooks);

  test('on initial render', async function(assert) {
    this.set('name', 'David');
    await render(hbs`<CharactersRemaining @text={{name}} @max={{10}} />`);
    assert.dom(this.element).hasText('5 characters remaining');
  });

  test('when text changes after render', async function(assert) {
    await render(hbs`<CharactersRemaining @text={{name}} @max={{10}} />`);
    this.set('name', 'David');
    assert.dom(this.element).hasText('5 characters remaining');
  });

  test('in block form', async function(assert) {
    await render(hbs`
      <CharactersRemaining @text={{name}} @max={{10}} as |remaining|>
        <p>
          Characters Remaining: {{remaining}}
        </p>
      </CharactersRemaining>
    `);
    this.set('name', 'David');
    assert.dom('p').hasText('Characters Remaining: 5');
  });
});
