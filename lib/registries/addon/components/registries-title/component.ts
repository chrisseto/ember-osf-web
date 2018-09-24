import { guidFor } from '@ember/object/internals';
import { layout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
// import { localClassNames, localClassName } from 'ember-osf-web/decorators/css-modules';
// import IntersectionObserver from 'intersection-observer';
// import stickybits from 'stickybits';
// import styles from './styles';
import template from './template';

@tagName('')
@layout(template)
// @localClassNames('Title')
export default class TitleBar extends Component {
    get guid(): string {
        return guidFor(this);
    }

    collapsed: boolean = false;

    observer?: any;

    _intersectionCallback(entries: any/* , observer: IntersectionObserver */) {
        if (entries.length > 0) {
            this.set('collapsed', !entries[0].isIntersecting);
        }
    }

    didInsertElement() {
        // const titleEl = document.querySelector(`#${this.guid}.${styles['Title']}`);

        // this.observer = stickybits(titleEl!, {
        //     useStickyClasses: true,
        //     // noStyles: false,
        //     // useFixed: true,
        //     parentClass: 'new-parent-classname',
        //     stickyClass: 'new-sticky-classname',
        //     stuckClass: 'new-stuck-classname',
        //     stickyChangeClass: styles['Collapsed'],
        // });
    }

    willDestroyElement() {
        // this.observer.disconnect();
    }
}
