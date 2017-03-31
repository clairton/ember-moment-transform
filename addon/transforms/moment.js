//addon/transforms/moment.js

import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize(serialized, options) {
    if (serialized) {
      return moment(serialized, options.format).toDate();
    }
    return serialized;
  },

  serialize(deserialized, options) {
    if (deserialized) {
      return moment(deserialized).format(options.format);
    }
    return deserialized;
  }
});