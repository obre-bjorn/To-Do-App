/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getISOWeekYear/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeekYear/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getItemById": () => (/* binding */ getItemById),
/* harmony export */   "getList": () => (/* binding */ getList)
/* harmony export */ });
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_toDoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toDoList.js */ "./src/modules/toDoList.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getISOWeekYear/index.js");






let list = new _modules_toDoList_js__WEBPACK_IMPORTED_MODULE_1__.ToDoList()



;(0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.createStorage)(list)


let storage = JSON.parse(localStorage.getItem('toDoList'))
    // console.log(storage)

// let projectContainer = document.getElementById('projects')

// storage.forEach(element => {

//     console.log(element)
//         // let project = element.getProjectInfo()
//     list.addProject(element.id, element.title)
// });


// Set Today project to active



let addProj = document.getElementById("addProject")

addProj.addEventListener("submit", function(e) {
    e.preventDefault()
    let projectData = document.getElementById("projectName")
        // console.log(projectData);
    list.addProject(projectData.value)
    addProj.reset()
})


// * View add task form
let addTaskBtn = document.getElementById('add-task')
addTaskBtn.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay')

    overlay.classList.add('active')
})
let cancelOverlay = document.querySelector('#cancel_add_task')

cancelOverlay.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay')
    overlay.classList.remove('active')
})



// ADD TASK FORM
let addTask = document.getElementById("add-task-form")

addTask.addEventListener('submit', function(e) {
    e.preventDefault()

    let overlay = document.querySelector('.overlay')
    // ^ Get Form data

    const taskData = new FormData(addTask)
    let taskDataObject = Object.fromEntries(taskData.entries())

    // ^
    let activeProject = document.querySelector('.project.active')
    let project = getItemById(activeProject, 'project')
    project.projectData.addTask
        (
            project.id, taskDataObject.taskname, 
            taskDataObject.description,taskDataObject.priority,
            taskDataObject.duedate,false
        )

    addTask.reset()
    overlay.classList.remove('active')


})

// ^ Remove Project Element
function deleteProject(e){
    e.stopPropagation()
    let projElement = e.target.parentElement
    let projectData =  getItemById(projElement,'project')
    projElement.parentNode.removeChild(projElement)
    list.deleteProject(projectData.projectData.id)
}


function deleteTask(e){
    e.stopPropagation()

    //^ GET PROJECT TO DELETE FROM
    // let getProject = document.querySelector('.project.active')
    // let projectData = getItemById(getProject,'project')

    //^ GET TASK TO BE DELETED
    let taskElement = e.target.parentElement.parentElement
    let taskId = parseInt(taskElement.dataset.taskId)
    let projectId = parseInt(taskElement.dataset.projectId)

    console.log(projectId)
    // let taskId = getItemById(taskElement,'task')

    taskElement.parentNode.removeChild(taskElement)
    let project = list.getProject(projectId)
    project.deleteTask(projectId,taskId)
    console.log(list)
    

}


function getList(){
    return list
}




// TODO : Change module location 


function getItemById(element, item) {


    // TODO: CHANGE TO USE SWITCH & CASE -------------

    if (item == "project") {
        let projectId = element.id.split('project')[1]
        let data = list.getProjects()
        let projectData = data.find(proj => proj.id === parseInt(projectId))
        return { id: projectId, projectData: projectData }
    } else if(item === "task"){
        let taskId = element.id.split('task')[1]
        return taskId
    }


}


//  ^ Menu display
let menu = [...document.querySelectorAll('.menu')]

menu.forEach(button =>  { 
    button.addEventListener('click',displayMenuTask)
}

 )


 function displayMenuTask(element){
    let taskContainer = document.getElementById('task-container')
    let elementTarget = element.target
    
    let addTask = document.getElementById("add-task")
    addTask.style.display = "none"
    // console.log(elementTarget.id)
    if(elementTarget.id === "home"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        (0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.setActiveTask)(element)
        ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(taskContainer)
        let todos = list.getAllTasks()
        console.log(todos)
        if (!todos.length) {
        
                    let noTasksHTML = ` <h3>No tasks available. <b>Add a Project </b> and Click the (+) button below to add tasks</h3>`
                    taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
                } else{
        todos.forEach(todo =>{
            let projId = todo.projId 
             todo = todo.taskdetail
            ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.TaskView)(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
        })}

    }
     if(elementTarget.id === "today"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        (0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.setActiveTask)(element)
        ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(taskContainer)
        let todos = list.getTodayTasks()
        console.log(todos)
        if (!todos.length) {
        
                    let noTasksHTML = ` <h3>No tasks available. <b>Add a Project </b> and  Click the (+) button below to add tasks</h3>`
                    taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
            } 
        else{
            
            todos.forEach(todo=>{
               let projId = todo.projId 
                 todo = todo.taskdetail
                ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.TaskView)(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
            })
                }

    }
    if(elementTarget.id === "thisweek"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        let week = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date())
        ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.setActiveTask)(element)
        ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(taskContainer)
        let todos = list.getWeekTasks(week)
        console.log(todos)
        if (!todos.length) {
                    let noTasksHTML = ` <h3>No tasks available. <b>Add a Project </b> and  Click the (+) button below to add tasks</h3>`
                    taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
                } 
        else{            
                       todos.forEach(todo=>{
                        let projId = todo.projId 
                        todo = todo.taskdetail
                        ;(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__.TaskView)(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
                    })
                }


    }

    
 }


// list.addProject("Laundry")

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskView": () => (/* binding */ TaskView),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "clearContainer": () => (/* binding */ clearContainer),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners),
/* harmony export */   "setActiveTask": () => (/* binding */ setActiveTask)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");




// ! TO CHANGE!!




function TaskView(projectId,id, title, description,priority,dueDate,remainingDays){
    let taskContainer = document.getElementById('task-container')

    let taskHtml = `
                  <div id="task${id}${projectId}" class="task" data-task-id="${id}" data-project-id="${projectId}">
                                <div class="main-detail">
                                    <input type="checkbox" name="completed" id="" class="task-done">
                                    <span class="task-name" id="taskname${id}">${title}</span>
                                    
                                    <i class="fa fa-pencil-square-o edit-task" aria-hidden="true"></i>
                                    <i class="fa-solid fa-trash delete-task"></i>
                                    <p class="task-name" id="days${id}">remainingDays</p>

                                </div>
                                <div class="details">
                                    <p id="priority${id}">Priority: ${priority}</p>
                                    <p id="description${id}">Description:${description}</p>
                                </div>
                                <div id="edit-task${id}" class="edit-task-form">
                                    <form id="edit-form">
                                     <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-taskname${id}">Task</label>
                                        </div>
                                        <div class="edit-input">
                                            <input id="edit-taskname${id}" type="text" name="taskname">
                                        </div>
                                     </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-description${id}">Description</label>
                                        </div>
                                        <div class="edit-input">
                                            <textarea id="edit-description${id}" name="description" cols="30" row="10"></textarea>
                                        </div>
                                    </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-duedate${id}">Due Date:</label>
                                        </div>

                                        <div class="edit-input">
                                            <input type="date" name="duedate" id="edit-duedate${id}">
                                        </div>
                                        </div>

                                        <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="priority${id}">Priority:</label>
                                        </div>
                                        <div class="input">
                                            <select name="priority" id="select-priority${id}">
                                                <option value="low" id="low" class="option">Low</option>
                                                <option value="medium" id="medium" class="option">Medium</option>
                                                <option value="high" id="high" class="option">High</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div class=edit-input>
                    
                                            <div class="edit-form-control">
                                                <input type="submit" value="Submit">
                                                <input id="cancel" type="button" value="Cancel">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>`

                    taskContainer.insertAdjacentHTML("beforeend", taskHtml)
                    let taskCont = document.querySelector(`#task${id}${projectId}`)

                    // ^ Show task details
                    taskCont.addEventListener('click', function(e){
                        let taskDetails = taskCont.querySelector('.details')
                        taskDetails.classList.toggle('active')
                    })

                

                    // ^ Edit task
                    let editTask = document.querySelector(`#task${id}${projectId}>.main-detail>.edit-task`)
                    let taskEditform = document.querySelector(`#edit-task${id}`)
                

                    // Input values 
                    let editTaskNameInput = document.querySelector(`#edit-taskname${id}`)
                    let editDescriprtionInput = document.querySelector(`#edit-description${id}`)
                    let editDateInput = document.querySelector(`#edit-duedate${id}`)
                    let editPriority = document.querySelector(`#select-priority${id}`)

                    console.log(editPriority)
                    editTaskNameInput.value = title
                    
                    editDescriprtionInput.value = description

                    editDateInput.value = dueDate.toISOString().split("T")[0];

                    let priorityOptions = editPriority.options;
                    for (let i = 0; i < priorityOptions.length; i++) {
                        if (priorityOptions[i].value === priority) {
                            priorityOptions[i].selected = true;
                            break;
                        }
                    }
                    // editPriority.value = task.priority


                    editTask.addEventListener('click', function(e){
                        e.stopPropagation()
                        console.log(taskEditform.classList)
                        taskEditform.classList.toggle('active')
                    })

                    // & Task form submision
                    taskEditform.addEventListener('click',(e)=>{
                        e.stopPropagation()
                    })
                    let taskEditForm = taskEditform.querySelector(`form`) 

                    taskEditForm.addEventListener('submit',function(e){
                        let task_name = document.querySelector(`#taskname${id}`)
                        let task_description = document.querySelector(`#description${id}`)
                        let task_priority = document.querySelector(`#priority${id}`)
                        

                        e.preventDefault()

                        // ^ project to edit from
                        let getProject = document.querySelector('.project.active')
                        let projectData = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getItemById)(getProject,'project')
                        let taskElement = e.target.parentElement
                        console.log(taskElement)
                        console.log(projectData.id);

                        
                        let taskFormData = new FormData(taskEditForm)
                        let taskDataObject =  Object.fromEntries(taskFormData.entries())
                        
                        let data = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getList)()

                        data.getProject(projectData.id).editTask(projectData.id,id,taskDataObject)
                        let todos = data.getProject(projectData.id).getTasks()
                        console.log(todos[id].remainingDays())
                        task_name.textContent = taskDataObject.taskname
                        task_description.textContent = taskDataObject.description
                        task_priority.textContent = taskDataObject.priority

                        // console.log(taskDataObject)
                        // & Get task Id
                        // console.log(task.id)
                        

                        taskEditform.classList.remove('active')

                    })



                    // ^ Delete task
                    let deleteTaskBtn = document.querySelector(`#task${id}${projectId}>.main-detail>.delete-task`)
                    deleteTaskBtn.addEventListener('click',_index__WEBPACK_IMPORTED_MODULE_1__.deleteTask)

                    // ^ Complete Task
                    let completeTask = document.querySelector(`#task${id}${projectId}>.main-detail>input[type="checkbox"]`)
                    completeTask.addEventListener('click',(e)=>{

                        // ! CREATE FUNCTION FOR TASK COMPLETE
                        
                        let taskName = document.querySelector(`#task${id}${projectId}>.main-detail>.task-name`)
                        taskName.classList.toggle('done')
                        e.stopPropagation()

                    })

}


function eventListeners() {

}




function clearContainer(container) {
    container.innerHTML = ""
}





function addProject(id, title) {
    let projectContainer = document.getElementById('projects')
        // let project = document.querySelector('.project')

    // projectContainer.appendChild(project)
    const projectView = `
                        <div id=${id} class="project">${title}
                            <i class="fa-solid fa-trash delete-project"></i>
                        </div>
                        `
    projectContainer.insertAdjacentHTML('beforeend', projectView)
        // project.addEventListener('click', displayToDos)

    let project = projectContainer.querySelector(`#${id}`)
    let deleteproject = projectContainer.querySelector(`#${id}>.delete-project`)
    project.addEventListener('click', displayTasks)
    deleteproject.addEventListener('click',_index__WEBPACK_IMPORTED_MODULE_1__.deleteProject)
        // }
        // console.log(project)
}




function addTask(projectId,id, title, description,priority,dueDate) {

    TaskView(projectId,id,title,description,priority,dueDate)
}




function displayTasks(element) {
    //Set active Button
    let taskContainer = document.getElementById('task-container')
    
      let addTask = document.getElementById("add-task")
    addTask.style.display = "block"

    if (element.target.classList.contains('active')) {
        return
    }


            // & TO CHANGE ASAP!
            setActiveTask(element)
            clearContainer(taskContainer)
            let activeProject = document.querySelector('.project.active')
            let project = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getItemById)(activeProject, 'project')
            let data = project.projectData
            let projectId = project.id
        
            let tasks = data.getTasks()
        
            if (!tasks.length) {
        
                    let noTasksHTML = ` <h3>No tasks available. Click the (+) button below to add tasks</h3>`
                    taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
                } 
            else {
                tasks.forEach((task) =>{
                    TaskView(projectId,task.id,task.title,task.description,task.priority,task.dueDate)
        
            })
        }
        }


// display all Tasks




function setActiveTask(element) {
    let projects = [...document.querySelectorAll('.project')]

    projects.forEach((project) => {
        if (project != this) {
            project.classList.remove('active')

        }
    })

    element.target.classList.add('active')

}





/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");




class Project {

    constructor(id, title) {
        this.id = id
        this.title = title
        this.tasks = []
        this.taskId = 0
    }


    getProjectInfo() {
        return {
            id: this.id,
            title: this.title,
            tasks: this.tasks
        }
    }

    getTasks() {
        return this.tasks
    }


    addTask(projectId,title,description,priority, dueDate,available) {
        let toDo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.taskId,title,description, dueDate,priority);
        this.tasks.push(toDo)
        
        if(!available){
            dueDate = new Date(dueDate)
            ;(0,_UI_js__WEBPACK_IMPORTED_MODULE_2__.addTask)(projectId,this.taskId, title, description,priority,dueDate)
            ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)(projectId, toDo)
        }

        this.taskId++
        
    }

    editTask(projectId,taskId, data){
        let taskIndex = this.tasks.findIndex(task => task.id == taskId)
        // this.tasks[taskIndex].editTask()
       let task =  this.tasks[taskIndex].editTask(data.taskname,
            data.description,data.duedate,data.priority)
        console.log(this.tasks[taskIndex])

        ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveEditTask)(projectId,taskId,task)
    }

    deleteTask(projectId,taskId){
        let taskIndex = this.tasks.findIndex(task => task.id == taskId)
        this.tasks.splice(taskIndex,1)
        console.log(this.tasks)
        ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(projectId,taskId)
    }


}

// let Projecta = new Project('Coding')

// Projecta.addToDo('Start Coding HTML', new Date())
// Projecta.addToDo('Start Coding CSS', new Date())
// console.log(Projecta.title);
// console.log(Projecta.getAllToDo())

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStorageData": () => (/* binding */ checkStorageData),
/* harmony export */   "createStorage": () => (/* binding */ createStorage),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "saveEditTask": () => (/* binding */ saveEditTask),
/* harmony export */   "saveProject": () => (/* binding */ saveProject),
/* harmony export */   "saveTask": () => (/* binding */ saveTask)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/modules/toDoList.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}



function createStorage(data) {

    if (storageAvailable("localStorage")) {
        // Yippee! We can use localStorage awesomeness

            let storage = JSON.parse(localStorage.getItem('toDoList'))
                // console.log(storage)

            if(storage.length){
                
                storage.forEach(project => {
                    data.addProject(project.title, true)
                    console.log(project)
                    if(project.tasks.length){
                        let projects = data.getProjects()
    
                        let tasks = project.tasks
                        tasks.forEach(task=> {
                            projects[projects.length - 1].addTask(project.id,task.title,task.description,task.priority,task.dueDate,true)
                        })
                    }
                });
            }

             document.addEventListener("DOMContentLoaded", function() {
              
                 let today = document.querySelector('#home')
                 today.click()
    });     

        }
        // console.log(data.getProjects())
        
    
    
}


function checkStorageData() {
    let data = localStorage.getItem('toDoList')

    if (data) {
        let data = JSON.parse(localStorage.getItem('toDoList'))
        let lastDataId = data[data.length - 1].id
        return (lastDataId)
    } else {
        return 0;
    }
}



function saveProject(data) {

    let oldData = getData()
    oldData.push(data)
    localStorage.setItem('toDoList', JSON.stringify(oldData))

}

function deleteProject(id){
    let oldData = getData()
    oldData.splice(id,1)
    localStorage.setItem('toDoList',JSON.stringify(oldData))

}


function saveTask(projectId, task) {
    let oldData = getData()
    console.log(oldData)
    oldData[projectId].tasks.push(task)
    localStorage.setItem('toDoList', JSON.stringify(oldData))
}


function saveEditTask(projectId,taskId,task){
    let data = getData()
    data[projectId].tasks[taskId] = task
    localStorage.setItem('toDoList',JSON.stringify(data))
}
function deleteTask(projectId, taskId){
    let data = getData()
    data[projectId].tasks.splice(taskId,1)
    localStorage.setItem('toDoList',JSON.stringify(data))

}

function getData() {
    let data = JSON.parse(localStorage.getItem("toDoList"))
    return data
}

/***/ }),

/***/ "./src/modules/toDoList.js":
/*!*********************************!*\
  !*** ./src/modules/toDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");




class ToDoList {
    constructor() {
        this.projects = []
        this.id = 0


    }

    addProject(title, available) {
        let project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(this.id, title)
        this.projects.push(project)
        let projectData = project.getProjectInfo()
        ;(0,_UI_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(`project${this.id}`, projectData.title)
        this.id++
            if (!available) {
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProject)(project)
            }
    }

    deleteProject(id) {
        let projectIndex = this.projects.findIndex(project => project.id == id)
        this.projects.splice(projectIndex,1)
        ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(id)

    }

    getProject(id){
        return this.projects.find(project => project.id == id)
    }


    getProjects() {
        return this.projects
    }
     
    getAllTasks(){
        let tasks = []
        this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.remainingDays() >= 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )}
            })
        })
        return tasks
    }
    getTodayTasks(){
        let tasks = []
          this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.remainingDays() === 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )
                }
            })
        })
        return tasks

    }
    getWeekTasks(week){
        let tasks = []
         this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.taskWeek() === week && task.remainingDays() >= 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )
                }
            })
        })
        return tasks
    }
}

// let toDos = new ToDoList()

// toDos.addProject('Coding')
// toDos.getProjects()[1].addToDo('Learn and Practice HTML', new Date())

// toDos.getProjects().forEach((project) => {
//     console.log(`${project.title} `)
//     project.getAllToDo().forEach((todo) => {
//         console.log(todo)
//     })
//     console.log('\n')
// })



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getISOWeekYear/index.js");


class ToDo {
    constructor(id,title,description, dueDate, priority, completed = false) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed
    }

    editTask(title,description,dueDate,priority,completed) {
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed

        return this
    }

    setCompleted(){
        this.completed = !this.completed
        console.log(this)
    }
    
    remainingDays(){
        let currentDate = new Date()
        let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(this.dueDate,currentDate)
        return date
    }
    taskWeek(){
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(this.dueDate)
    }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdpRTtBQUNqRTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldElTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZklTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwge1xuICAgIHdlZWtTdGFydHNPbjogMVxuICB9KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JhZ2Usc2F2ZVByb2plY3QgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi9tb2R1bGVzL3RvRG9MaXN0LmpzXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgYXMgYWQsc2V0QWN0aXZlVGFzayxjbGVhckNvbnRhaW5lcixUYXNrVmlldyB9IGZyb20gXCIuL21vZHVsZXMvVUkuanNcIjtcclxuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG5sZXQgbGlzdCA9IG5ldyBUb0RvTGlzdCgpXHJcblxyXG5cclxuXHJcbmNyZWF0ZVN0b3JhZ2UobGlzdClcclxuXHJcblxyXG5sZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxyXG5cclxuLy8gbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG5cclxuLy8gc3RvcmFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXHJcbi8vICAgICAgICAgLy8gbGV0IHByb2plY3QgPSBlbGVtZW50LmdldFByb2plY3RJbmZvKClcclxuLy8gICAgIGxpc3QuYWRkUHJvamVjdChlbGVtZW50LmlkLCBlbGVtZW50LnRpdGxlKVxyXG4vLyB9KTtcclxuXHJcblxyXG4vLyBTZXQgVG9kYXkgcHJvamVjdCB0byBhY3RpdmVcclxuXHJcblxyXG5cclxubGV0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIilcclxuXHJcbmFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBwcm9qZWN0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XHJcbiAgICBsaXN0LmFkZFByb2plY3QocHJvamVjdERhdGEudmFsdWUpXHJcbiAgICBhZGRQcm9qLnJlc2V0KClcclxufSlcclxuXHJcblxyXG4vLyAqIFZpZXcgYWRkIHRhc2sgZm9ybVxyXG5sZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXHJcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn0pXHJcbmxldCBjYW5jZWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbF9hZGRfdGFzaycpXHJcblxyXG5jYW5jZWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIEFERCBUQVNLIEZPUk1cclxubGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWZvcm1cIilcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbiAgICAvLyBeIEdldCBGb3JtIGRhdGFcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0YSA9IG5ldyBGb3JtRGF0YShhZGRUYXNrKVxyXG4gICAgbGV0IHRhc2tEYXRhT2JqZWN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKHRhc2tEYXRhLmVudHJpZXMoKSlcclxuXHJcbiAgICAvLyBeXHJcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpXHJcbiAgICBsZXQgcHJvamVjdCA9IGdldEl0ZW1CeUlkKGFjdGl2ZVByb2plY3QsICdwcm9qZWN0JylcclxuICAgIHByb2plY3QucHJvamVjdERhdGEuYWRkVGFza1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgcHJvamVjdC5pZCwgdGFza0RhdGFPYmplY3QudGFza25hbWUsIFxyXG4gICAgICAgICAgICB0YXNrRGF0YU9iamVjdC5kZXNjcmlwdGlvbix0YXNrRGF0YU9iamVjdC5wcmlvcml0eSxcclxuICAgICAgICAgICAgdGFza0RhdGFPYmplY3QuZHVlZGF0ZSxmYWxzZVxyXG4gICAgICAgIClcclxuXHJcbiAgICBhZGRUYXNrLnJlc2V0KClcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHJcblxyXG59KVxyXG5cclxuLy8gXiBSZW1vdmUgUHJvamVjdCBFbGVtZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpe1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgbGV0IHByb2pFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgbGV0IHByb2plY3REYXRhID0gIGdldEl0ZW1CeUlkKHByb2pFbGVtZW50LCdwcm9qZWN0JylcclxuICAgIHByb2pFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvakVsZW1lbnQpXHJcbiAgICBsaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdERhdGEucHJvamVjdERhdGEuaWQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKXtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAvL14gR0VUIFBST0pFQ1QgVE8gREVMRVRFIEZST01cclxuICAgIC8vIGxldCBnZXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgIC8vIGxldCBwcm9qZWN0RGF0YSA9IGdldEl0ZW1CeUlkKGdldFByb2plY3QsJ3Byb2plY3QnKVxyXG5cclxuICAgIC8vXiBHRVQgVEFTSyBUTyBCRSBERUxFVEVEXHJcbiAgICBsZXQgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgIGxldCB0YXNrSWQgPSBwYXJzZUludCh0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tJZClcclxuICAgIGxldCBwcm9qZWN0SWQgPSBwYXJzZUludCh0YXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3RJZClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpXHJcbiAgICAvLyBsZXQgdGFza0lkID0gZ2V0SXRlbUJ5SWQodGFza0VsZW1lbnQsJ3Rhc2snKVxyXG5cclxuICAgIHRhc2tFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFza0VsZW1lbnQpXHJcbiAgICBsZXQgcHJvamVjdCA9IGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpXHJcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2socHJvamVjdElkLHRhc2tJZClcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCgpe1xyXG4gICAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gVE9ETyA6IENoYW5nZSBtb2R1bGUgbG9jYXRpb24gXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1CeUlkKGVsZW1lbnQsIGl0ZW0pIHtcclxuXHJcblxyXG4gICAgLy8gVE9ETzogQ0hBTkdFIFRPIFVTRSBTV0lUQ0ggJiBDQVNFIC0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBpZiAoaXRlbSA9PSBcInByb2plY3RcIikge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBlbGVtZW50LmlkLnNwbGl0KCdwcm9qZWN0JylbMV1cclxuICAgICAgICBsZXQgZGF0YSA9IGxpc3QuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IGRhdGEuZmluZChwcm9qID0+IHByb2ouaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHByb2plY3RJZCwgcHJvamVjdERhdGE6IHByb2plY3REYXRhIH1cclxuICAgIH0gZWxzZSBpZihpdGVtID09PSBcInRhc2tcIil7XHJcbiAgICAgICAgbGV0IHRhc2tJZCA9IGVsZW1lbnQuaWQuc3BsaXQoJ3Rhc2snKVsxXVxyXG4gICAgICAgIHJldHVybiB0YXNrSWRcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gIF4gTWVudSBkaXNwbGF5XHJcbmxldCBtZW51ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51JyldXHJcblxyXG5tZW51LmZvckVhY2goYnV0dG9uID0+ICB7IFxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5TWVudVRhc2spXHJcbn1cclxuXHJcbiApXHJcblxyXG5cclxuIGZ1bmN0aW9uIGRpc3BsYXlNZW51VGFzayhlbGVtZW50KXtcclxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gZWxlbWVudC50YXJnZXRcclxuICAgIFxyXG4gICAgbGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpXHJcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudFRhcmdldC5pZClcclxuICAgIGlmKGVsZW1lbnRUYXJnZXQuaWQgPT09IFwiaG9tZVwiKXtcclxuICAgICAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgbGV0IHRvZG9zID0gbGlzdC5nZXRBbGxUYXNrcygpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICAgICAgaWYgKCF0b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIDxiPkFkZCBhIFByb2plY3QgPC9iPiBhbmQgQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvaklkID0gdG9kby5wcm9qSWQgXHJcbiAgICAgICAgICAgICB0b2RvID0gdG9kby50YXNrZGV0YWlsXHJcbiAgICAgICAgICAgIFRhc2tWaWV3KHByb2pJZCx0b2RvLmlkLHRvZG8udGl0bGUsdG9kby5kZXNjcmlwdGlvbix0b2RvLnByaW9yaXR5LHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICB9KX1cclxuXHJcbiAgICB9XHJcbiAgICAgaWYoZWxlbWVudFRhcmdldC5pZCA9PT0gXCJ0b2RheVwiKXtcclxuICAgICAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgbGV0IHRvZG9zID0gbGlzdC5nZXRUb2RheVRhc2tzKClcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1Rhc2tzSFRNTCA9IGAgPGgzPk5vIHRhc2tzIGF2YWlsYWJsZS4gPGI+QWRkIGEgUHJvamVjdCA8L2I+IGFuZCAgQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbz0+e1xyXG4gICAgICAgICAgICAgICBsZXQgcHJvaklkID0gdG9kby5wcm9qSWQgXHJcbiAgICAgICAgICAgICAgICAgdG9kbyA9IHRvZG8udGFza2RldGFpbFxyXG4gICAgICAgICAgICAgICAgVGFza1ZpZXcocHJvaklkLHRvZG8uaWQsdG9kby50aXRsZSx0b2RvLmRlc2NyaXB0aW9uLHRvZG8ucHJpb3JpdHksdG9kby5kdWVEYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmKGVsZW1lbnRUYXJnZXQuaWQgPT09IFwidGhpc3dlZWtcIil7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB3ZWVrID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoKSlcclxuICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgY2xlYXJDb250YWluZXIodGFza0NvbnRhaW5lcilcclxuICAgICAgICBsZXQgdG9kb3MgPSBsaXN0LmdldFdlZWtUYXNrcyh3ZWVrKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIGlmICghdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vVGFza3NIVE1MID0gYCA8aDM+Tm8gdGFza3MgYXZhaWxhYmxlLiA8Yj5BZGQgYSBQcm9qZWN0IDwvYj4gYW5kICBDbGljayB0aGUgKCspIGJ1dHRvbiBiZWxvdyB0byBhZGQgdGFza3M8L2gzPmBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBub1Rhc2tzSFRNTClcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2pJZCA9IHRvZG8ucHJvaklkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvID0gdG9kby50YXNrZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tWaWV3KHByb2pJZCx0b2RvLmlkLHRvZG8udGl0bGUsdG9kby5kZXNjcmlwdGlvbix0b2RvLnByaW9yaXR5LHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiB9XHJcblxyXG5cclxuLy8gbGlzdC5hZGRQcm9qZWN0KFwiTGF1bmRyeVwiKSIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG5cclxuXHJcbi8vICEgVE8gQ0hBTkdFISFcclxuaW1wb3J0IHsgZ2V0SXRlbUJ5SWQsZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tWaWV3KHByb2plY3RJZCxpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUscmVtYWluaW5nRGF5cyl7XHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXHJcblxyXG4gICAgbGV0IHRhc2tIdG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFzayR7aWR9JHtwcm9qZWN0SWR9XCIgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNrLWlkPVwiJHtpZH1cIiBkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3RJZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZWRcIiBpZD1cIlwiIGNsYXNzPVwidGFzay1kb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrbmFtZSR7aWR9XCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBlZGl0LXRhc2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggZGVsZXRlLXRhc2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJkYXlzJHtpZH1cIj5yZW1haW5pbmdEYXlzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInByaW9yaXR5JHtpZH1cIj5Qcmlvcml0eTogJHtwcmlvcml0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGVzY3JpcHRpb24ke2lkfVwiPkRlc2NyaXB0aW9uOiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlZGl0LXRhc2ske2lkfVwiIGNsYXNzPVwiZWRpdC10YXNrLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJlZGl0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LXRhc2tuYW1lJHtpZH1cIj5UYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlZGl0LXRhc2tuYW1lJHtpZH1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LWRlc2NyaXB0aW9uJHtpZH1cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZWRpdC1kZXNjcmlwdGlvbiR7aWR9XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93PVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtZHVlZGF0ZSR7aWR9XCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIiBpZD1cImVkaXQtZHVlZGF0ZSR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eSR7aWR9XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInNlbGVjdC1wcmlvcml0eSR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiBpZD1cImxvd1wiIGNsYXNzPVwib3B0aW9uXCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiIGNsYXNzPVwib3B0aW9uXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgaWQ9XCJoaWdoXCIgY2xhc3M9XCJvcHRpb25cIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ZWRpdC1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1mb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjYW5jZWxcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGFza0h0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfWApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4gU2hvdyB0YXNrIGRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RldGFpbHMgPSB0YXNrQ29udC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBFZGl0IHRhc2tcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9Pi5tYWluLWRldGFpbD4uZWRpdC10YXNrYClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdGFzayR7aWR9YClcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dCB2YWx1ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRUYXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdGFza25hbWUke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXREZXNjcmlwcnRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LWRlc2NyaXB0aW9uJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtZHVlZGF0ZSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlbGVjdC1wcmlvcml0eSR7aWR9YClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFByaW9yaXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrTmFtZUlucHV0LnZhbHVlID0gdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGVzY3JpcHJ0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5T3B0aW9ucyA9IGVkaXRQcmlvcml0eS5vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlPcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eU9wdGlvbnNbaV0udmFsdWUgPT09IHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eU9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWRpdFByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrRWRpdGZvcm0uY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAmIFRhc2sgZm9ybSBzdWJtaXNpb25cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRGb3JtID0gdGFza0VkaXRmb3JtLnF1ZXJ5U2VsZWN0b3IoYGZvcm1gKSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza25hbWUke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rlc2NyaXB0aW9uJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza19wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcmlvcml0eSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF4gcHJvamVjdCB0byBlZGl0IGZyb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdldFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBnZXRJdGVtQnlJZChnZXRQcm9qZWN0LCdwcm9qZWN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdERhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFza0VkaXRGb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RhdGFPYmplY3QgPSAgT2JqZWN0LmZyb21FbnRyaWVzKHRhc2tGb3JtRGF0YS5lbnRyaWVzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGdldExpc3QoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5nZXRQcm9qZWN0KHByb2plY3REYXRhLmlkKS5lZGl0VGFzayhwcm9qZWN0RGF0YS5pZCxpZCx0YXNrRGF0YU9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9zID0gZGF0YS5nZXRQcm9qZWN0KHByb2plY3REYXRhLmlkKS5nZXRUYXNrcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zW2lkXS5yZW1haW5pbmdEYXlzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tEYXRhT2JqZWN0LnRhc2tuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGF0YU9iamVjdC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrX3ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza0RhdGFPYmplY3QucHJpb3JpdHlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tEYXRhT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAmIEdldCB0YXNrIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2suaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBEZWxldGUgdGFza1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+LmRlbGV0ZS10YXNrYClcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBeIENvbXBsZXRlIFRhc2tcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdYClcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISBDUkVBVEUgRlVOQ1RJT04gRk9SIFRBU0sgQ09NUExFVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH0+Lm1haW4tZGV0YWlsPi50YXNrLW5hbWVgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXJzKCkge1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChpZCwgdGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuICAgICAgICAvLyBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuXHJcbiAgICAvLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ke2lkfSBjbGFzcz1cInByb2plY3RcIj4ke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaCBkZWxldGUtcHJvamVjdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9qZWN0VmlldylcclxuICAgICAgICAvLyBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvRG9zKVxyXG5cclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKVxyXG4gICAgbGV0IGRlbGV0ZXByb2plY3QgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfT4uZGVsZXRlLXByb2plY3RgKVxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUYXNrcylcclxuICAgIGRlbGV0ZXByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVByb2plY3QpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdElkLGlkLCB0aXRsZSwgZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xyXG5cclxuICAgIFRhc2tWaWV3KHByb2plY3RJZCxpZCx0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoZWxlbWVudCkge1xyXG4gICAgLy9TZXQgYWN0aXZlIEJ1dHRvblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxyXG4gICAgXHJcbiAgICAgIGxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKVxyXG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcblxyXG4gICAgaWYgKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAmIFRPIENIQU5HRSBBU0FQIVxyXG4gICAgICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBnZXRJdGVtQnlJZChhY3RpdmVQcm9qZWN0LCAncHJvamVjdCcpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcHJvamVjdC5wcm9qZWN0RGF0YVxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdC5pZFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdGFza3MgPSBkYXRhLmdldFRhc2tzKClcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIENsaWNrIHRoZSAoKykgYnV0dG9uIGJlbG93IHRvIGFkZCB0YXNrczwvaDM+YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5vVGFza3NIVE1MKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBUYXNrVmlldyhwcm9qZWN0SWQsdGFzay5pZCx0YXNrLnRpdGxlLHRhc2suZGVzY3JpcHRpb24sdGFzay5wcmlvcml0eSx0YXNrLmR1ZURhdGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4vLyBkaXNwbGF5IGFsbCBUYXNrc1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlVGFzayhlbGVtZW50KSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV1cclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QgIT0gdGhpcykge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZXZlbnRMaXN0ZW5lcnMsIGRpc3BsYXlUYXNrcywgYWRkUHJvamVjdCwgYWRkVGFzayxzZXRBY3RpdmVUYXNrLGNsZWFyQ29udGFpbmVyIH0iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmltcG9ydCB7IHNhdmVFZGl0VGFzaywgc2F2ZVRhc2ssZGVsZXRlVGFzayBhcyBkZWxldGVUYXNrU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUYXNrIGFzIGFkZFRhc2tVSSB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgICAgICAgdGhpcy50YXNrSWQgPSAwXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb2plY3RJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgdGFza3M6IHRoaXMudGFza3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVGFzayhwcm9qZWN0SWQsdGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksIGR1ZURhdGUsYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgbGV0IHRvRG8gPSBuZXcgVG9Ebyh0aGlzLnRhc2tJZCx0aXRsZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSxwcmlvcml0eSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRvRG8pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWF2YWlsYWJsZSl7XHJcbiAgICAgICAgICAgIGR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgICAgICBhZGRUYXNrVUkocHJvamVjdElkLHRoaXMudGFza0lkLCB0aXRsZSwgZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSlcclxuICAgICAgICAgICAgc2F2ZVRhc2socHJvamVjdElkLCB0b0RvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrSWQrK1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUYXNrKHByb2plY3RJZCx0YXNrSWQsIGRhdGEpe1xyXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKVxyXG4gICAgICAgIC8vIHRoaXMudGFza3NbdGFza0luZGV4XS5lZGl0VGFzaygpXHJcbiAgICAgICBsZXQgdGFzayA9ICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZWRpdFRhc2soZGF0YS50YXNrbmFtZSxcclxuICAgICAgICAgICAgZGF0YS5kZXNjcmlwdGlvbixkYXRhLmR1ZWRhdGUsZGF0YS5wcmlvcml0eSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzW3Rhc2tJbmRleF0pXHJcblxyXG4gICAgICAgIHNhdmVFZGl0VGFzayhwcm9qZWN0SWQsdGFza0lkLHRhc2spXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayhwcm9qZWN0SWQsdGFza0lkKXtcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZClcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsMSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKVxyXG4gICAgICAgIGRlbGV0ZVRhc2tTdG9yYWdlKHByb2plY3RJZCx0YXNrSWQpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy8gbGV0IFByb2plY3RhID0gbmV3IFByb2plY3QoJ0NvZGluZycpXHJcblxyXG4vLyBQcm9qZWN0YS5hZGRUb0RvKCdTdGFydCBDb2RpbmcgSFRNTCcsIG5ldyBEYXRlKCkpXHJcbi8vIFByb2plY3RhLmFkZFRvRG8oJ1N0YXJ0IENvZGluZyBDU1MnLCBuZXcgRGF0ZSgpKVxyXG4vLyBjb25zb2xlLmxvZyhQcm9qZWN0YS50aXRsZSk7XHJcbi8vIGNvbnNvbGUubG9nKFByb2plY3RhLmdldEFsbFRvRG8oKSkiLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gJy4vdG9Eb0xpc3QnXHJcbmltcG9ydCB7IGFkZFByb2plY3QsIGRpc3BsYXlUYXNrIH0gZnJvbSAnLi9VSSc7XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgICAgIHN0b3JhZ2UgJiZcclxuICAgICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yYWdlKGRhdGEpIHtcclxuXHJcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xyXG4gICAgICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcclxuXHJcbiAgICAgICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXHJcblxyXG4gICAgICAgICAgICBpZihzdG9yYWdlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmFkZFByb2plY3QocHJvamVjdC50aXRsZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3QudGFza3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RzID0gZGF0YS5nZXRQcm9qZWN0cygpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2s9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5hZGRUYXNrKHByb2plY3QuaWQsdGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlLHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgdG9kYXkuY2xpY2soKVxyXG4gICAgfSk7ICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZ2V0UHJvamVjdHMoKSlcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdG9yYWdlRGF0YSgpIHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JylcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSlcclxuICAgICAgICBsZXQgbGFzdERhdGFJZCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5pZFxyXG4gICAgICAgIHJldHVybiAobGFzdERhdGFJZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0KGRhdGEpIHtcclxuXHJcbiAgICBsZXQgb2xkRGF0YSA9IGdldERhdGEoKVxyXG4gICAgb2xkRGF0YS5wdXNoKGRhdGEpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShvbGREYXRhKSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKXtcclxuICAgIGxldCBvbGREYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBvbGREYXRhLnNwbGljZShpZCwxKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShvbGREYXRhKSlcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2socHJvamVjdElkLCB0YXNrKSB7XHJcbiAgICBsZXQgb2xkRGF0YSA9IGdldERhdGEoKVxyXG4gICAgY29uc29sZS5sb2cob2xkRGF0YSlcclxuICAgIG9sZERhdGFbcHJvamVjdElkXS50YXNrcy5wdXNoKHRhc2spXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShvbGREYXRhKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWRpdFRhc2socHJvamVjdElkLHRhc2tJZCx0YXNrKXtcclxuICAgIGxldCBkYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBkYXRhW3Byb2plY3RJZF0udGFza3NbdGFza0lkXSA9IHRhc2tcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdElkLCB0YXNrSWQpe1xyXG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKClcclxuICAgIGRhdGFbcHJvamVjdElkXS50YXNrcy5zcGxpY2UodGFza0lkLDEpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSlcclxuICAgIHJldHVybiBkYXRhXHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yYWdlLCBzYXZlUHJvamVjdCBhcyBzYXZlUHJvalRvU3RvcmFnZSwgY2hlY2tTdG9yYWdlRGF0YSxkZWxldGVQcm9qZWN0IGFzIGRlbFByb2pGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdCBhcyBkb21BZGRQcm9qZWN0IH0gZnJvbSBcIi4vVUkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cclxuICAgICAgICB0aGlzLmlkID0gMFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdCh0aXRsZSwgYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aGlzLmlkLCB0aXRsZSlcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKClcclxuICAgICAgICBkb21BZGRQcm9qZWN0KGBwcm9qZWN0JHt0aGlzLmlkfWAsIHByb2plY3REYXRhLnRpdGxlKVxyXG4gICAgICAgIHRoaXMuaWQrK1xyXG4gICAgICAgICAgICBpZiAoIWF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2pUb1N0b3JhZ2UocHJvamVjdClcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwxKVxyXG4gICAgICAgIGRlbFByb2pGcm9tU3RvcmFnZShpZClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChpZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBnZXRBbGxUYXNrcygpe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzaz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3REZXRhaWwgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkgXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrLnJlbWFpbmluZ0RheXMoKSA+PSAwKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tkZXRhaWw6dGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklkOnByb2plY3REZXRhaWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0YXNrc1xyXG4gICAgfVxyXG4gICAgZ2V0VG9kYXlUYXNrcygpe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERldGFpbCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKSBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2sucmVtYWluaW5nRGF5cygpID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tkZXRhaWw6dGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklkOnByb2plY3REZXRhaWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0V2Vla1Rhc2tzKHdlZWspe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2s9PntcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGV0YWlsID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpIFxyXG4gICAgICAgICAgICAgICAgaWYodGFzay50YXNrV2VlaygpID09PSB3ZWVrICYmIHRhc2sucmVtYWluaW5nRGF5cygpID49IDApe1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7dGFza2RldGFpbDp0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qSWQ6cHJvamVjdERldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFza3NcclxuICAgIH1cclxufVxyXG5cclxuLy8gbGV0IHRvRG9zID0gbmV3IFRvRG9MaXN0KClcclxuXHJcbi8vIHRvRG9zLmFkZFByb2plY3QoJ0NvZGluZycpXHJcbi8vIHRvRG9zLmdldFByb2plY3RzKClbMV0uYWRkVG9EbygnTGVhcm4gYW5kIFByYWN0aWNlIEhUTUwnLCBuZXcgRGF0ZSgpKVxyXG5cclxuLy8gdG9Eb3MuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0LnRpdGxlfSBgKVxyXG4vLyAgICAgcHJvamVjdC5nZXRBbGxUb0RvKCkuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcbi8vICAgICB9KVxyXG4vLyAgICAgY29uc29sZS5sb2coJ1xcbicpXHJcbi8vIH0pXHJcblxyXG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsZ2V0SVNPV2Vla1llYXJ9IGZyb20gXCJkYXRlLWZuc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLHRpdGxlLGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tcGxldGVkKCl7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWRcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1haW5pbmdEYXlzKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGxldCBkYXRlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuZHVlRGF0ZSxjdXJyZW50RGF0ZSlcclxuICAgICAgICByZXR1cm4gZGF0ZVxyXG4gICAgfVxyXG4gICAgdGFza1dlZWsoKXtcclxuICAgICAgICByZXR1cm4gZ2V0SVNPV2Vla1llYXIodGhpcy5kdWVEYXRlKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9