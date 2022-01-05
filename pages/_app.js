import '../styles/globals.css';
import '../styles/overwrite/custom-bootstrap.css';
import {wrapper} from '../redux/store';

const MyApp = ({Component, pageProps}) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
