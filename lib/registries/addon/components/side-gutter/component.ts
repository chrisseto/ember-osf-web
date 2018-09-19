import { layout, tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import Component from '@ember/component';
import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

const titleCase = (value: string) => `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;

type GutterSide = 'left' | 'right';
type GutterMode = 'column' | 'drawer' | 'page';

@tagName('')
@layout(template)
export default class Gutter extends Component {
    static positionalParams = ['side'];
    side!: GutterSide;

    mode: GutterMode = defaultTo(this.mode, 'column');
    closed: boolean = defaultTo(this.closed, true);

    @computed('mode')
    get globalClasses() {
        return titleCase(this.mode);
    }

    @computed('side', 'closed')
    get localClasses() {
        return `${this.closed ? 'Closed' : 'Open'} ${titleCase(this.side)}`;
    }
}
