import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  // buttonText: 'Save',
  attributeBindings: ['isPending:disabled'],

  isPending: false,

  init() {
    this._super(...arguments); // spread operator
    this.set('buttonText', this.defaultText);
  },

  click() {
    console.log('clicked');
    this.set('isPending', true);
    this.set('buttonText', this.pendingText);
    this.onClick().then(() => {
      this.set('buttonText', this.defaultText);
      this.set('isPending', false);
    });
  }
});
