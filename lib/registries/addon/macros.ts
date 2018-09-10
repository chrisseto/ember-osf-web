import { macro } from '@ember-decorators/object/computed';
import conditionalMacro from 'ember-awesome-macros/conditional';
import toStrMacro from 'ember-awesome-macros/to-str';

export { default as raw } from 'ember-awesome-macros/raw';

export const toStr = macro(toStrMacro);
export const conditional = macro(conditionalMacro);
