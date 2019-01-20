import Loading from '../components/Loading';
import Error from '../components/Error';

const AsyncHome = () => ({
    // Загружаемый компонент. Значение должно быть Promise
    component: import('../pages/Home'),
    // Компонент загрузки, используемый пока загружается асинхронный компонент
    loading: Loading,
    // Компонент ошибки, используемый при неудачной загрузке
    error: Error,
    // Задержка перед показом компонента загрузки. По умолчанию: 200 мс.
    delay: 100,
    // Компонент ошибки будет отображаться, если таймаут
    // был указан и время ожидания превышено. По умолчанию: Infinity.
    timeout: 200
});

export default AsyncHome;