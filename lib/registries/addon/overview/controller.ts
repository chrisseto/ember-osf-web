import { action, computed } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import Controller from '@ember/controller';
import Media from 'ember-responsive';

export default class Overview extends Controller {
    @service media!: Media;

    sidenavGutterClosed = true;
    metadataGutterClosed = true;

    @computed('metadataGutterClosed', 'metadataGutterMode')
    get animationClass() {
        return !this.metadataGutterClosed && this.metadataGutterMode === 'page'
            ? 'SlideRight'
            : '';
    }

    @computed('media.isDesktop', 'media.isMobile', 'media.isTablet')
    get showMobileNav() {
        return !this.media.isDesktop;
    }

    @computed('media.isDesktop', 'media.isMobile', 'media.isTablet')
    get metadataGutterMode() {
        if (this.media.isMobile) {
            return 'page';
        }

        if (this.media.isTablet) {
            return 'drawer';
        }

        return 'column';
    }

    @computed('media.isDesktop', 'media.isMobile', 'media.isTablet')
    get sidenavGutterMode() {
        if (this.media.isDesktop) {
            return 'column';
        }

        return 'drawer';
    }

    @action
    toggleSidenav() {
        this.set('sidenavGutterClosed', !this.sidenavGutterClosed);
    }

    @action
    toggleMetadata() {
        this.set('metadataGutterClosed', !this.metadataGutterClosed);
    }
}
