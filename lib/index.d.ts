import type { ReactElement } from 'react';
import type { RefAttributes } from 'react';

export declare interface CalculatedColumn<TRow, TSummaryRow = unknown> extends Column<TRow, TSummaryRow> {
    idx: number;
    resizable: boolean;
    sortable: boolean;
    frozen: boolean;
    isLastFrozenColumn: boolean;
    rowGroup: boolean;
    formatter: React.ComponentType<FormatterProps<TRow, TSummaryRow>>;
}

export declare const Cell: <R, SR = unknown>(props: CellRendererProps<R, SR> & RefAttributes<HTMLDivElement>) => JSX.Element;

export declare type CellNavigationMode = 'NONE' | 'CHANGE_ROW' | 'LOOP_OVER_ROW';

export declare interface CellRendererProps<TRow, TSummaryRow = unknown> extends Omit_2<React.HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
    rowIdx: number;
    column: CalculatedColumn<TRow, TSummaryRow>;
    colSpan?: number;
    row: TRow;
    isCopied: boolean;
    isDraggedOver: boolean;
    isCellSelected: boolean;
    isRowSelected: boolean;
    dragHandleProps?: Pick<React.HTMLAttributes<HTMLDivElement>, 'onMouseDown' | 'onDoubleClick'>;
    onRowChange: (rowIdx: number, newRow: TRow) => void;
    onRowClick?: (rowIdx: number, row: TRow, column: CalculatedColumn<TRow, TSummaryRow>) => void;
    selectCell: (position: Position, enableEditor?: boolean) => void;
    selectRow: (selectRowEvent: SelectRowEvent) => void;
}

export declare type ColSpanArgs<R, SR> = {
    type: 'HEADER' | 'FILTER';
} | {
    type: 'ROW';
    row: R;
} | {
    type: 'SUMMARY';
    row: SR;
};

export declare interface Column<TRow, TSummaryRow = unknown> {
    /** The name of the column. By default it will be displayed in the header cell */
    name: string | ReactElement;
    /** A unique key to distinguish each column */
    key: string;
    /** Column width. If not specified, it will be determined automatically based on grid width and specified widths of other columns */
    width?: number | string;
    /** Minimum column width in px. */
    minWidth?: number;
    /** Maximum column width in px. */
    maxWidth?: number;
    cellClass?: string | ((row: TRow) => string | undefined);
    headerCellClass?: string;
    summaryCellClass?: string | ((row: TSummaryRow) => string);
    /** Formatter to be used to render the cell content */
    formatter?: React.ComponentType<FormatterProps<TRow, TSummaryRow>>;
    /** Formatter to be used to render the summary cell content */
    summaryFormatter?: React.ComponentType<SummaryFormatterProps<TSummaryRow, TRow>>;
    /** Formatter to be used to render the group cell content */
    groupFormatter?: React.ComponentType<GroupFormatterProps<TRow, TSummaryRow>>;
    /** Enables cell editing. If set and no editor property specified, then a textinput will be used as the cell editor */
    editable?: boolean | ((row: TRow) => boolean);
    colSpan?: (args: ColSpanArgs<TRow, TSummaryRow>) => number | undefined;
    /** Determines whether column is frozen or not */
    frozen?: boolean;
    /** Enable resizing of a column */
    resizable?: boolean;
    /** Enable sorting of a column */
    sortable?: boolean;
    /** Sets the column sort order to be descending instead of ascending the first time the column is sorted */
    sortDescendingFirst?: boolean;
    /** Editor to be rendered when cell of column is being edited. If set, then the column is automatically set to be editable */
    editor?: React.ComponentType<EditorProps<TRow, TSummaryRow>>;
    editorOptions?: {
        /** @default false */
        createPortal?: boolean;
        /** @default false */
        editOnClick?: boolean;
        /** Prevent default to cancel editing */
        onCellKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
        /** Control the default cell navigation behavior while the editor is open */
        onNavigation?: (event: React.KeyboardEvent<HTMLDivElement>) => boolean;
    };
    /** Header renderer for each header cell */
    headerRenderer?: React.ComponentType<HeaderRendererProps<TRow, TSummaryRow>>;
    /** Component to be used to filter the data of the column */
    filterRenderer?: React.ComponentType<FilterRendererProps<TRow, any, TSummaryRow>>;
}

export declare interface DataGridHandle {
    element: HTMLDivElement | null;
    scrollToColumn: (colIdx: number) => void;
    scrollToRow: (rowIdx: number) => void;
    selectCell: (position: Position, openEditor?: boolean) => void;
}

export declare interface DataGridProps<R, SR = unknown> extends SharedDivProps {
    /**
     * Grid and data Props
     */
    /** An array of objects representing each column on the grid */
    columns: readonly Column<R, SR>[];
    /** A function called for each rendered row that should return a plain key/value pair object */
    rows: readonly R[];
    /**
     * Rows to be pinned at the bottom of the rows view for summary, the vertical scroll bar will not scroll these rows.
     * Bottom horizontal scroll bar can move the row left / right. Or a customized row renderer can be used to disabled the scrolling support.
     */
    summaryRows?: readonly SR[];
    /** The getter should return a unique key for each row */
    rowKeyGetter?: (row: R) => React.Key;
    onRowsChange?: (rows: R[], data: RowsChangeData<R, SR>) => void;
    /**
     * Dimensions props
     */
    /** The height of each row in pixels */
    rowHeight?: number;
    /** The height of the header row in pixels */
    headerRowHeight?: number;
    /** The height of the header filter row in pixels */
    headerFiltersHeight?: number;
    /** The height of each summary row in pixels */
    summaryRowHeight?: number;
    /**
     * Feature props
     */
    /** Set of selected row keys */
    selectedRows?: ReadonlySet<React.Key>;
    /** Function called whenever row selection is changed */
    onSelectedRowsChange?: (selectedRows: Set<React.Key>) => void;
    /** The key of the column which is currently being sorted */
    sortColumn?: string;
    /** The direction to sort the sortColumn*/
    sortDirection?: SortDirection;
    /** Function called whenever grid is sorted*/
    onSort?: (columnKey: string, direction: SortDirection) => void;
    filters?: Readonly<Filters>;
    onFiltersChange?: (filters: Filters) => void;
    defaultColumnOptions?: DefaultColumnOptions<R, SR>;
    groupBy?: readonly string[];
    rowGrouper?: (rows: readonly R[], columnKey: string) => Record<string, readonly R[]>;
    expandedGroupIds?: ReadonlySet<unknown>;
    onExpandedGroupIdsChange?: (expandedGroupIds: Set<unknown>) => void;
    onFill?: (event: FillEvent<R>) => R[];
    onPaste?: (event: PasteEvent<R>) => R;
    /**
     * Custom renderers
     */
    rowRenderer?: React.ComponentType<RowRendererProps<R, SR>>;
    emptyRowsRenderer?: React.ComponentType;
    /**
     * Event props
     */
    /** Function called whenever a row is clicked */
    onRowClick?: (rowIdx: number, row: R, column: CalculatedColumn<R, SR>) => void;
    /** Called when the grid is scrolled */
    onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    /** Called when a column is resized */
    onColumnResize?: (idx: number, width: number) => void;
    /** Function called whenever selected cell is changed */
    onSelectedCellChange?: (position: Position) => void;
    /**
     * Toggles and modes
     */
    /** Toggles whether filters row is displayed or not */
    enableFilterRow?: boolean;
    cellNavigationMode?: CellNavigationMode;
    enableVirtualization?: boolean;
    /**
     * Miscellaneous
     */
    /** The node where the editor portal should mount. */
    editorPortalTarget?: Element;
    rowClass?: (row: R) => string | undefined;
}

declare const _default: <R, SR = unknown>(props: DataGridProps<R, SR> & RefAttributes<DataGridHandle>) => JSX.Element;
export default _default;

declare type DefaultColumnOptions<R, SR> = Pick<Column<R, SR>, 'formatter' | 'minWidth' | 'resizable' | 'sortable'>;

declare interface EditCellProps<TRow> extends SelectedCellPropsBase {
    mode: 'EDIT';
    editorProps: SharedEditorProps<TRow>;
}

export declare interface EditorProps<TRow, TSummaryRow = unknown> extends SharedEditorProps<TRow> {
    rowIdx: number;
    column: Readonly<CalculatedColumn<TRow, TSummaryRow>>;
    top: number;
    left: number;
}

export declare interface FillEvent<TRow> {
    columnKey: string;
    sourceRow: TRow;
    targetRows: TRow[];
}

export declare interface FilterRendererProps<TRow, TFilterValue = unknown, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    value: TFilterValue;
    onChange: (value: TFilterValue) => void;
}

export declare type Filters = Record<string, any>;

export declare interface FormatterProps<TRow = any, TSummaryRow = any> {
    rowIdx: number;
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    isCellSelected: boolean;
    isRowSelected: boolean;
    onRowSelectionChange: (checked: boolean, isShiftClick: boolean) => void;
    onRowChange: (row: Readonly<TRow>) => void;
}

export declare interface GroupFormatterProps<TRow, TSummaryRow = unknown> {
    groupKey: unknown;
    column: CalculatedColumn<TRow, TSummaryRow>;
    childRows: readonly TRow[];
    isExpanded: boolean;
    isCellSelected: boolean;
    isRowSelected: boolean;
    onRowSelectionChange: (checked: boolean) => void;
    toggleGroup: () => void;
}

declare interface HeaderCellProps<R, SR> extends SharedHeaderRowProps<R, SR> {
    column: CalculatedColumn<R, SR>;
    colSpan?: number;
    onResize: (column: CalculatedColumn<R, SR>, width: number) => void;
    onAllRowsSelectionChange: (checked: boolean) => void;
}

export declare interface HeaderRendererProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    sortColumn?: string;
    sortDirection?: SortDirection;
    onSort?: (columnKey: string, direction: SortDirection) => void;
    allRowsSelected: boolean;
    onAllRowsSelectionChange: (checked: boolean) => void;
}

declare interface HeaderRowProps<R, SR> extends SharedDataGridProps<R, SR> {
    columns: readonly CalculatedColumn<R, SR>[];
    allRowsSelected: boolean;
    onColumnResize: (column: CalculatedColumn<R, SR>, width: number) => void;
    lastFrozenColumnIndex: number;
}

declare type Omit_2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export declare interface PasteEvent<TRow> {
    sourceColumnKey: string;
    sourceRow: TRow;
    targetColumnKey: string;
    targetRow: TRow;
}

declare interface Position {
    idx: number;
    rowIdx: number;
}

declare interface Props<R, SR> extends SharedHeaderCellProps<R, SR> {
    children: React.ReactNode;
}

export declare const Row: <R, SR = unknown>(props: RowRendererProps<R, SR> & RefAttributes<HTMLDivElement>) => JSX.Element;

export declare interface RowRendererProps<TRow, TSummaryRow = unknown> extends Omit_2<React.HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
    viewportColumns: readonly CalculatedColumn<TRow, TSummaryRow>[];
    row: TRow;
    cellRenderer?: React.ComponentType<CellRendererProps<TRow, TSummaryRow>>;
    rowIdx: number;
    copiedCellIdx?: number;
    draggedOverCellIdx?: number;
    lastFrozenColumnIndex: number;
    isRowSelected: boolean;
    top: number;
    selectedCellProps?: EditCellProps<TRow> | SelectedCellProps;
    onRowChange: (rowIdx: number, row: TRow) => void;
    onRowClick?: (rowIdx: number, row: TRow, column: CalculatedColumn<TRow, TSummaryRow>) => void;
    rowClass?: (row: TRow) => string | undefined;
    setDraggedOverRowIdx?: (overRowIdx: number) => void;
    selectCell: (position: Position, enableEditor?: boolean) => void;
    selectRow: (selectRowEvent: SelectRowEvent) => void;
}

export declare interface RowsChangeData<R, SR = unknown> {
    indexes: number[];
    column: CalculatedColumn<R, SR>;
}

export declare const SELECT_COLUMN_KEY = "select-row";

export declare function SelectCellFormatter({ value, tabIndex, isCellSelected, disabled, onClick, onChange, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy }: SelectCellFormatterProps): JSX.Element;

declare interface SelectCellFormatterProps extends SharedInputProps {
    isCellSelected?: boolean;
    value: boolean;
    onChange: (value: boolean, isShiftClick: boolean) => void;
}

export declare const SelectColumn: Column<any, any>;

declare interface SelectedCellProps extends SelectedCellPropsBase {
    mode: 'SELECT';
    onFocus: () => void;
    dragHandleProps?: Pick<React.HTMLAttributes<HTMLDivElement>, 'onMouseDown' | 'onDoubleClick'>;
}

declare interface SelectedCellPropsBase {
    idx: number;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export declare interface SelectRowEvent {
    rowIdx: number;
    checked: boolean;
    isShiftClick: boolean;
}

declare type SharedDataGridProps<R, SR> = Pick<DataGridProps<R, SR>, 'rows' | 'onSelectedRowsChange' | 'sortColumn' | 'sortDirection' | 'onSort' | 'rowKeyGetter'>;

declare type SharedDivProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'className' | 'style'>;

declare interface SharedEditorProps<TRow> {
    row: Readonly<TRow>;
    rowHeight: number;
    editorPortalTarget: Element;
    onRowChange: (row: Readonly<TRow>, commitChanges?: boolean) => void;
    onClose: (commitChanges?: boolean) => void;
}

declare type SharedHeaderCellProps<R, SR> = Pick<HeaderCellProps<R, SR>, 'column' | 'sortColumn' | 'sortDirection' | 'onSort'>;

declare type SharedHeaderRowProps<R, SR> = Pick<HeaderRowProps<R, SR>, 'sortColumn' | 'sortDirection' | 'onSort' | 'allRowsSelected'>;

declare type SharedInputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'tabIndex' | 'onClick' | 'aria-label' | 'aria-labelledby'>;

export declare function SortableHeaderCell<R, SR>({ column, onSort, sortColumn, sortDirection, children }: Props<R, SR>): JSX.Element;

export declare type SortDirection = 'ASC' | 'DESC' | 'NONE';

export declare interface SummaryFormatterProps<TSummaryRow, TRow = any> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TSummaryRow;
}

export declare function TextEditor<TRow, TSummaryRow = unknown>({ row, column, onRowChange, onClose }: EditorProps<TRow, TSummaryRow>): JSX.Element;

export declare function ToggleGroupFormatter<R, SR>({ groupKey, isExpanded, isCellSelected, toggleGroup }: GroupFormatterProps<R, SR>): JSX.Element;

export declare function ValueFormatter<R, SR>(props: FormatterProps<R, SR>): JSX.Element | null;

export { }
