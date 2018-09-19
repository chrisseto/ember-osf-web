import { layout, tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import Component from '@ember/component';
import requiredAction from 'ember-osf-web/decorators/required-action';
import CurrentUser from 'ember-osf-web/services/current-user';
import Session from 'ember-simple-auth/services/session';
import { OSF_SERVICES } from 'osf-components/components/osf-navbar/component';
import template from './template';

@tagName('')
@layout(template)
export default class NavBar extends Component {
    @service currentUser!: CurrentUser;
    @service session!: Session;

    @requiredAction onSearch!: (query: string) => void;

    services = OSF_SERVICES;
    helpRoute = 'http://help.osf.io/m/registrations/';
    donateRoute = 'https://cos.io/donate';

    showMobileSearchBox: boolean = false;

    @action
    _onSearch(query: string) {
        this.onSearch(query);
        this.set('showMobileSearchBox', false);
    }

    @action
    toggleMobileSearch() {
        this.set('showMobileSearchBox', !this.showMobileSearchBox);
    }
}
