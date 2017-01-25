import 'core-js/client/shim';
import 'reflect-metadata';
// tslint:disable-next-line:no-var-requires
require('zone.js/dist/zone');

import 'ts-helpers';

if (process.env.ENV === 'build') {
  // Production

} else {
  // Development

  // tslint:disable-next-line:no-string-literal
  Error['stackTraceLimit'] = Infinity;

  // tslint:disable-next-line:no-var-requires
  require('zone.js/dist/long-stack-trace-zone');
}
