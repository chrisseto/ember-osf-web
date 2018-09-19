import { layout, tagName } from '@ember-decorators/component';
// import { computed } from '@ember-decorators/object';
// import { service } from '@ember-decorators/service';
import Component from '@ember/component';
import requiredAction from 'ember-osf-web/decorators/required-action';
// import Media from 'ember-responsive';
// import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

@tagName('')
@layout(template)
export default class MobileNavBar extends Component {
    @requiredAction toggleSidenav!: () => void;
    @requiredAction toggleMetadata!: () => void;
}
