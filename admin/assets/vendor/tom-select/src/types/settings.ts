
import { TomCreateFilter, TomCreate, TomLoadCallback } from './index';
import {
	escape_html,
} from '/utils';

import { TPluginItem, TPluginHash } from '/contrib/microplugin';
import * as SifterTypes from '@orchidjs/sifter/lib/types';



export type TomSettings = {
	options					?: any[],
	optgroups				?: any[],
	items					?: string[],

	plugins					: string[]|TPluginItem[]|TPluginHash,
	delimiter				: string,
	splitOn					: RegExp|string, // regexp or string for splitting up values from a paste command
	persist					: boolean,
	diacritics				: boolean,
	create					: boolean|TomCreate,
	createOnBlur			: boolean,
	createFilter			: RegExp|string|TomCreateFilter,
	highlight				: boolean,
	openOnFocus				: boolean,
	shouldOpen				: boolean,
	maxOptions				: number,
	maxItems				: null|number,
	hideSelected			: boolean,
	duplicates				: boolean,
	addPrecedence			: boolean,
	selectOnTab				: boolean,
	preload					: boolean|string,
	allowEmptyOption		: boolean,
	closeAfterSelect		: boolean,

	loadThrottle			: number,
	loadingClass			: string,

	dataAttr				: string, //'data-data',
	optgroupField			: string,
	valueField				: string,
	labelField				: string,
	disabledField			: string,
	optgroupLabelField		: string,
	optgroupValueField		: string,
	lockOptgroupOrder		: boolean,

	sortField				: string|SifterTypes.Sort[]|SifterTypes.SortFn,
	searchField				: string[],
	searchConjunction		: string,
	nesting					: boolean,

	mode					: string,
	wrapperClass			: string,
	controlClass			: string,
	dropdownClass			: string,
	dropdownContentClass	: string,
	itemClass				: string,
	optionClass				: string,

	dropdownParent			: string,
	controlInput			: string|HTMLInputElement,

	copyClassesToDropdown	: boolean,

	placeholder				: string,
	hidePlaceholder			: boolean,

	load					: (value:string, callback:TomLoadCallback) => void,
	score					?: (query:string) => () => any,
	shouldLoad				: (query:string) => boolean,
	onInitialize			: (evt:Event) => void,
	onChange				: (evt:Event) => void,
	onItemAdd				: (evt:Event) => void,
	onItemRemove			: (evt:Event) => void,
	onClear					: (evt:Event) => void,
	onOptionAdd				: (evt:Event) => void,
	onOptionRemove			: (evt:Event) => void,
	onOptionClear			: (evt:Event) => void,
	onOptionGroupAdd		: (evt:Event) => void,
	onOptionGroupRemove		: (evt:Event) => void,
	onOptionGroupClear		: (evt:Event) => void,
	onDropdownOpen			: (evt:Event) => void,
	onDropdownClose			: (evt:Event) => void,
	onType					: (evt:Event) => void,
	onLoad					: (evt:Event) => void,
	onFocus					: (evt:Event) => void,
	onBlur					: (evt:Event) => void,
	onDelete				: (values:string[], evt:KeyboardEvent|MouseEvent) => boolean,

	render					: {
		[key:string]:(data:any, escape:typeof escape_html) => string|HTMLElement
	},

	// virtual scroll plugin
	firstUrl				: (query:string)=>any
	shouldLoadMore			: () => boolean,
};