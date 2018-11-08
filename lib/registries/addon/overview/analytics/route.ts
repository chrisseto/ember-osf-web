import Route from '@ember/routing/route';

export default class AnalyticsPage extends Route {
    beforeModel() {
        const model = this.modelFor('overview') as any;
        const guid = model.id || model.registrationId;
        this.transitionToExternal('guid-registration.analytics', guid);
    }
}
