export interface StoreState {
    appbar: {
        menu: {
            isVisible: boolean;
        };
        uploadModal: {
            isVisible: boolean;
        }
    };
    routing: {
        location: any;
    };
}
