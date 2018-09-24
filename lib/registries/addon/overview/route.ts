// import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';
import DS from 'ember-data';

export default class OverView extends Route {
    @service store!: DS.Store;
    // @service analytics!: Analytics;
    // @service session!: Session;

    async model() {
        // TODO Loading/Pending States
        // TODO Withdrawn, Embargo'd, etc
        return this.store.findRecord('registration', '3qm6a', {
            include: ['registration_schema'],
        });
    }

    // @action
    // didTransition(this: Home) {
    //     this.get('analytics').trackPage();
    // }
}
