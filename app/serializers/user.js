import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'username',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      user: payload.profile
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
