// index.js depends on util.js, but does not necessarily export it again.
import util from './util.js';
export default `[made with ${util}]`;
