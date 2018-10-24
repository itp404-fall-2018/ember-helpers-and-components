import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';

export default Controller.extend({
  featureEnabled: true,
  actions: {
    // Data Down, Actions Up (DDAU) -> One way data flow
    toggleFeature(newValue) {
      this.set('featureEnabled', newValue);
      // $.ajax
    },
    saveUser() {
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();
        }, 2000);
      });
    },
    deleteUser() {
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();
        }, 2000);
      });
    }
  }
});
