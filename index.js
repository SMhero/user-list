import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import App from 'components/App/App';
const rootElement = document.getElementById('root');
render(_jsx(StrictMode, { children: _jsx(Provider, Object.assign({ store: store }, { children: _jsx(App, {}, void 0) }), void 0) }, void 0), rootElement);
//# sourceMappingURL=index.js.map