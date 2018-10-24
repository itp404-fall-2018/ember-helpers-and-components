import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle() {
      // this.toggleProperty('on');
      // this.set('on', !this.on);

      this.onClick(!this.on);
    }
  }
});
