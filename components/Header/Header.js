import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Root } from './styled';
const Header = ({ onCheckAll }) => (_jsxs(Root, { children: [_jsx(Typography, Object.assign({ variant: 'h3' }, { children: "Users list" }), void 0), _jsx(FormControlLabel, { label: "Select all", control: _jsx(Checkbox, { onChange: ({ target }) => onCheckAll(target.checked) }, void 0) }, void 0)] }, void 0));
export default Header;
//# sourceMappingURL=Header.js.map