"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./tlperiod.css");
var TPeriod = function (props) {
    return (React.createElement("td", { draggable: true, className: 'period_cell' + props.period.periods.length ? ' note' : '', id: 'cell-' + props.indexOfTL + '-' + _this.props.id, colSpan: props.ir - props.il + 1, onDragStart: function (ev) {
            ev.dataTransfer.setData('application/json', JSON.stringify(props.period));
            ev.dataTransfer.dropEffect = 'copy';
        }, onDragEnter: function (ev) {
            ev.preventDefault();
            ev.target.classList.add('period_cell_drop');
        }, onDragLeave: function (ev) { return ev.target.classList.remove('period_cell_drop'); }, onDragOver: function (ev) { return ev.preventDefault(); } }));
};
exports.default = TPeriod;
//# sourceMappingURL=TLPeriod.js.map