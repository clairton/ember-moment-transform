# ember-moment-transform

A Ember transform with momentjs.

To use run `ember install ember-moment-transform`, and put your model


```javascript

birthday: DS.attr('moment', {format: 'yyyy-MM-dd'})


```

Use the utc option to prevent conversion mishaps.

```javascript

birthday: DS.attr('moment', {format: 'yyyy-MM-dd', utc: true})


```
