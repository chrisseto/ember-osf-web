import Service from '@ember/service';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'jumbo';

declare class Media extends Service {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isJumbo: boolean;
}

declare module 'ember-responsive' {
    export default Media;
}

declare module 'ember-responsive/test-support' {
    export const setBreakpoint: (breakpoint: Breakpoint) => void;
}

declare module '@ember/service' {
    interface Registry {
        media: Media;
    }
}
