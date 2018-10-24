import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // tagName: 'span',
  classNameBindings: ['isTooLong:error'],

  // remaining = max - text.length
  remaining: computed('text', function() {
    let textLength = this.text ? this.text.length : 0; // ternary statement
    return this.max - textLength;
  }),

  isTooLong: computed('remaining', function() {
    return this.remaining < 0;

    // if (this.remaining < 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  })
});
