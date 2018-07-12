import config from 'ember-get-config';
import OsfAdapter from './osf-adapter';

const [apiMajorVersion, apiMinorVersion] = config.OSF.apiVersion.split('.');
const lessThan28 = +apiMajorVersion <= 2 && +apiMinorVersion < 8;

export default class PreprintProvider extends OsfAdapter.extend({
    pathForType(type: string): string {
        return lessThan28 ? this._super(type) : 'providers/preprints';
    },
}) {}

declare module 'ember-data' {
    interface AdapterRegistry {
        'preprint-provider': PreprintProvider;
    }
}
