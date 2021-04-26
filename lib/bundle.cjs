'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const react = require('react');
const clsx = require('clsx');
const jsxRuntime = require('react/jsx-runtime');
const reactDom = require('react-dom');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$c = ".cj343x070_0-canary_41{contain:strict;contain:size layout style paint;padding:0 8px;border-right:1px solid var(--border-color);border-bottom:1px solid var(--border-color);background-color:inherit;white-space:nowrap;overflow:hidden;overflow:clip;text-overflow:ellipsis}.csofj7r70_0-canary_41{position:sticky;z-index:1}.ch2wcw870_0-canary_41{box-shadow:2px 0 5px -2px hsla(0,0%,53.3%,.3)}.c1wvphzh70_0-canary_41{box-shadow:inset 0 0 0 2px var(--selection-color)}";
styleInject(css_248z$c);

const cell = "cj343x070_0-canary_41";
const cellClassname = `rdg-cell ${cell}`;
const cellFrozen = "csofj7r70_0-canary_41";
const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
const cellFrozenLast = "ch2wcw870_0-canary_41";
const cellFrozenLastClassname = `rdg-cell-frozen-last ${cellFrozenLast}`;
const cellSelected = "c1wvphzh70_0-canary_41";
const cellSelectedClassname = `rdg-cell-selected ${cellSelected}`;

var css_248z$b = ".rnvodz570_0-canary_41{--color:#000;--border-color:#ddd;--summary-border-color:#aaa;--background-color:hsl(0deg 0% 100%);--header-background-color:hsl(0deg 0% 97.5%);--row-hover-background-color:hsl(0deg 0% 96%);--row-selected-background-color:hsl(207deg 76% 92%);--row-selected-hover-background-color:hsl(207deg 76% 88%);--checkbox-color:hsl(207deg 100% 29%);--checkbox-focus-color:hsl(207deg 100% 69%);--checkbox-disabled-border-color:#ccc;--checkbox-disabled-background-color:#ddd;--selection-color:#66afe9;--font-size:14px;contain:strict;contain:size layout style paint;content-visibility:auto;height:350px;border:1px solid var(--border-color);box-sizing:border-box;overflow:auto;user-select:none;background-color:var(--background-color);color:var(--color);font-size:var(--font-size)}@supports not (contain:strict){.rnvodz570_0-canary_41{position:relative;z-index:0}}.rnvodz570_0-canary_41 *,.rnvodz570_0-canary_41 :after,.rnvodz570_0-canary_41 :before{box-sizing:inherit}.rnvodz570_0-canary_41.rdg-dark{--color:#ddd;--border-color:#444;--summary-border-color:#555;--background-color:hsl(0deg 0% 13%);--header-background-color:hsl(0deg 0% 10.5%);--row-hover-background-color:hsl(0deg 0% 9%);--row-selected-background-color:hsl(207deg 76% 42%);--row-selected-hover-background-color:hsl(207deg 76% 38%);--checkbox-color:hsl(207deg 100% 79%);--checkbox-focus-color:hsl(207deg 100% 89%);--checkbox-disabled-border-color:#000;--checkbox-disabled-background-color:#333}@media (prefers-color-scheme:dark){.rnvodz570_0-canary_41:not(.rdg-light){--color:#ddd;--border-color:#444;--summary-border-color:#555;--background-color:hsl(0deg 0% 13%);--header-background-color:hsl(0deg 0% 10.5%);--row-hover-background-color:hsl(0deg 0% 9%);--row-selected-background-color:hsl(207deg 76% 42%);--row-selected-hover-background-color:hsl(207deg 76% 38%);--checkbox-color:hsl(207deg 100% 79%);--checkbox-focus-color:hsl(207deg 100% 89%);--checkbox-disabled-border-color:#000;--checkbox-disabled-background-color:#333}}.flqv91k70_0-canary_41{position:sticky;top:0;left:0;height:0;width:0;outline:0}.v1lsfrzw70_0-canary_41.r1upfr8070_0-canary_41{cursor:move}";
styleInject(css_248z$b);

const root = "rnvodz570_0-canary_41";
const rootClassname = `rdg ${root}`;
const focusSink = "flqv91k70_0-canary_41";
const focusSinkClassname = `rdg-focus-sink ${focusSink}`;
const viewportDragging = "v1lsfrzw70_0-canary_41";
const viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;

var css_248z$a = ".gajh8w570_0-canary_41:not(.r190mhd370_0-canary_41){background-color:var(--header-background-color)}.gajh8w570_0-canary_41>.cj343x070_0-canary_41:not(:last-child):not(.ch2wcw870_0-canary_41){border-right:none}.g17pnute70_0-canary_41:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:inset 0 0 0 2px var(--selection-color);pointer-events:none;z-index:2}.g17pnute70_0-canary_41>.cj343x070_0-canary_41:first-child{box-shadow:inset 2px 0 0 0 var(--selection-color)}";
styleInject(css_248z$a);

const groupRow = "gajh8w570_0-canary_41";
const groupRowClassname = `rdg-group-row ${groupRow}`;
const groupRowSelected = "g17pnute70_0-canary_41";
const groupRowSelectedClassname = `rdg-group-row-selected ${groupRowSelected}`;

var css_248z$9 = ".hz5s9zk70_0-canary_41{contain:strict;contain:size layout style paint;display:grid;grid-template-columns:var(--template-columns);width:var(--row-width);position:sticky;background-color:var(--header-background-color);font-weight:700;z-index:3}.h194p35a70_0-canary_41{grid-template-rows:var(--header-row-height);height:var(--header-row-height);line-height:var(--header-row-height);top:0;touch-action:none}.fy91evj70_0-canary_41{grid-template-rows:var(--filter-row-height);height:var(--filter-row-height);line-height:var(--filter-row-height);top:var(--header-row-height)}";
styleInject(css_248z$9);

const headerRowAndFilterRow = "hz5s9zk70_0-canary_41";
const headerRow = "h194p35a70_0-canary_41";
const headerRowClassname = `rdg-header-row ${headerRowAndFilterRow} ${headerRow}`;
const filterRow = "fy91evj70_0-canary_41";
const filterRowClassname = `rdg-filter-row ${headerRowAndFilterRow} ${filterRow}`;

var css_248z$8 = ".r1upfr8070_0-canary_41{contain:strict;contain:size layout style paint;display:grid;grid-template-rows:var(--row-height);grid-template-columns:var(--template-columns);position:absolute;left:0;width:var(--row-width);height:var(--row-height);line-height:var(--row-height);background-color:var(--background-color)}.r1upfr8070_0-canary_41:hover{background-color:var(--row-hover-background-color)}.r190mhd370_0-canary_41{background-color:var(--row-selected-background-color)}.r190mhd370_0-canary_41:hover{background-color:var(--row-selected-hover-background-color)}.s139qu9m70_0-canary_41{position:sticky;z-index:3;grid-template-rows:var(--summary-row-height);height:var(--summary-row-height);line-height:var(--summary-row-height)}.s139qu9m70_0-canary_41>.cj343x070_0-canary_41{border-top:2px solid var(--summary-border-color)}";
styleInject(css_248z$8);

const row = "r1upfr8070_0-canary_41";
const rowClassname = `rdg-row ${row}`;
const rowSelected = "r190mhd370_0-canary_41";
const rowSelectedClassname = `rdg-row-selected ${rowSelected}`;
const summaryRow = "s139qu9m70_0-canary_41";
const summaryRowClassname = `rdg-summary-row ${summaryRow}`;

function useFocusRef(isCellSelected) {
  const ref = react.useRef(null);
  react.useLayoutEffect(() => {
    var _ref$current;

    if (!isCellSelected) return;
    (_ref$current = ref.current) == null ? void 0 : _ref$current.focus({
      preventScroll: true
    });
  }, [isCellSelected]);
  return ref;
}

var css_248z$7 = ".c4l3n6v70_0-canary_41{cursor:pointer;display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;margin-right:1px}.c1bikpmb70_0-canary_41{all:unset;width:0;margin:0}.c1eyot7g70_0-canary_41{content:\"\";width:20px;height:20px;border:2px solid var(--border-color);background-color:var(--background-color)}.c1bikpmb70_0-canary_41:checked+.c1eyot7g70_0-canary_41{background-color:var(--checkbox-color);box-shadow:inset 0 0 0 4px var(--background-color)}.c1bikpmb70_0-canary_41:focus+.c1eyot7g70_0-canary_41{border-color:var(--checkbox-focus-color)}.c1jlcvp470_0-canary_41{cursor:default}.c1jlcvp470_0-canary_41 .c1eyot7g70_0-canary_41{border-color:var(--checkbox-disabled-border-color);background-color:var(--checkbox-disabled-background-color)}";
styleInject(css_248z$7);

const checkboxLabel = "c4l3n6v70_0-canary_41";
const checkboxLabelClassname = `rdg-checkbox-label ${checkboxLabel}`;
const checkboxInput = "c1bikpmb70_0-canary_41";
const checkboxInputClassname = `rdg-checkbox-input ${checkboxInput}`;
const checkbox = "c1eyot7g70_0-canary_41";
const checkboxClassname = `rdg-checkbox ${checkbox}`;
const checkboxLabelDisabled = "c1jlcvp470_0-canary_41";
const checkboxLabelDisabledClassname = `rdg-checkbox-label-disabled ${checkboxLabelDisabled}`;
function SelectCellFormatter({
  value,
  tabIndex,
  isCellSelected,
  disabled,
  onClick,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}) {
  const inputRef = useFocusRef(isCellSelected);

  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }

  return /*#__PURE__*/jsxRuntime.jsxs("label", {
    className: clsx(checkboxLabelClassname, disabled && checkboxLabelDisabledClassname),
    children: [/*#__PURE__*/jsxRuntime.jsx("input", {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      tabIndex: tabIndex,
      ref: inputRef,
      type: "checkbox",
      className: checkboxInputClassname,
      disabled: disabled,
      checked: value,
      onChange: handleChange,
      onClick: onClick
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      className: checkboxClassname
    })]
  });
}

function ValueFormatter(props) {
  try {
    return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: props.row[props.column.key]
    });
  } catch {
    return null;
  }
}

var css_248z$6 = ".g1vzro7t70_0-canary_41{outline:none}.c1fsqdic70_0-canary_41{margin-left:4px;stroke:currentColor;stroke-width:1.5px;fill:transparent;vertical-align:middle}.c1fsqdic70_0-canary_41>path{transition:d .1s}";
styleInject(css_248z$6);

const groupCellContent = "g1vzro7t70_0-canary_41";
const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
const caret = "c1fsqdic70_0-canary_41";
const caretClassname = `rdg-caret ${caret}`;
function ToggleGroupFormatter({
  groupKey,
  isExpanded,
  isCellSelected,
  toggleGroup
}) {
  const cellRef = useFocusRef(isCellSelected);

  function handleKeyDown({
    key
  }) {
    if (key === 'Enter') {
      toggleGroup();
    }
  }

  const d = isExpanded ? 'M1 1 L 7 7 L 13 1' : 'M1 7 L 7 1 L 13 7';
  return /*#__PURE__*/jsxRuntime.jsxs("span", {
    ref: cellRef,
    className: groupCellContentClassname,
    tabIndex: -1,
    onKeyDown: handleKeyDown,
    children: [groupKey, /*#__PURE__*/jsxRuntime.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: caretClassname,
      children: /*#__PURE__*/jsxRuntime.jsx("path", {
        d: d
      })
    })]
  });
}

function stopPropagation(event) {
  event.stopPropagation();
}

const SELECT_COLUMN_KEY = 'select-row';
const SelectColumn = {
  key: SELECT_COLUMN_KEY,
  name: '',
  width: 35,
  maxWidth: 35,
  resizable: false,
  sortable: false,
  frozen: true,

  headerRenderer(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
      "aria-label": "Select All",
      value: props.allRowsSelected,
      onChange: props.onAllRowsSelectionChange
    });
  },

  formatter(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
      "aria-label": "Select",
      tabIndex: -1,
      isCellSelected: props.isCellSelected,
      value: props.isRowSelected,
      onClick: stopPropagation,
      onChange: props.onRowSelectionChange
    });
  },

  groupFormatter(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
      "aria-label": "Select Group",
      tabIndex: -1,
      isCellSelected: props.isCellSelected,
      value: props.isRowSelected,
      onChange: props.onRowSelectionChange,
      onClick: stopPropagation
    });
  }

};

function useCalculatedColumns({
  rawColumns,
  columnWidths,
  viewportWidth,
  scrollLeft,
  defaultColumnOptions,
  rawGroupBy,
  enableVirtualization
}) {
  var _defaultColumnOptions, _defaultColumnOptions2, _defaultColumnOptions3, _defaultColumnOptions4;

  const minColumnWidth = (_defaultColumnOptions = defaultColumnOptions == null ? void 0 : defaultColumnOptions.minWidth) != null ? _defaultColumnOptions : 80;
  const defaultFormatter = (_defaultColumnOptions2 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.formatter) != null ? _defaultColumnOptions2 : ValueFormatter;
  const defaultSortable = (_defaultColumnOptions3 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.sortable) != null ? _defaultColumnOptions3 : false;
  const defaultResizable = (_defaultColumnOptions4 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.resizable) != null ? _defaultColumnOptions4 : false;
  const {
    columns,
    colSpanColumns,
    lastFrozenColumnIndex,
    groupBy
  } = react.useMemo(() => {
    const groupBy = [];
    let lastFrozenColumnIndex = -1;
    const columns = rawColumns.map(rawColumn => {
      var _rawGroupBy$includes, _rawColumn$sortable, _rawColumn$resizable, _rawColumn$formatter;

      const rowGroup = (_rawGroupBy$includes = rawGroupBy == null ? void 0 : rawGroupBy.includes(rawColumn.key)) != null ? _rawGroupBy$includes : false;
      const frozen = rowGroup || rawColumn.frozen || false;
      const column = { ...rawColumn,
        idx: 0,
        frozen,
        isLastFrozenColumn: false,
        rowGroup,
        sortable: (_rawColumn$sortable = rawColumn.sortable) != null ? _rawColumn$sortable : defaultSortable,
        resizable: (_rawColumn$resizable = rawColumn.resizable) != null ? _rawColumn$resizable : defaultResizable,
        formatter: (_rawColumn$formatter = rawColumn.formatter) != null ? _rawColumn$formatter : defaultFormatter
      };

      if (rowGroup) {
        var _column$groupFormatte;

        (_column$groupFormatte = column.groupFormatter) != null ? _column$groupFormatte : column.groupFormatter = ToggleGroupFormatter;
      }

      if (frozen) {
        lastFrozenColumnIndex++;
      }

      return column;
    });
    columns.sort(({
      key: aKey,
      frozen: frozenA
    }, {
      key: bKey,
      frozen: frozenB
    }) => {
      if (aKey === SELECT_COLUMN_KEY) return -1;
      if (bKey === SELECT_COLUMN_KEY) return 1;

      if (rawGroupBy != null && rawGroupBy.includes(aKey)) {
        if (rawGroupBy.includes(bKey)) {
          return rawGroupBy.indexOf(aKey) - rawGroupBy.indexOf(bKey);
        }

        return -1;
      }

      if (rawGroupBy != null && rawGroupBy.includes(bKey)) return 1;

      if (frozenA) {
        if (frozenB) return 0;
        return -1;
      }

      if (frozenB) return 1;
      return 0;
    });
    const colSpanColumns = [];
    columns.forEach((column, idx) => {
      column.idx = idx;

      if (column.rowGroup) {
        groupBy.push(column.key);
      }

      if (column.colSpan !== undefined) {
        colSpanColumns.push(column);
      }
    });

    if (lastFrozenColumnIndex !== -1) {
      columns[lastFrozenColumnIndex].isLastFrozenColumn = true;
    }

    return {
      columns,
      colSpanColumns,
      lastFrozenColumnIndex,
      groupBy
    };
  }, [rawColumns, defaultFormatter, defaultResizable, defaultSortable, rawGroupBy]);
  const {
    layoutCssVars,
    totalColumnWidth,
    totalFrozenColumnWidth,
    columnMetrics
  } = react.useMemo(() => {
    const columnMetrics = new Map();
    let left = 0;
    let totalColumnWidth = 0;
    let totalFrozenColumnWidth = 0;
    let templateColumns = '';
    let allocatedWidth = 0;
    let unassignedColumnsCount = 0;

    for (const column of columns) {
      let width = getSpecifiedWidth(column, columnWidths, viewportWidth);

      if (width === undefined) {
        unassignedColumnsCount++;
      } else {
        width = clampColumnWidth(width, column, minColumnWidth);
        allocatedWidth += width;
        columnMetrics.set(column, {
          width,
          left: 0
        });
      }
    }

    const unallocatedWidth = viewportWidth - allocatedWidth;
    const unallocatedColumnWidth = unallocatedWidth / unassignedColumnsCount;

    for (const column of columns) {
      let width;

      if (columnMetrics.has(column)) {
        const columnMetric = columnMetrics.get(column);
        columnMetric.left = left;
        ({
          width
        } = columnMetric);
      } else {
        width = clampColumnWidth(unallocatedColumnWidth, column, minColumnWidth);
        columnMetrics.set(column, {
          width,
          left
        });
      }

      totalColumnWidth += width;
      left += width;
      templateColumns += `${width}px `;
    }

    if (lastFrozenColumnIndex !== -1) {
      const columnMetric = columnMetrics.get(columns[lastFrozenColumnIndex]);
      totalFrozenColumnWidth = columnMetric.left + columnMetric.width;
    }

    const layoutCssVars = {
      '--template-columns': templateColumns
    };

    for (let i = 0; i <= lastFrozenColumnIndex; i++) {
      const column = columns[i];
      layoutCssVars[`--frozen-left-${column.key}`] = `${columnMetrics.get(column).left}px`;
    }

    return {
      layoutCssVars,
      totalColumnWidth,
      totalFrozenColumnWidth,
      columnMetrics
    };
  }, [columnWidths, columns, viewportWidth, minColumnWidth, lastFrozenColumnIndex]);
  const [colOverscanStartIdx, colOverscanEndIdx] = react.useMemo(() => {
    if (!enableVirtualization) {
      return [0, columns.length - 1];
    }

    const viewportLeft = scrollLeft + totalFrozenColumnWidth;
    const viewportRight = scrollLeft + viewportWidth;
    const lastColIdx = columns.length - 1;
    const firstUnfrozenColumnIdx = Math.min(lastFrozenColumnIndex + 1, lastColIdx);

    if (viewportLeft >= viewportRight) {
      return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
    }

    let colVisibleStartIdx = firstUnfrozenColumnIdx;

    while (colVisibleStartIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleStartIdx]);

      if (left + width > viewportLeft) {
        break;
      }

      colVisibleStartIdx++;
    }

    let colVisibleEndIdx = colVisibleStartIdx;

    while (colVisibleEndIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleEndIdx]);

      if (left + width >= viewportRight) {
        break;
      }

      colVisibleEndIdx++;
    }

    const colOverscanStartIdx = Math.max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
    const colOverscanEndIdx = Math.min(lastColIdx, colVisibleEndIdx + 1);
    return [colOverscanStartIdx, colOverscanEndIdx];
  }, [columnMetrics, columns, lastFrozenColumnIndex, scrollLeft, totalFrozenColumnWidth, viewportWidth, enableVirtualization]);
  return {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    totalColumnWidth,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  };
}

function getSpecifiedWidth({
  key,
  width
}, columnWidths, viewportWidth) {
  if (columnWidths.has(key)) {
    return columnWidths.get(key);
  }

  if (typeof width === 'number') {
    return width;
  }

  if (typeof width === 'string' && /^\d+%$/.test(width)) {
    return Math.floor(viewportWidth * parseInt(width, 10) / 100);
  }

  return undefined;
}

function clampColumnWidth(width, {
  minWidth,
  maxWidth
}, minColumnWidth) {
  width = Math.max(width, minWidth != null ? minWidth : minColumnWidth);

  if (typeof maxWidth === 'number') {
    return Math.min(width, maxWidth);
  }

  return width;
}

function useClickOutside(onClick) {
  const frameRequestRef = react.useRef();

  function cancelAnimationFrameRequest() {
    if (typeof frameRequestRef.current === 'number') {
      cancelAnimationFrame(frameRequestRef.current);
      frameRequestRef.current = undefined;
    }
  }

  const onClickRef = react.useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });
  react.useEffect(() => {
    onClickRef.current = onClick;
  });
  react.useEffect(() => {
    function onOutsideClick() {
      frameRequestRef.current = undefined;
      onClickRef.current();
    }

    function onWindowCaptureClick() {
      cancelAnimationFrameRequest();
      frameRequestRef.current = requestAnimationFrame(onOutsideClick);
    }

    window.addEventListener('click', onWindowCaptureClick, {
      capture: true
    });
    return () => {
      window.removeEventListener('click', onWindowCaptureClick, {
        capture: true
      });
      cancelAnimationFrameRequest();
    };
  }, []);
  return cancelAnimationFrameRequest;
}

function useGridDimensions() {
  const gridRef = react.useRef(null);
  const [gridWidth, setGridWidth] = react.useState(1);
  const [gridHeight, setGridHeight] = react.useState(1);
  react.useLayoutEffect(() => {
    const {
      ResizeObserver
    } = window;
    if (ResizeObserver == null) return;
    const resizeObserver = new ResizeObserver(() => {
      const {
        clientWidth,
        clientHeight
      } = gridRef.current;
      setGridWidth(clientWidth);
      setGridHeight(clientHeight);
    });
    resizeObserver.observe(gridRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [gridRef, gridWidth, gridHeight];
}

function getColSpan(column, lastFrozenColumnIndex, args) {
  const colSpan = typeof column.colSpan === 'function' ? column.colSpan(args) : 1;

  if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) {
    return colSpan;
  }

  return undefined;
}

const nonInputKeys = new Set(['Unidentified', 'Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Tab', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', 'Insert', 'ContextMenu', 'Escape', 'Pause', 'Play', 'PrintScreen', 'F1', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']);
function isCtrlKeyHeldDown(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== 'Control';
}
function isDefaultCellInput(event) {
  return !nonInputKeys.has(event.key);
}
function onEditorNavigation({
  key,
  target
}) {
  if (key === 'Tab' && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) {
    return target.matches('.rdg-editor-container > :only-child, .rdg-editor-container > label:only-child > :only-child');
  }

  return false;
}

function isSelectedCellEditable({
  selectedPosition,
  columns,
  rows,
  isGroupRow
}) {
  const column = columns[selectedPosition.idx];
  const row = rows[selectedPosition.rowIdx];
  return column.editor != null && !column.rowGroup && !isGroupRow(row) && (typeof column.editable === 'function' ? column.editable(row) : column.editable) !== false;
}
function getNextSelectedCellPosition({
  cellNavigationMode,
  columns,
  colSpanColumns,
  rows,
  currentPosition,
  nextPosition,
  lastFrozenColumnIndex,
  isCellWithinBounds,
  isGroupRow
}) {
  const rowsCount = rows.length;
  let position = nextPosition;

  const setColSpan = moveRight => {
    const row = rows[position.rowIdx];

    if (!isGroupRow(row)) {
      const posIdx = position.idx;

      for (const column of colSpanColumns) {
        const colIdx = column.idx;
        if (colIdx > posIdx) break;
        const colSpan = getColSpan(column, lastFrozenColumnIndex, {
          type: 'ROW',
          row
        });

        if (colSpan && posIdx > colIdx && posIdx < colSpan + colIdx) {
          position.idx = colIdx + (moveRight ? colSpan : 0);
          break;
        }
      }
    }
  };

  if (isCellWithinBounds(position)) {
    setColSpan(position.idx - currentPosition.idx > 0);
  }

  if (cellNavigationMode !== 'NONE') {
    const {
      idx,
      rowIdx
    } = nextPosition;
    const columnsCount = columns.length;
    const isAfterLastColumn = idx === columnsCount;
    const isBeforeFirstColumn = idx === -1;

    if (isAfterLastColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isLastRow = rowIdx === rowsCount - 1;

        if (!isLastRow) {
          position = {
            idx: 0,
            rowIdx: rowIdx + 1
          };
        }
      } else {
        position = {
          rowIdx,
          idx: 0
        };
      }

      setColSpan(true);
    } else if (isBeforeFirstColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isFirstRow = rowIdx === 0;

        if (!isFirstRow) {
          position = {
            rowIdx: rowIdx - 1,
            idx: columnsCount - 1
          };
        }
      } else {
        position = {
          rowIdx,
          idx: columnsCount - 1
        };
      }
    }

    setColSpan(false);
  }

  return position;
}
function canExitGrid({
  cellNavigationMode,
  columns,
  rowsCount,
  selectedPosition: {
    rowIdx,
    idx
  },
  shiftKey
}) {
  if (cellNavigationMode === 'NONE' || cellNavigationMode === 'CHANGE_ROW') {
    const atLastCellInRow = idx === columns.length - 1;
    const atFirstCellInRow = idx === 0;
    const atLastRow = rowIdx === rowsCount - 1;
    const atFirstRow = rowIdx === 0;
    return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
  }

  return false;
}

function assertIsValidKeyGetter(keyGetter) {
  if (typeof keyGetter !== 'function') {
    throw new Error('Please specify the rowKeyGetter prop to use selection');
  }
}
function getCellStyle(column, colSpan) {
  return {
    gridColumnStart: column.idx + 1,
    gridColumnEnd: colSpan !== undefined ? `span ${colSpan}` : undefined,
    left: column.frozen ? `var(--frozen-left-${column.key})` : undefined
  };
}
function getCellClassname(column, ...extraClasses) {
  return clsx(cellClassname, ...extraClasses, column.frozen && cellFrozenClassname, column.isLastFrozenColumn && cellFrozenLastClassname);
}

function useViewportColumns({
  columns,
  colSpanColumns,
  rows,
  summaryRows,
  colOverscanStartIdx,
  colOverscanEndIdx,
  lastFrozenColumnIndex,
  rowOverscanStartIdx,
  rowOverscanEndIdx,
  enableFilterRow,
  isGroupRow
}) {
  const startIdx = react.useMemo(() => {
    if (colOverscanStartIdx === 0) return 0;
    let startIdx = colOverscanStartIdx;

    const updateStartIdx = (colIdx, colSpan) => {
      if (colSpan !== undefined && colIdx + colSpan > colOverscanStartIdx) {
        startIdx = colIdx;
        return true;
      }

      return false;
    };

    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx >= startIdx) break;
      if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
        type: 'HEADER'
      }))) break;
      if (enableFilterRow && updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
        type: 'FILTER'
      }))) break;

      for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
        const row = rows[rowIdx];
        if (isGroupRow(row)) continue;
        if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: 'ROW',
          row
        }))) break;
      }

      if (summaryRows !== undefined) {
        for (const row of summaryRows) {
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: 'SUMMARY',
            row
          }))) break;
        }
      }
    }

    return startIdx;
  }, [rowOverscanStartIdx, rowOverscanEndIdx, rows, summaryRows, colOverscanStartIdx, lastFrozenColumnIndex, colSpanColumns, isGroupRow, enableFilterRow]);
  return react.useMemo(() => {
    const viewportColumns = [];

    for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
      const column = columns[colIdx];
      if (colIdx < startIdx && !column.frozen) continue;
      viewportColumns.push(column);
    }

    return viewportColumns;
  }, [startIdx, colOverscanEndIdx, columns]);
}

const RENDER_BACTCH_SIZE = 8;

function isReadonlyArray(arr) {
  return Array.isArray(arr);
}

function useViewportRows({
  rawRows,
  rowHeight,
  clientHeight,
  scrollTop,
  groupBy,
  rowGrouper,
  expandedGroupIds,
  enableVirtualization
}) {
  const [groupedRows, rowsCount] = react.useMemo(() => {
    if (groupBy.length === 0 || !rowGrouper) return [undefined, rawRows.length];

    const groupRows = (rows, [groupByKey, ...remainingGroupByKeys], startRowIndex) => {
      let groupRowsCount = 0;
      const groups = {};

      for (const [key, childRows] of Object.entries(rowGrouper(rows, groupByKey))) {
        const [childGroups, childRowsCount] = remainingGroupByKeys.length === 0 ? [childRows, childRows.length] : groupRows(childRows, remainingGroupByKeys, startRowIndex + groupRowsCount + 1);
        groups[key] = {
          childRows,
          childGroups,
          startRowIndex: startRowIndex + groupRowsCount
        };
        groupRowsCount += childRowsCount + 1;
      }

      return [groups, groupRowsCount];
    };

    return groupRows(rawRows, groupBy, 0);
  }, [groupBy, rowGrouper, rawRows]);
  const [rows, isGroupRow] = react.useMemo(() => {
    const allGroupRows = new Set();
    if (!groupedRows) return [rawRows, isGroupRow];
    const flattenedRows = [];

    const expandGroup = (rows, parentId, level) => {
      if (isReadonlyArray(rows)) {
        flattenedRows.push(...rows);
        return;
      }

      Object.keys(rows).forEach((groupKey, posInSet, keys) => {
        var _expandedGroupIds$has;

        const id = parentId !== undefined ? `${parentId}__${groupKey}` : groupKey;
        const isExpanded = (_expandedGroupIds$has = expandedGroupIds == null ? void 0 : expandedGroupIds.has(id)) != null ? _expandedGroupIds$has : false;
        const {
          childRows,
          childGroups,
          startRowIndex
        } = rows[groupKey];
        const groupRow = {
          id,
          parentId,
          groupKey,
          isExpanded,
          childRows,
          level,
          posInSet,
          startRowIndex,
          setSize: keys.length
        };
        flattenedRows.push(groupRow);
        allGroupRows.add(groupRow);

        if (isExpanded) {
          expandGroup(childGroups, id, level + 1);
        }
      });
    };

    expandGroup(groupedRows, undefined, 0);
    return [flattenedRows, isGroupRow];

    function isGroupRow(row) {
      return allGroupRows.has(row);
    }
  }, [expandedGroupIds, groupedRows, rawRows]);

  if (!enableVirtualization) {
    return {
      rowOverscanStartIdx: 0,
      rowOverscanEndIdx: rows.length - 1,
      rows,
      rowsCount,
      isGroupRow
    };
  }

  const overscanThreshold = 4;
  const rowVisibleStartIdx = Math.floor(scrollTop / rowHeight);
  const rowVisibleEndIdx = Math.min(rows.length - 1, Math.floor((scrollTop + clientHeight) / rowHeight));
  const rowOverscanStartIdx = Math.max(0, Math.floor((rowVisibleStartIdx - overscanThreshold) / RENDER_BACTCH_SIZE) * RENDER_BACTCH_SIZE);
  const rowOverscanEndIdx = Math.min(rows.length - 1, Math.ceil((rowVisibleEndIdx + overscanThreshold) / RENDER_BACTCH_SIZE) * RENDER_BACTCH_SIZE);
  return {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    rowsCount,
    isGroupRow
  };
}

function useLatestFunc(fn) {
  const ref = react.useRef(fn);
  react.useEffect(() => {
    ref.current = fn;
  });
  return react.useCallback((...args) => {
    ref.current(...args);
  }, []);
}

var css_248z$5 = ".h1j9yp5q70_0-canary_41{cursor:pointer;display:flex}.h1e6at1o70_0-canary_41{flex-grow:1;overflow:hidden;overflow:clip;text-overflow:ellipsis}";
styleInject(css_248z$5);

const headerSortCell = "h1j9yp5q70_0-canary_41";
const headerSortCellClassname = `rdg-header-sort-cell ${headerSortCell}`;
const headerSortName = "h1e6at1o70_0-canary_41";
const headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function SortableHeaderCell({
  column,
  onSort,
  sortColumn,
  sortDirection,
  children
}) {
  sortDirection = sortColumn === column.key && sortDirection || 'NONE';
  let sortText = '';

  if (sortDirection === 'ASC') {
    sortText = '\u25B2';
  } else if (sortDirection === 'DESC') {
    sortText = '\u25BC';
  }

  function onClick() {
    if (!onSort) return;
    const {
      sortDescendingFirst
    } = column;
    let direction;

    switch (sortDirection) {
      case 'ASC':
        direction = sortDescendingFirst ? 'NONE' : 'DESC';
        break;

      case 'DESC':
        direction = sortDescendingFirst ? 'ASC' : 'NONE';
        break;

      default:
        direction = sortDescendingFirst ? 'DESC' : 'ASC';
        break;
    }

    onSort(column.key, direction);
  }

  return /*#__PURE__*/jsxRuntime.jsxs("span", {
    className: headerSortCellClassname,
    onClick: onClick,
    children: [/*#__PURE__*/jsxRuntime.jsx("span", {
      className: headerSortNameClassname,
      children: children
    }), /*#__PURE__*/jsxRuntime.jsx("span", {
      children: sortText
    })]
  });
}

var css_248z$4 = ".c6l2wv170_0-canary_41:after{content:\"\";cursor:col-resize;position:absolute;top:0;right:0;bottom:0;width:10px}";
styleInject(css_248z$4);

const cellResizable = "c6l2wv170_0-canary_41";
const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;

function getAriaSort(sortDirection) {
  switch (sortDirection) {
    case 'ASC':
      return 'ascending';

    case 'DESC':
      return 'descending';

    default:
      return 'none';
  }
}

function HeaderCell({
  column,
  colSpan,
  onResize,
  allRowsSelected,
  onAllRowsSelectionChange,
  sortColumn,
  sortDirection,
  onSort
}) {
  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.buttons !== 1) {
      return;
    }

    const {
      currentTarget,
      pointerId
    } = event;
    const {
      right
    } = currentTarget.getBoundingClientRect();
    const offset = right - event.clientX;

    if (offset > 11) {
      return;
    }

    function onPointerMove(event) {
      if (event.pointerId !== pointerId) return;

      if (event.pointerType === 'mouse' && event.buttons !== 1) {
        onPointerUp(event);
        return;
      }

      const width = event.clientX + offset - currentTarget.getBoundingClientRect().left;

      if (width > 0) {
        onResize(column, width);
      }
    }

    function onPointerUp(event) {
      if (event.pointerId !== pointerId) return;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    }

    event.preventDefault();
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }

  function getCell() {
    if (column.headerRenderer) {
      return /*#__PURE__*/jsxRuntime.jsx(column.headerRenderer, {
        column: column,
        sortColumn: sortColumn,
        sortDirection: sortDirection,
        onSort: onSort,
        allRowsSelected: allRowsSelected,
        onAllRowsSelectionChange: onAllRowsSelectionChange
      });
    }

    if (column.sortable) {
      return /*#__PURE__*/jsxRuntime.jsx(SortableHeaderCell, {
        column: column,
        onSort: onSort,
        sortColumn: sortColumn,
        sortDirection: sortDirection,
        children: column.name
      });
    }

    return column.name;
  }

  const className = getCellClassname(column, column.headerCellClass, column.resizable && cellResizableClassname);
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "columnheader",
    "aria-colindex": column.idx + 1,
    "aria-sort": sortColumn === column.key ? getAriaSort(sortDirection) : undefined,
    "aria-colspan": colSpan,
    className: className,
    style: getCellStyle(column, colSpan),
    onPointerDown: column.resizable ? onPointerDown : undefined,
    children: getCell()
  });
}

function HeaderRow({
  columns,
  rows,
  rowKeyGetter,
  onSelectedRowsChange,
  allRowsSelected,
  onColumnResize,
  sortColumn,
  sortDirection,
  onSort,
  lastFrozenColumnIndex
}) {
  const handleAllRowsSelectionChange = react.useCallback(checked => {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(checked ? rows.map(rowKeyGetter) : undefined);
    onSelectedRowsChange(newSelectedRows);
  }, [onSelectedRowsChange, rows, rowKeyGetter]);
  const cells = [];

  for (let index = 0; index < columns.length; index++) {
    const column = columns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'HEADER'
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    cells.push( /*#__PURE__*/jsxRuntime.jsx(HeaderCell, {
      column: column,
      colSpan: colSpan,
      onResize: onColumnResize,
      allRowsSelected: allRowsSelected,
      onAllRowsSelectionChange: handleAllRowsSelectionChange,
      onSort: onSort,
      sortColumn: sortColumn,
      sortDirection: sortDirection
    }, column.key));
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": 1,
    className: headerRowClassname,
    children: cells
  });
}

const HeaderRow$1 = /*#__PURE__*/react.memo(HeaderRow);

function FilterRow({
  columns,
  filters,
  onFiltersChange
}) {
  function onChange(key, value) {
    const newFilters = { ...filters
    };
    newFilters[key] = value;
    onFiltersChange == null ? void 0 : onFiltersChange(newFilters);
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": 2,
    className: filterRowClassname,
    children: columns.map(column => {
      const {
        key
      } = column;
      return /*#__PURE__*/jsxRuntime.jsx("div", {
        className: getCellClassname(column),
        style: getCellStyle(column),
        children: column.filterRenderer && /*#__PURE__*/jsxRuntime.jsx(column.filterRenderer, {
          column: column,
          value: filters == null ? void 0 : filters[column.key],
          onChange: value => onChange(key, value)
        })
      }, key);
    })
  });
}

const FilterRow$1 = /*#__PURE__*/react.memo(FilterRow);

var css_248z$3 = ".c6ra8a370_0-canary_41,.cq910m070_0-canary_41{background-color:#ccf}.cq910m070_0-canary_41.c6ra8a370_0-canary_41{background-color:#99f}.cjdi1s670_0-canary_41{cursor:move;position:absolute;right:0;bottom:0;width:8px;height:8px;background-color:var(--selection-color)}.cjdi1s670_0-canary_41:hover{width:16px;height:16px;border:2px solid var(--selection-color);background-color:var(--background-color)}";
styleInject(css_248z$3);

const cellCopied = "c6ra8a370_0-canary_41";
const cellCopiedClassname = `rdg-cell-copied ${cellCopied}`;
const cellDraggedOver = "cq910m070_0-canary_41";
const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;
const cellDragHandle = "cjdi1s670_0-canary_41";
const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;

function Cell({
  className,
  column,
  colSpan,
  isCellSelected,
  isCopied,
  isDraggedOver,
  isRowSelected,
  row,
  rowIdx,
  dragHandleProps,
  onRowClick,
  onClick,
  onDoubleClick,
  onContextMenu,
  onRowChange,
  selectCell,
  selectRow,
  ...props
}, ref) {
  const {
    cellClass
  } = column;
  className = getCellClassname(column, typeof cellClass === 'function' ? cellClass(row) : cellClass, className, isCellSelected && cellSelectedClassname, isCopied && cellCopiedClassname, isDraggedOver && cellDraggedOverClassname);

  function selectCellWrapper(openEditor) {
    selectCell({
      idx: column.idx,
      rowIdx
    }, openEditor);
  }

  function handleClick(event) {
    var _column$editorOptions;

    selectCellWrapper((_column$editorOptions = column.editorOptions) == null ? void 0 : _column$editorOptions.editOnClick);
    onRowClick == null ? void 0 : onRowClick(rowIdx, row, column);
    onClick == null ? void 0 : onClick(event);
  }

  function handleContextMenu(event) {
    selectCellWrapper();
    onContextMenu == null ? void 0 : onContextMenu(event);
  }

  function handleDoubleClick(event) {
    selectCellWrapper(true);
    onDoubleClick == null ? void 0 : onDoubleClick(event);
  }

  function handleRowChange(newRow) {
    onRowChange(rowIdx, newRow);
  }

  function onRowSelectionChange(checked, isShiftClick) {
    selectRow({
      rowIdx,
      checked,
      isShiftClick
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    "aria-colspan": colSpan,
    ref: ref,
    className: className,
    style: getCellStyle(column, colSpan),
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onContextMenu: handleContextMenu,
    ...props,
    children: !column.rowGroup && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(column.formatter, {
        column: column,
        rowIdx: rowIdx,
        row: row,
        isCellSelected: isCellSelected,
        isRowSelected: isRowSelected,
        onRowSelectionChange: onRowSelectionChange,
        onRowChange: handleRowChange
      }), dragHandleProps && /*#__PURE__*/jsxRuntime.jsx("div", {
        className: cellDragHandleClassname,
        ...dragHandleProps
      })]
    })
  });
}

const Cell$1 = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Cell));

var css_248z$2 = ".e1ugv4o70_0-canary_41{display:contents}";
styleInject(css_248z$2);

const editorContainer = "e1ugv4o70_0-canary_41";
const editorContainerClassname = `rdg-editor-container ${editorContainer}`;
function EditorContainer({
  row,
  column,
  onRowChange,
  ...props
}) {
  var _column$editorOptions;

  const onClickCapture = useClickOutside(() => onRowChange(row, true));
  if (column.editor === undefined) return null;

  const editor = /*#__PURE__*/jsxRuntime.jsx("div", {
    className: editorContainerClassname,
    onClickCapture: onClickCapture,
    children: /*#__PURE__*/jsxRuntime.jsx(column.editor, {
      row: row,
      column: column,
      onRowChange: onRowChange,
      ...props
    })
  });

  if ((_column$editorOptions = column.editorOptions) != null && _column$editorOptions.createPortal) {
    return /*#__PURE__*/reactDom.createPortal(editor, props.editorPortalTarget);
  }

  return editor;
}

var css_248z$1 = ".cis5rrm70_0-canary_41{padding:0}";
styleInject(css_248z$1);

const cellEditing = "cis5rrm70_0-canary_41";
const cellEditingClassname = `rdg-cell-editing ${cellEditing}`;
function EditCell({
  className,
  column,
  colSpan,
  row,
  rowIdx,
  editorProps,
  ...props
}) {
  const [dimensions, setDimensions] = react.useState(null);
  const cellRef = react.useCallback(node => {
    if (node !== null) {
      const {
        left,
        top
      } = node.getBoundingClientRect();
      setDimensions({
        left,
        top
      });
    }
  }, []);
  const {
    cellClass
  } = column;
  className = getCellClassname(column, cellSelectedClassname, cellEditingClassname, typeof cellClass === 'function' ? cellClass(row) : cellClass, className);

  function getCellContent() {
    var _document$scrollingEl;

    if (dimensions === null) return;
    const {
      scrollTop: docTop,
      scrollLeft: docLeft
    } = (_document$scrollingEl = document.scrollingElement) != null ? _document$scrollingEl : document.documentElement;
    const {
      left,
      top
    } = dimensions;
    const gridLeft = left + docLeft;
    const gridTop = top + docTop;
    return /*#__PURE__*/jsxRuntime.jsx(EditorContainer, { ...editorProps,
      rowIdx: rowIdx,
      column: column,
      left: gridLeft,
      top: gridTop
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": true,
    ref: cellRef,
    className: className,
    style: getCellStyle(column, colSpan),
    ...props,
    children: getCellContent()
  });
}

function Row({
  cellRenderer: CellRenderer = Cell$1,
  className,
  rowIdx,
  isRowSelected,
  copiedCellIdx,
  draggedOverCellIdx,
  lastFrozenColumnIndex,
  row,
  viewportColumns,
  selectedCellProps,
  onRowClick,
  rowClass,
  setDraggedOverRowIdx,
  onMouseEnter,
  top,
  onRowChange,
  selectCell,
  selectRow,
  'aria-rowindex': ariaRowIndex,
  'aria-selected': ariaSelected,
  ...props
}, ref) {
  function handleDragEnter(event) {
    setDraggedOverRowIdx == null ? void 0 : setDraggedOverRowIdx(rowIdx);
    onMouseEnter == null ? void 0 : onMouseEnter(event);
  }

  className = clsx(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, rowClass == null ? void 0 : rowClass(row), className, isRowSelected && rowSelectedClassname, (selectedCellProps == null ? void 0 : selectedCellProps.idx) === -1 && groupRowSelectedClassname);
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'ROW',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    const isCellSelected = (selectedCellProps == null ? void 0 : selectedCellProps.idx) === column.idx;

    if ((selectedCellProps == null ? void 0 : selectedCellProps.mode) === 'EDIT' && isCellSelected) {
      cells.push( /*#__PURE__*/jsxRuntime.jsx(EditCell, {
        rowIdx: rowIdx,
        column: column,
        colSpan: colSpan,
        row: row,
        onKeyDown: selectedCellProps.onKeyDown,
        editorProps: selectedCellProps.editorProps
      }, column.key));
      continue;
    }

    cells.push( /*#__PURE__*/jsxRuntime.jsx(CellRenderer, {
      rowIdx: rowIdx,
      column: column,
      colSpan: colSpan,
      row: row,
      isCopied: copiedCellIdx === column.idx,
      isDraggedOver: draggedOverCellIdx === column.idx,
      isCellSelected: isCellSelected,
      isRowSelected: isRowSelected,
      dragHandleProps: isCellSelected ? selectedCellProps.dragHandleProps : undefined,
      onFocus: isCellSelected ? selectedCellProps.onFocus : undefined,
      onKeyDown: isCellSelected ? selectedCellProps.onKeyDown : undefined,
      onRowClick: onRowClick,
      onRowChange: onRowChange,
      selectCell: selectCell,
      selectRow: selectRow
    }, column.key));
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    "aria-selected": ariaSelected,
    ref: ref,
    className: className,
    onMouseEnter: handleDragEnter,
    style: {
      top
    },
    ...props,
    children: cells
  });
}

const Row$1 = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Row));

function GroupCell({
  id,
  rowIdx,
  groupKey,
  childRows,
  isExpanded,
  isCellSelected,
  isRowSelected,
  column,
  groupColumnIndex,
  selectRow,
  toggleGroup: toggleGroupWrapper
}) {
  function toggleGroup() {
    toggleGroupWrapper(id);
  }

  function onRowSelectionChange(checked) {
    selectRow({
      rowIdx,
      checked,
      isShiftClick: false
    });
  }

  const isLevelMatching = column.rowGroup && groupColumnIndex === column.idx;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    className: getCellClassname(column, isCellSelected && cellSelectedClassname),
    style: { ...getCellStyle(column),
      cursor: isLevelMatching ? 'pointer' : 'default'
    },
    onClick: isLevelMatching ? toggleGroup : undefined,
    children: (!column.rowGroup || groupColumnIndex === column.idx) && column.groupFormatter && /*#__PURE__*/jsxRuntime.jsx(column.groupFormatter, {
      groupKey: groupKey,
      childRows: childRows,
      column: column,
      isExpanded: isExpanded,
      isCellSelected: isCellSelected,
      isRowSelected: isRowSelected,
      onRowSelectionChange: onRowSelectionChange,
      toggleGroup: toggleGroup
    })
  }, column.key);
}

const GroupCell$1 = /*#__PURE__*/react.memo(GroupCell);

function GroupedRow({
  id,
  groupKey,
  viewportColumns,
  childRows,
  rowIdx,
  top,
  level,
  isExpanded,
  selectedCellIdx,
  isRowSelected,
  selectCell,
  selectRow,
  toggleGroup,
  ...props
}) {
  const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? level + 1 : level;

  function selectGroup() {
    selectCell({
      rowIdx,
      idx: -1
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-level": level,
    "aria-expanded": isExpanded,
    className: clsx(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, isRowSelected && rowSelectedClassname, selectedCellIdx === -1 && groupRowSelectedClassname),
    onClick: selectGroup,
    style: {
      top
    },
    ...props,
    children: viewportColumns.map(column => /*#__PURE__*/jsxRuntime.jsx(GroupCell$1, {
      id: id,
      rowIdx: rowIdx,
      groupKey: groupKey,
      childRows: childRows,
      isExpanded: isExpanded,
      isRowSelected: isRowSelected,
      isCellSelected: selectedCellIdx === column.idx,
      column: column,
      groupColumnIndex: idx,
      selectRow: selectRow,
      toggleGroup: toggleGroup
    }, column.key))
  });
}

const GroupRowRenderer = /*#__PURE__*/react.memo(GroupedRow);

function SummaryCell({
  column,
  colSpan,
  row
}) {
  const {
    summaryFormatter: SummaryFormatter,
    summaryCellClass
  } = column;
  const className = getCellClassname(column, typeof summaryCellClass === 'function' ? summaryCellClass(row) : summaryCellClass);
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    className: className,
    style: getCellStyle(column, colSpan),
    children: SummaryFormatter && /*#__PURE__*/jsxRuntime.jsx(SummaryFormatter, {
      column: column,
      row: row
    })
  });
}

const SummaryCell$1 = /*#__PURE__*/react.memo(SummaryCell);

function SummaryRow({
  rowIdx,
  row,
  viewportColumns,
  bottom,
  lastFrozenColumnIndex,
  'aria-rowindex': ariaRowIndex
}) {
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    cells.push( /*#__PURE__*/jsxRuntime.jsx(SummaryCell$1, {
      column: column,
      colSpan: colSpan,
      row: row
    }, column.key));
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    className: `${rowClassname} rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'} ${summaryRowClassname}`,
    style: {
      bottom
    },
    children: cells
  });
}

const SummaryRow$1 = /*#__PURE__*/react.memo(SummaryRow);

var _globalThis$document;
const body = (_globalThis$document = globalThis.document) == null ? void 0 : _globalThis$document.body;

function DataGrid({
  columns: rawColumns,
  rows: rawRows,
  summaryRows,
  rowKeyGetter,
  onRowsChange,
  rowHeight = 35,
  headerRowHeight = rowHeight,
  headerFiltersHeight = 45,
  summaryRowHeight = rowHeight,
  selectedRows,
  onSelectedRowsChange,
  sortColumn,
  sortDirection,
  onSort,
  filters,
  onFiltersChange,
  defaultColumnOptions,
  groupBy: rawGroupBy,
  rowGrouper,
  expandedGroupIds,
  onExpandedGroupIdsChange,
  rowRenderer: RowRenderer = Row$1,
  emptyRowsRenderer: EmptyRowsRenderer,
  onRowClick,
  onScroll,
  onColumnResize,
  onSelectedCellChange,
  onFill,
  onPaste,
  enableFilterRow = false,
  cellNavigationMode = 'NONE',
  enableVirtualization = true,
  editorPortalTarget = body,
  className,
  style,
  rowClass,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy
}, ref) {
  var _summaryRows$length;

  const [scrollTop, setScrollTop] = react.useState(0);
  const [scrollLeft, setScrollLeft] = react.useState(0);
  const [columnWidths, setColumnWidths] = react.useState(() => new Map());
  const [selectedPosition, setSelectedPosition] = react.useState({
    idx: -1,
    rowIdx: -1,
    mode: 'SELECT'
  });
  const [copiedCell, setCopiedCell] = react.useState(null);
  const [isDragging, setDragging] = react.useState(false);
  const [draggedOverRowIdx, setOverRowIdx] = react.useState(undefined);
  const focusSinkRef = react.useRef(null);
  const prevSelectedPosition = react.useRef(selectedPosition);
  const latestDraggedOverRowIdx = react.useRef(draggedOverRowIdx);
  const lastSelectedRowIdx = react.useRef(-1);
  const isCellFocusable = react.useRef(false);
  const selectRowWrapper = useLatestFunc(selectRow);
  const selectCellWrapper = useLatestFunc(selectCell);
  const toggleGroupWrapper = useLatestFunc(toggleGroup);
  const handleFormatterRowChangeWrapper = useLatestFunc(updateRow);
  const [gridRef, gridWidth, gridHeight] = useGridDimensions();
  const headerRowsCount = enableFilterRow ? 2 : 1;
  const summaryRowsCount = (_summaryRows$length = summaryRows == null ? void 0 : summaryRows.length) != null ? _summaryRows$length : 0;
  const totalHeaderHeight = headerRowHeight + (enableFilterRow ? headerFiltersHeight : 0);
  const clientHeight = gridHeight - totalHeaderHeight - summaryRowsCount * summaryRowHeight;
  const isSelectable = selectedRows !== undefined && onSelectedRowsChange !== undefined;
  const {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    totalColumnWidth,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  } = useCalculatedColumns({
    rawColumns,
    columnWidths,
    scrollLeft,
    viewportWidth: gridWidth,
    defaultColumnOptions,
    rawGroupBy: rowGrouper ? rawGroupBy : undefined,
    enableVirtualization
  });
  const {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    rowsCount,
    isGroupRow
  } = useViewportRows({
    rawRows,
    groupBy,
    rowGrouper,
    rowHeight,
    clientHeight,
    scrollTop,
    expandedGroupIds,
    enableVirtualization
  });
  const viewportColumns = useViewportColumns({
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    lastFrozenColumnIndex,
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    summaryRows,
    enableFilterRow,
    isGroupRow
  });
  const hasGroups = groupBy.length > 0 && typeof rowGrouper === 'function';
  const minColIdx = hasGroups ? -1 : 0;
  const enableCellDragAndDrop = hasGroups ? false : onFill !== undefined;
  react.useLayoutEffect(() => {
    if (selectedPosition === prevSelectedPosition.current || selectedPosition.mode === 'EDIT' || !isCellWithinBounds(selectedPosition)) return;
    prevSelectedPosition.current = selectedPosition;
    scrollToCell(selectedPosition);

    if (isCellFocusable.current) {
      isCellFocusable.current = false;
      return;
    }

    focusSinkRef.current.focus({
      preventScroll: true
    });
  });
  react.useImperativeHandle(ref, () => ({
    element: gridRef.current,

    scrollToColumn(idx) {
      scrollToCell({
        idx
      });
    },

    scrollToRow(rowIdx) {
      const {
        current
      } = gridRef;
      if (!current) return;
      current.scrollTo({
        top: rowIdx * rowHeight,
        behavior: 'smooth'
      });
    },

    selectCell
  }));
  const handleColumnResize = react.useCallback((column, width) => {
    setColumnWidths(columnWidths => {
      const newColumnWidths = new Map(columnWidths);
      newColumnWidths.set(column.key, width);
      return newColumnWidths;
    });
    onColumnResize == null ? void 0 : onColumnResize(column.idx, width);
  }, [onColumnResize]);
  const setDraggedOverRowIdx = react.useCallback(rowIdx => {
    setOverRowIdx(rowIdx);
    latestDraggedOverRowIdx.current = rowIdx;
  }, []);

  function selectRow({
    rowIdx,
    checked,
    isShiftClick
  }) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);
    const row = rows[rowIdx];

    if (isGroupRow(row)) {
      for (const childRow of row.childRows) {
        const rowKey = rowKeyGetter(childRow);

        if (checked) {
          newSelectedRows.add(rowKey);
        } else {
          newSelectedRows.delete(rowKey);
        }
      }

      onSelectedRowsChange(newSelectedRows);
      return;
    }

    const rowKey = rowKeyGetter(row);

    if (checked) {
      newSelectedRows.add(rowKey);
      const previousRowIdx = lastSelectedRowIdx.current;
      lastSelectedRowIdx.current = rowIdx;

      if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx) {
        const step = Math.sign(rowIdx - previousRowIdx);

        for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
          const row = rows[i];
          if (isGroupRow(row)) continue;
          newSelectedRows.add(rowKeyGetter(row));
        }
      }
    } else {
      newSelectedRows.delete(rowKey);
      lastSelectedRowIdx.current = -1;
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function toggleGroup(expandedGroupId) {
    if (!onExpandedGroupIdsChange) return;
    const newExpandedGroupIds = new Set(expandedGroupIds);

    if (newExpandedGroupIds.has(expandedGroupId)) {
      newExpandedGroupIds.delete(expandedGroupId);
    } else {
      newExpandedGroupIds.add(expandedGroupId);
    }

    onExpandedGroupIdsChange(newExpandedGroupIds);
  }

  function onGridFocus() {
    if (!isCellWithinBounds(selectedPosition)) {
      const initialPosition = {
        idx: 0,
        rowIdx: 0,
        mode: 'SELECT'
      };

      if (isCellWithinBounds(initialPosition)) {
        setSelectedPosition(initialPosition);
      }
    } else {
      scrollToCell(selectedPosition);
    }
  }

  function handleKeyDown(event) {
    const {
      key,
      keyCode
    } = event;
    const row = rows[selectedPosition.rowIdx];

    if (onPaste && isCtrlKeyHeldDown(event) && isCellWithinBounds(selectedPosition) && !isGroupRow(row) && selectedPosition.idx !== -1 && selectedPosition.mode === 'SELECT') {
      const cKey = 67;
      const vKey = 86;

      if (keyCode === cKey) {
        handleCopy();
        return;
      }

      if (keyCode === vKey) {
        handlePaste();
        return;
      }
    }

    if (isCellWithinBounds(selectedPosition) && isGroupRow(row) && selectedPosition.idx === -1 && (key === 'ArrowLeft' && row.isExpanded || key === 'ArrowRight' && !row.isExpanded)) {
      event.preventDefault();
      toggleGroup(row.id);
      return;
    }

    switch (event.key) {
      case 'Escape':
        setCopiedCell(null);
        closeEditor();
        return;

      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'Tab':
      case 'Home':
      case 'End':
      case 'PageUp':
      case 'PageDown':
        navigate(event);
        break;

      default:
        handleCellInput(event);
        break;
    }
  }

  function handleFocus() {
    isCellFocusable.current = true;
  }

  function handleScroll(event) {
    const {
      scrollTop,
      scrollLeft
    } = event.currentTarget;
    setScrollTop(scrollTop);
    setScrollLeft(scrollLeft);
    onScroll == null ? void 0 : onScroll(event);
  }

  function getRawRowIdx(rowIdx) {
    return hasGroups ? rawRows.indexOf(rows[rowIdx]) : rowIdx;
  }

  function updateRow(rowIdx, row) {
    if (typeof onRowsChange !== 'function') return;
    const updatedRows = [...rawRows];
    updatedRows[rowIdx] = row;
    onRowsChange(updatedRows, {
      indexes: [rowIdx],
      column: columns[selectedPosition.idx]
    });
  }

  function commitEditorChanges() {
    var _columns$selectedPosi;

    if (((_columns$selectedPosi = columns[selectedPosition.idx]) == null ? void 0 : _columns$selectedPosi.editor) === undefined || selectedPosition.mode === 'SELECT' || selectedPosition.row === selectedPosition.originalRow) {
      return;
    }

    const rowIdx = getRawRowIdx(selectedPosition.rowIdx);
    updateRow(rowIdx, selectedPosition.row);
  }

  function handleCopy() {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    setCopiedCell({
      row: rawRows[getRawRowIdx(rowIdx)],
      columnKey: columns[idx].key
    });
  }

  function handlePaste() {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const targetRow = rawRows[getRawRowIdx(rowIdx)];

    if (!onPaste || !onRowsChange || copiedCell === null || !isCellEditable(selectedPosition)) {
      return;
    }

    const updatedTargetRow = onPaste({
      sourceRow: copiedCell.row,
      sourceColumnKey: copiedCell.columnKey,
      targetRow,
      targetColumnKey: columns[idx].key
    });
    updateRow(rowIdx, updatedTargetRow);
  }

  function handleCellInput(event) {
    var _column$editorOptions;

    if (!isCellWithinBounds(selectedPosition)) return;
    const row = rows[selectedPosition.rowIdx];
    if (isGroupRow(row)) return;
    const {
      key
    } = event;
    const column = columns[selectedPosition.idx];

    if (selectedPosition.mode === 'EDIT') {
      if (key === 'Enter') {
        commitEditorChanges();
        closeEditor();
      }

      return;
    }

    (_column$editorOptions = column.editorOptions) == null ? void 0 : _column$editorOptions.onCellKeyDown == null ? void 0 : _column$editorOptions.onCellKeyDown(event);
    if (event.isDefaultPrevented()) return;

    if (isCellEditable(selectedPosition) && isDefaultCellInput(event)) {
      setSelectedPosition(({
        idx,
        rowIdx
      }) => ({
        idx,
        rowIdx,
        key,
        mode: 'EDIT',
        row,
        originalRow: row
      }));
    }
  }

  function handleDragEnd() {
    const overRowIdx = latestDraggedOverRowIdx.current;
    if (overRowIdx === undefined || !onFill || !onRowsChange) return;
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const sourceRow = rawRows[rowIdx];
    const startRowIndex = rowIdx < overRowIdx ? rowIdx + 1 : overRowIdx;
    const endRowIndex = rowIdx < overRowIdx ? overRowIdx + 1 : rowIdx;
    const targetRows = rawRows.slice(startRowIndex, endRowIndex);
    const column = columns[idx];
    const updatedTargetRows = onFill({
      columnKey: column.key,
      sourceRow,
      targetRows
    });
    const updatedRows = [...rawRows];
    const indexes = [];

    for (let i = startRowIndex; i < endRowIndex; i++) {
      updatedRows[i] = updatedTargetRows[i - startRowIndex];
      indexes.push(i);
    }

    onRowsChange(updatedRows, {
      indexes,
      column
    });
    setDraggedOverRowIdx(undefined);
  }

  function handleMouseDown(event) {
    if (event.buttons !== 1) return;
    setDragging(true);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseup', onMouseUp);

    function onMouseOver(event) {
      if (event.buttons !== 1) onMouseUp();
    }

    function onMouseUp() {
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseup', onMouseUp);
      setDragging(false);
      handleDragEnd();
    }
  }

  function handleDoubleClick(event) {
    event.stopPropagation();
    if (!onFill || !onRowsChange) return;
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const sourceRow = rawRows[rowIdx];
    const targetRows = rawRows.slice(rowIdx + 1);
    const column = columns[idx];
    const updatedTargetRows = onFill({
      columnKey: column.key,
      sourceRow,
      targetRows
    });
    const updatedRows = [...rawRows];
    const indexes = [];

    for (let i = rowIdx + 1; i < updatedRows.length; i++) {
      updatedRows[i] = updatedTargetRows[i - rowIdx - 1];
      indexes.push(i);
    }

    onRowsChange(updatedRows, {
      indexes,
      column
    });
  }

  function handleEditorRowChange(row, commitChanges) {
    if (selectedPosition.mode === 'SELECT') return;

    if (commitChanges) {
      updateRow(getRawRowIdx(selectedPosition.rowIdx), row);
      closeEditor();
    } else {
      setSelectedPosition(position => ({ ...position,
        row
      }));
    }
  }

  function handleOnClose(commitChanges) {
    if (commitChanges) {
      commitEditorChanges();
    }

    closeEditor();
  }

  function isCellWithinBounds({
    idx,
    rowIdx
  }) {
    return rowIdx >= 0 && rowIdx < rows.length && idx >= minColIdx && idx < columns.length;
  }

  function isCellEditable(position) {
    return isCellWithinBounds(position) && isSelectedCellEditable({
      columns,
      rows,
      selectedPosition: position,
      isGroupRow
    });
  }

  function selectCell(position, enableEditor = false) {
    if (!isCellWithinBounds(position)) return;
    commitEditorChanges();

    if (enableEditor && isCellEditable(position)) {
      const row = rows[position.rowIdx];
      setSelectedPosition({ ...position,
        mode: 'EDIT',
        key: null,
        row,
        originalRow: row
      });
    } else {
      setSelectedPosition({ ...position,
        mode: 'SELECT'
      });
    }

    onSelectedCellChange == null ? void 0 : onSelectedCellChange({ ...position
    });
  }

  function closeEditor() {
    if (selectedPosition.mode === 'SELECT') return;
    setSelectedPosition(({
      idx,
      rowIdx
    }) => ({
      idx,
      rowIdx,
      mode: 'SELECT'
    }));
  }

  function scrollToCell({
    idx,
    rowIdx
  }) {
    const {
      current
    } = gridRef;
    if (!current) return;

    if (typeof idx === 'number' && idx > lastFrozenColumnIndex) {
      var _rowIdx;

      (_rowIdx = rowIdx) != null ? _rowIdx : rowIdx = selectedPosition.rowIdx;
      if (!isCellWithinBounds({
        rowIdx,
        idx
      })) return;
      const {
        clientWidth
      } = current;
      const column = columns[idx];
      const {
        left,
        width
      } = columnMetrics.get(column);
      let right = left + width;
      const row = rows[rowIdx];

      if (!isGroupRow(row)) {
        const colSpan = getColSpan(column, lastFrozenColumnIndex, {
          type: 'ROW',
          row
        });

        if (colSpan !== undefined) {
          const {
            left,
            width
          } = columnMetrics.get(columns[column.idx + colSpan - 1]);
          right = left + width;
        }
      }

      const isCellAtLeftBoundary = left < scrollLeft + totalFrozenColumnWidth;
      const isCellAtRightBoundary = right > clientWidth + scrollLeft;

      if (isCellAtLeftBoundary) {
        current.scrollLeft = left - totalFrozenColumnWidth;
      } else if (isCellAtRightBoundary) {
        current.scrollLeft = right - clientWidth;
      }
    }

    if (typeof rowIdx === 'number') {
      if (rowIdx * rowHeight < scrollTop) {
        current.scrollTop = rowIdx * rowHeight;
      } else if ((rowIdx + 1) * rowHeight > scrollTop + clientHeight) {
        current.scrollTop = (rowIdx + 1) * rowHeight - clientHeight;
      }
    }
  }

  function getNextPosition(key, ctrlKey, shiftKey) {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const row = rows[rowIdx];
    const isRowSelected = isCellWithinBounds(selectedPosition) && idx === -1;

    if (key === 'ArrowLeft' && isRowSelected && isGroupRow(row) && !row.isExpanded && row.level !== 0) {
      let parentRowIdx = -1;

      for (let i = selectedPosition.rowIdx - 1; i >= 0; i--) {
        const parentRow = rows[i];

        if (isGroupRow(parentRow) && parentRow.id === row.parentId) {
          parentRowIdx = i;
          break;
        }
      }

      if (parentRowIdx !== -1) {
        return {
          idx,
          rowIdx: parentRowIdx
        };
      }
    }

    switch (key) {
      case 'ArrowUp':
        return {
          idx,
          rowIdx: rowIdx - 1
        };

      case 'ArrowDown':
        return {
          idx,
          rowIdx: rowIdx + 1
        };

      case 'ArrowLeft':
        return {
          idx: idx - 1,
          rowIdx
        };

      case 'ArrowRight':
        return {
          idx: idx + 1,
          rowIdx
        };

      case 'Tab':
        if (selectedPosition.idx === -1 && selectedPosition.rowIdx === -1) {
          return shiftKey ? {
            idx: columns.length - 1,
            rowIdx: rows.length - 1
          } : {
            idx: 0,
            rowIdx: 0
          };
        }

        return {
          idx: idx + (shiftKey ? -1 : 1),
          rowIdx
        };

      case 'Home':
        if (isRowSelected) return {
          idx,
          rowIdx: 0
        };
        return ctrlKey ? {
          idx: 0,
          rowIdx: 0
        } : {
          idx: 0,
          rowIdx
        };

      case 'End':
        if (isRowSelected) return {
          idx,
          rowIdx: rows.length - 1
        };
        return ctrlKey ? {
          idx: columns.length - 1,
          rowIdx: rows.length - 1
        } : {
          idx: columns.length - 1,
          rowIdx
        };

      case 'PageUp':
        return {
          idx,
          rowIdx: rowIdx - Math.floor(clientHeight / rowHeight)
        };

      case 'PageDown':
        return {
          idx,
          rowIdx: rowIdx + Math.floor(clientHeight / rowHeight)
        };

      default:
        return selectedPosition;
    }
  }

  function navigate(event) {
    if (selectedPosition.mode === 'EDIT') {
      var _columns$selectedPosi2, _columns$selectedPosi3;

      const onNavigation = (_columns$selectedPosi2 = (_columns$selectedPosi3 = columns[selectedPosition.idx].editorOptions) == null ? void 0 : _columns$selectedPosi3.onNavigation) != null ? _columns$selectedPosi2 : onEditorNavigation;
      if (!onNavigation(event)) return;
    }

    const {
      key,
      shiftKey
    } = event;
    let mode = cellNavigationMode;

    if (key === 'Tab') {
      if (canExitGrid({
        shiftKey,
        cellNavigationMode,
        columns,
        rowsCount: rows.length,
        selectedPosition
      })) {
        commitEditorChanges();
        return;
      }

      mode = cellNavigationMode === 'NONE' ? 'CHANGE_ROW' : cellNavigationMode;
    }

    event.preventDefault();
    const ctrlKey = isCtrlKeyHeldDown(event);
    const nextPosition = getNextSelectedCellPosition({
      columns,
      colSpanColumns,
      rows,
      lastFrozenColumnIndex,
      cellNavigationMode: mode,
      currentPosition: selectedPosition,
      nextPosition: getNextPosition(key, ctrlKey, shiftKey),
      isCellWithinBounds,
      isGroupRow
    });
    selectCell(nextPosition);
  }

  function getDraggedOverCellIdx(currentRowIdx) {
    if (draggedOverRowIdx === undefined) return;
    const {
      rowIdx
    } = selectedPosition;
    const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
    return isDraggedOver ? selectedPosition.idx : undefined;
  }

  function getSelectedCellProps(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx) return;

    if (selectedPosition.mode === 'EDIT') {
      return {
        mode: 'EDIT',
        idx: selectedPosition.idx,
        onKeyDown: handleKeyDown,
        editorProps: {
          editorPortalTarget,
          rowHeight,
          row: selectedPosition.row,
          onRowChange: handleEditorRowChange,
          onClose: handleOnClose
        }
      };
    }

    return {
      mode: 'SELECT',
      idx: selectedPosition.idx,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      dragHandleProps: enableCellDragAndDrop && isCellEditable(selectedPosition) ? {
        onMouseDown: handleMouseDown,
        onDoubleClick: handleDoubleClick
      } : undefined
    };
  }

  function getViewportRows() {
    const rowElements = [];
    let startRowIndex = 0;

    for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
      const row = rows[rowIdx];
      const top = rowIdx * rowHeight + totalHeaderHeight;

      if (isGroupRow(row)) {
        ({
          startRowIndex
        } = row);
        rowElements.push( /*#__PURE__*/jsxRuntime.jsx(GroupRowRenderer, {
          "aria-level": row.level + 1,
          "aria-setsize": row.setSize,
          "aria-posinset": row.posInSet + 1,
          "aria-rowindex": headerRowsCount + startRowIndex + 1,
          id: row.id,
          groupKey: row.groupKey,
          viewportColumns: viewportColumns,
          childRows: row.childRows,
          rowIdx: rowIdx,
          top: top,
          level: row.level,
          isExpanded: row.isExpanded,
          selectedCellIdx: selectedPosition.rowIdx === rowIdx ? selectedPosition.idx : undefined,
          isRowSelected: isSelectable && row.childRows.every(cr => selectedRows == null ? void 0 : selectedRows.has(rowKeyGetter(cr))),
          onFocus: selectedPosition.rowIdx === rowIdx ? handleFocus : undefined,
          onKeyDown: selectedPosition.rowIdx === rowIdx ? handleKeyDown : undefined,
          selectCell: selectCellWrapper,
          selectRow: selectRowWrapper,
          toggleGroup: toggleGroupWrapper
        }, row.id));
        continue;
      }

      startRowIndex++;
      let key = hasGroups ? startRowIndex : rowIdx;
      let isRowSelected = false;

      if (typeof rowKeyGetter === 'function') {
        var _selectedRows$has;

        key = rowKeyGetter(row);
        isRowSelected = (_selectedRows$has = selectedRows == null ? void 0 : selectedRows.has(key)) != null ? _selectedRows$has : false;
      }

      rowElements.push( /*#__PURE__*/jsxRuntime.jsx(RowRenderer, {
        "aria-rowindex": headerRowsCount + (hasGroups ? startRowIndex : rowIdx) + 1,
        "aria-selected": isSelectable ? isRowSelected : undefined,
        rowIdx: rowIdx,
        row: row,
        viewportColumns: viewportColumns,
        isRowSelected: isRowSelected,
        onRowClick: onRowClick,
        rowClass: rowClass,
        top: top,
        copiedCellIdx: copiedCell !== null && copiedCell.row === row ? columns.findIndex(c => c.key === copiedCell.columnKey) : undefined,
        draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
        setDraggedOverRowIdx: isDragging ? setDraggedOverRowIdx : undefined,
        lastFrozenColumnIndex: lastFrozenColumnIndex,
        selectedCellProps: getSelectedCellProps(rowIdx),
        onRowChange: handleFormatterRowChangeWrapper,
        selectCell: selectCellWrapper,
        selectRow: selectRowWrapper
      }, key));
    }

    return rowElements;
  }

  if (selectedPosition.idx >= columns.length || selectedPosition.rowIdx >= rows.length) {
    setSelectedPosition({
      idx: -1,
      rowIdx: -1,
      mode: 'SELECT'
    });
    setDraggedOverRowIdx(undefined);
  }

  if (selectedPosition.mode === 'EDIT' && rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) {
    closeEditor();
  }

  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    role: hasGroups ? 'treegrid' : 'grid',
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-multiselectable": isSelectable ? true : undefined,
    "aria-colcount": columns.length,
    "aria-rowcount": headerRowsCount + rowsCount + summaryRowsCount,
    className: clsx(rootClassname, className, isDragging && viewportDraggingClassname),
    style: { ...style,
      '--header-row-height': `${headerRowHeight}px`,
      '--filter-row-height': `${headerFiltersHeight}px`,
      '--row-width': `${totalColumnWidth}px`,
      '--row-height': `${rowHeight}px`,
      '--summary-row-height': `${summaryRowHeight}px`,
      ...layoutCssVars
    },
    ref: gridRef,
    onScroll: handleScroll,
    children: [/*#__PURE__*/jsxRuntime.jsx(HeaderRow$1, {
      rowKeyGetter: rowKeyGetter,
      rows: rawRows,
      columns: viewportColumns,
      onColumnResize: handleColumnResize,
      allRowsSelected: (selectedRows == null ? void 0 : selectedRows.size) === rawRows.length,
      onSelectedRowsChange: onSelectedRowsChange,
      sortColumn: sortColumn,
      sortDirection: sortDirection,
      onSort: onSort,
      lastFrozenColumnIndex: lastFrozenColumnIndex
    }), enableFilterRow && /*#__PURE__*/jsxRuntime.jsx(FilterRow$1, {
      columns: viewportColumns,
      filters: filters,
      onFiltersChange: onFiltersChange
    }), rows.length === 0 && EmptyRowsRenderer ? /*#__PURE__*/jsxRuntime.jsx(EmptyRowsRenderer, {}) : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("div", {
        ref: focusSinkRef,
        tabIndex: 0,
        className: focusSinkClassname,
        onKeyDown: handleKeyDown,
        onFocus: onGridFocus
      }), /*#__PURE__*/jsxRuntime.jsx("div", {
        style: {
          height: Math.max(rows.length * rowHeight, clientHeight)
        }
      }), getViewportRows(), summaryRows == null ? void 0 : summaryRows.map((row, rowIdx) => /*#__PURE__*/jsxRuntime.jsx(SummaryRow$1, {
        "aria-rowindex": headerRowsCount + rowsCount + rowIdx + 1,
        rowIdx: rowIdx,
        row: row,
        bottom: summaryRowHeight * (summaryRows.length - 1 - rowIdx),
        viewportColumns: viewportColumns,
        lastFrozenColumnIndex: lastFrozenColumnIndex
      }, rowIdx))]
    })]
  });
}

const DataGrid$1 = /*#__PURE__*/react.forwardRef(DataGrid);

var css_248z = ".t1u15qzo70_0-canary_41{appearance:none;box-sizing:border-box;width:100%;height:100%;padding:0 6px;border:2px solid #ccc;vertical-align:top;color:var(--color);background-color:var(--background-color);font-family:inherit;font-size:var(--font-size)}.t1u15qzo70_0-canary_41:focus{border-color:var(--selection-color);outline:none}.t1u15qzo70_0-canary_41::placeholder{color:#999;opacity:1}";
styleInject(css_248z);

const textEditor = "t1u15qzo70_0-canary_41";
const textEditorClassname = `rdg-text-editor ${textEditor}`;

function autoFocusAndSelect(input) {
  input == null ? void 0 : input.focus();
  input == null ? void 0 : input.select();
}

function TextEditor({
  row,
  column,
  onRowChange,
  onClose
}) {
  return /*#__PURE__*/jsxRuntime.jsx("input", {
    className: textEditorClassname,
    ref: autoFocusAndSelect,
    value: row[column.key],
    onChange: event => onRowChange({ ...row,
      [column.key]: event.target.value
    }),
    onBlur: () => onClose(true)
  });
}

exports.Cell = Cell$1;
exports.Row = Row$1;
exports.SELECT_COLUMN_KEY = SELECT_COLUMN_KEY;
exports.SelectCellFormatter = SelectCellFormatter;
exports.SelectColumn = SelectColumn;
exports.SortableHeaderCell = SortableHeaderCell;
exports.TextEditor = TextEditor;
exports.ToggleGroupFormatter = ToggleGroupFormatter;
exports.ValueFormatter = ValueFormatter;
exports.default = DataGrid$1;
//# sourceMappingURL=bundle.cjs.map
