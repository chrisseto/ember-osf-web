// eslint-disable import/export
declare module 'ember-awesome-macros' {
    export function raw<T>(value: T): T;
    export function toStr(key: string): string;
    export function conditional<T>(key: string, onTrue: T, onFalse: T): T;
}

declare module 'ember-awesome-macros/to-str' {
    export { toStr as default } from 'ember-awesome-macros';
}

declare module 'ember-awesome-macros/raw' {
    export { raw as default } from 'ember-awesome-macros';
}

declare module 'ember-awesome-macros/conditional' {
    export { conditional as default } from 'ember-awesome-macros';
}
// eslint-enable import/export
