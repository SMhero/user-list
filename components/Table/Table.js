import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Checkbox, Paper, Table as TableMui, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
const Table = ({ selectedUsers, onChecked, rows, }) => {
    const getChecked = useCallback((id) => selectedUsers.some(user => user.id === id), [selectedUsers]);
    return (_jsx(TableContainer, Object.assign({ component: Paper, style: { maxHeight: '385px' } }, { children: _jsxs(TableMui, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, {}, void 0), _jsx(TableCell, Object.assign({ align: "right" }, { children: "First name" }), void 0), _jsx(TableCell, Object.assign({ align: "right" }, { children: "Last name" }), void 0), _jsx(TableCell, Object.assign({ align: "right" }, { children: "Age" }), void 0)] }, void 0) }, void 0), _jsx(TableBody, { children: rows.map((row) => (_jsxs(TableRow, Object.assign({ selected: getChecked(row.id) }, { children: [_jsx(TableCell, Object.assign({ size: 'small' }, { children: _jsx(Checkbox, { checked: getChecked(row.id), onChange: ({ target }) => {
                                        onChecked(target.checked, row);
                                    } }, void 0) }), void 0), _jsx(TableCell, Object.assign({ align: "right" }, { children: row.firstName }), void 0), _jsx(TableCell, Object.assign({ align: "right" }, { children: row.lastName }), void 0), _jsx(TableCell, Object.assign({ size: 'small', align: "right" }, { children: row.age }), void 0)] }), row.id))) }, void 0)] }, void 0) }), void 0));
};
export default Table;
//# sourceMappingURL=Table.js.map