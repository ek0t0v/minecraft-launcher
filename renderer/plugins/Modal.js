import * as deepmerge from 'deepmerge';

const modalDefaultConfig = {
    header: 'Placeholder',
    closeButton: false,
    closeOnClickOutside: true,
};

const Modal = {
    install(Vue) {
        Vue.prototype.$modal = new Vue({
            data() {
                return {
                    isVisible: false,
                    component: null,
                    props: {},
                    config: modalDefaultConfig,
                };
            },
            methods: {
                open(component, props, config) {
                    config = config === undefined
                        ? modalDefaultConfig
                        : deepmerge(modalDefaultConfig, config);

                    document.body.style.overflow = 'hidden';

                    this.isVisible = true;

                    this.component = component;
                    this.props = props;
                    this.config = config;
                },
                close() {
                    // todo: Сделать сброс прокрутки при закрытии окна (scrollTop?).

                    document.body.removeAttribute('style');

                    this.isVisible = false;

                    setTimeout(() => {
                        this.header = '';
                        this.component = null;
                        this.props = {};
                    }, 150);
                },
            },
        });
    },
};

export default Modal;