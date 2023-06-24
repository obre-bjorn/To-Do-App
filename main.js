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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2lFO0FBQ2pFO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFjO0FBQzdCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0SVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZklTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGlydHlEYXRlLCB7XG4gICAgd2Vla1N0YXJ0c09uOiAxXG4gIH0pO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmFnZSxzYXZlUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL21vZHVsZXMvdG9Eb0xpc3QuanNcIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdCBhcyBhZCxzZXRBY3RpdmVUYXNrLGNsZWFyQ29udGFpbmVyLFRhc2tWaWV3IH0gZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuXHJcbmxldCBsaXN0ID0gbmV3IFRvRG9MaXN0KClcclxuXHJcblxyXG5cclxuY3JlYXRlU3RvcmFnZShsaXN0KVxyXG5cclxuXHJcbmxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXHJcblxyXG4vLyBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcblxyXG4vLyBzdG9yYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4vLyAgICAgY29uc29sZS5sb2coZWxlbWVudClcclxuLy8gICAgICAgICAvLyBsZXQgcHJvamVjdCA9IGVsZW1lbnQuZ2V0UHJvamVjdEluZm8oKVxyXG4vLyAgICAgbGlzdC5hZGRQcm9qZWN0KGVsZW1lbnQuaWQsIGVsZW1lbnQudGl0bGUpXHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIFNldCBUb2RheSBwcm9qZWN0IHRvIGFjdGl2ZVxyXG5cclxuXHJcblxyXG5sZXQgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKVxyXG5cclxuYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IHByb2plY3REYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuICAgIGxpc3QuYWRkUHJvamVjdChwcm9qZWN0RGF0YS52YWx1ZSlcclxuICAgIGFkZFByb2oucmVzZXQoKVxyXG59KVxyXG5cclxuXHJcbi8vICogVmlldyBhZGQgdGFzayBmb3JtXHJcbmxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcclxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxyXG5cclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufSlcclxubGV0IGNhbmNlbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsX2FkZF90YXNrJylcclxuXHJcbmNhbmNlbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufSlcclxuXHJcblxyXG5cclxuLy8gQUREIFRBU0sgRk9STVxyXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stZm9ybVwiKVxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuICAgIC8vIF4gR2V0IEZvcm0gZGF0YVxyXG5cclxuICAgIGNvbnN0IHRhc2tEYXRhID0gbmV3IEZvcm1EYXRhKGFkZFRhc2spXHJcbiAgICBsZXQgdGFza0RhdGFPYmplY3QgPSBPYmplY3QuZnJvbUVudHJpZXModGFza0RhdGEuZW50cmllcygpKVxyXG5cclxuICAgIC8vIF5cclxuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgIGxldCBwcm9qZWN0ID0gZ2V0SXRlbUJ5SWQoYWN0aXZlUHJvamVjdCwgJ3Byb2plY3QnKVxyXG4gICAgcHJvamVjdC5wcm9qZWN0RGF0YS5hZGRUYXNrXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBwcm9qZWN0LmlkLCB0YXNrRGF0YU9iamVjdC50YXNrbmFtZSwgXHJcbiAgICAgICAgICAgIHRhc2tEYXRhT2JqZWN0LmRlc2NyaXB0aW9uLHRhc2tEYXRhT2JqZWN0LnByaW9yaXR5LFxyXG4gICAgICAgICAgICB0YXNrRGF0YU9iamVjdC5kdWVkYXRlLGZhbHNlXHJcbiAgICAgICAgKVxyXG5cclxuICAgIGFkZFRhc2sucmVzZXQoKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cclxuXHJcbn0pXHJcblxyXG4vLyBeIFJlbW92ZSBQcm9qZWN0IEVsZW1lbnRcclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSl7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBsZXQgcHJvakVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICBsZXQgcHJvamVjdERhdGEgPSAgZ2V0SXRlbUJ5SWQocHJvakVsZW1lbnQsJ3Byb2plY3QnKVxyXG4gICAgcHJvakVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qRWxlbWVudClcclxuICAgIGxpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0RGF0YS5wcm9qZWN0RGF0YS5pZClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUpe1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgIC8vXiBHRVQgUFJPSkVDVCBUTyBERUxFVEUgRlJPTVxyXG4gICAgLy8gbGV0IGdldFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hY3RpdmUnKVxyXG4gICAgLy8gbGV0IHByb2plY3REYXRhID0gZ2V0SXRlbUJ5SWQoZ2V0UHJvamVjdCwncHJvamVjdCcpXHJcblxyXG4gICAgLy9eIEdFVCBUQVNLIFRPIEJFIERFTEVURURcclxuICAgIGxldCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgbGV0IHRhc2tJZCA9IHBhcnNlSW50KHRhc2tFbGVtZW50LmRhdGFzZXQudGFza0lkKVxyXG4gICAgbGV0IHByb2plY3RJZCA9IHBhcnNlSW50KHRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdElkKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZClcclxuICAgIC8vIGxldCB0YXNrSWQgPSBnZXRJdGVtQnlJZCh0YXNrRWxlbWVudCwndGFzaycpXHJcblxyXG4gICAgdGFza0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrRWxlbWVudClcclxuICAgIGxldCBwcm9qZWN0ID0gbGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZClcclxuICAgIHByb2plY3QuZGVsZXRlVGFzayhwcm9qZWN0SWQsdGFza0lkKVxyXG4gICAgY29uc29sZS5sb2cobGlzdClcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0KCl7XHJcbiAgICByZXR1cm4gbGlzdFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBUT0RPIDogQ2hhbmdlIG1vZHVsZSBsb2NhdGlvbiBcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUJ5SWQoZWxlbWVudCwgaXRlbSkge1xyXG5cclxuXHJcbiAgICAvLyBUT0RPOiBDSEFOR0UgVE8gVVNFIFNXSVRDSCAmIENBU0UgLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGlmIChpdGVtID09IFwicHJvamVjdFwiKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGVsZW1lbnQuaWQuc3BsaXQoJ3Byb2plY3QnKVsxXVxyXG4gICAgICAgIGxldCBkYXRhID0gbGlzdC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gZGF0YS5maW5kKHByb2ogPT4gcHJvai5pZCA9PT0gcGFyc2VJbnQocHJvamVjdElkKSlcclxuICAgICAgICByZXR1cm4geyBpZDogcHJvamVjdElkLCBwcm9qZWN0RGF0YTogcHJvamVjdERhdGEgfVxyXG4gICAgfSBlbHNlIGlmKGl0ZW0gPT09IFwidGFza1wiKXtcclxuICAgICAgICBsZXQgdGFza0lkID0gZWxlbWVudC5pZC5zcGxpdCgndGFzaycpWzFdXHJcbiAgICAgICAgcmV0dXJuIHRhc2tJZFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyAgXiBNZW51IGRpc3BsYXlcclxubGV0IG1lbnUgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUnKV1cclxuXHJcbm1lbnUuZm9yRWFjaChidXR0b24gPT4gIHsgXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlNZW51VGFzaylcclxufVxyXG5cclxuIClcclxuXHJcblxyXG4gZnVuY3Rpb24gZGlzcGxheU1lbnVUYXNrKGVsZW1lbnQpe1xyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxyXG4gICAgbGV0IGVsZW1lbnRUYXJnZXQgPSBlbGVtZW50LnRhcmdldFxyXG4gICAgXHJcbiAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIilcclxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50VGFyZ2V0LmlkKVxyXG4gICAgaWYoZWxlbWVudFRhcmdldC5pZCA9PT0gXCJob21lXCIpe1xyXG4gICAgICAgIGlmIChlbGVtZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgY2xlYXJDb250YWluZXIodGFza0NvbnRhaW5lcilcclxuICAgICAgICBsZXQgdG9kb3MgPSBsaXN0LmdldEFsbFRhc2tzKClcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1Rhc2tzSFRNTCA9IGAgPGgzPk5vIHRhc2tzIGF2YWlsYWJsZS4gPGI+QWRkIGEgUHJvamVjdCA8L2I+IGFuZCBDbGljayB0aGUgKCspIGJ1dHRvbiBiZWxvdyB0byBhZGQgdGFza3M8L2gzPmBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBub1Rhc2tzSFRNTClcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT57XHJcbiAgICAgICAgICAgIGxldCBwcm9qSWQgPSB0b2RvLnByb2pJZCBcclxuICAgICAgICAgICAgIHRvZG8gPSB0b2RvLnRhc2tkZXRhaWxcclxuICAgICAgICAgICAgVGFza1ZpZXcocHJvaklkLHRvZG8uaWQsdG9kby50aXRsZSx0b2RvLmRlc2NyaXB0aW9uLHRvZG8ucHJpb3JpdHksdG9kby5kdWVEYXRlKVxyXG4gICAgICAgIH0pfVxyXG5cclxuICAgIH1cclxuICAgICBpZihlbGVtZW50VGFyZ2V0LmlkID09PSBcInRvZGF5XCIpe1xyXG4gICAgICAgIGlmIChlbGVtZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgY2xlYXJDb250YWluZXIodGFza0NvbnRhaW5lcilcclxuICAgICAgICBsZXQgdG9kb3MgPSBsaXN0LmdldFRvZGF5VGFza3MoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIGlmICghdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vVGFza3NIVE1MID0gYCA8aDM+Tm8gdGFza3MgYXZhaWxhYmxlLiA8Yj5BZGQgYSBQcm9qZWN0IDwvYj4gYW5kICBDbGljayB0aGUgKCspIGJ1dHRvbiBiZWxvdyB0byBhZGQgdGFza3M8L2gzPmBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBub1Rhc2tzSFRNTClcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvPT57XHJcbiAgICAgICAgICAgICAgIGxldCBwcm9qSWQgPSB0b2RvLnByb2pJZCBcclxuICAgICAgICAgICAgICAgICB0b2RvID0gdG9kby50YXNrZGV0YWlsXHJcbiAgICAgICAgICAgICAgICBUYXNrVmlldyhwcm9qSWQsdG9kby5pZCx0b2RvLnRpdGxlLHRvZG8uZGVzY3JpcHRpb24sdG9kby5wcmlvcml0eSx0b2RvLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYoZWxlbWVudFRhcmdldC5pZCA9PT0gXCJ0aGlzd2Vla1wiKXtcclxuICAgICAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHdlZWsgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgpKVxyXG4gICAgICAgIHNldEFjdGl2ZVRhc2soZWxlbWVudClcclxuICAgICAgICBjbGVhckNvbnRhaW5lcih0YXNrQ29udGFpbmVyKVxyXG4gICAgICAgIGxldCB0b2RvcyA9IGxpc3QuZ2V0V2Vla1Rhc2tzKHdlZWspXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICAgICAgaWYgKCF0b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIDxiPkFkZCBhIFByb2plY3QgPC9iPiBhbmQgIENsaWNrIHRoZSAoKykgYnV0dG9uIGJlbG93IHRvIGFkZCB0YXNrczwvaDM+YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5vVGFza3NIVE1MKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICBlbHNleyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvaklkID0gdG9kby5wcm9qSWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8gPSB0b2RvLnRhc2tkZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1ZpZXcocHJvaklkLHRvZG8uaWQsdG9kby50aXRsZSx0b2RvLmRlc2NyaXB0aW9uLHRvZG8ucHJpb3JpdHksdG9kby5kdWVEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuIH1cclxuXHJcblxyXG4vLyBsaXN0LmFkZFByb2plY3QoXCJMYXVuZHJ5XCIpIiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuXHJcblxyXG5cclxuLy8gISBUTyBDSEFOR0UhIVxyXG5pbXBvcnQgeyBnZXRJdGVtQnlJZCxkZWxldGVQcm9qZWN0LCBkZWxldGVUYXNrIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7IGdldExpc3QgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFza1ZpZXcocHJvamVjdElkLGlkLCB0aXRsZSwgZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSxyZW1haW5pbmdEYXlzKXtcclxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuXHJcbiAgICBsZXQgdGFza0h0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrJHtpZH0ke3Byb2plY3RJZH1cIiBjbGFzcz1cInRhc2tcIiBkYXRhLXRhc2staWQ9XCIke2lkfVwiIGRhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdElkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvbXBsZXRlZFwiIGlkPVwiXCIgY2xhc3M9XCJ0YXNrLWRvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2tuYW1lJHtpZH1cIj4ke3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vIGVkaXQtdGFza1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaCBkZWxldGUtdGFza1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cImRheXMke2lkfVwiPnJlbWFpbmluZ0RheXM8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicHJpb3JpdHkke2lkfVwiPlByaW9yaXR5OiAke3ByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvbiR7aWR9XCI+RGVzY3JpcHRpb246JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVkaXQtdGFzayR7aWR9XCIgY2xhc3M9XCJlZGl0LXRhc2stZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImVkaXQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdGFza25hbWUke2lkfVwiPlRhc2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVkaXQtdGFza25hbWUke2lkfVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtZGVzY3JpcHRpb24ke2lkfVwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJlZGl0LWRlc2NyaXB0aW9uJHtpZH1cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3c9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC1kdWVkYXRlJHtpZH1cIj5EdWUgRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlZGF0ZVwiIGlkPVwiZWRpdC1kdWVkYXRlJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5JHtpZH1cIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwic2VsZWN0LXByaW9yaXR5JHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiIGlkPVwibG93XCIgY2xhc3M9XCJvcHRpb25cIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIGlkPVwibWVkaXVtXCIgY2xhc3M9XCJvcHRpb25cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiBpZD1cImhpZ2hcIiBjbGFzcz1cIm9wdGlvblwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1lZGl0LWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNhbmNlbFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0YXNrSHRtbClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9YClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBTaG93IHRhc2sgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGV0YWlscyA9IHRhc2tDb250LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBeIEVkaXQgdGFza1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH0+Lm1haW4tZGV0YWlsPi5lZGl0LXRhc2tgKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRWRpdGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC10YXNrJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0IHZhbHVlcyBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC10YXNrbmFtZSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdERlc2NyaXBydGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtZGVzY3JpcHRpb24ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC1kdWVkYXRlJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VsZWN0LXByaW9yaXR5JHtpZH1gKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0UHJpb3JpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2tOYW1lSW5wdXQudmFsdWUgPSB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXREZXNjcmlwcnRpb25JbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXREYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlPcHRpb25zID0gZWRpdFByaW9yaXR5Lm9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5T3B0aW9uc1tpXS52YWx1ZSA9PT0gcHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5T3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBlZGl0UHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tFZGl0Zm9ybS5jbGFzc0xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICYgVGFzayBmb3JtIHN1Ym1pc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRWRpdEZvcm0gPSB0YXNrRWRpdGZvcm0ucXVlcnlTZWxlY3RvcihgZm9ybWApIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrbmFtZSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGVzY3JpcHRpb24ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrX3ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3ByaW9yaXR5JHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXiBwcm9qZWN0IHRvIGVkaXQgZnJvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2V0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IGdldEl0ZW1CeUlkKGdldFByb2plY3QsJ3Byb2plY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0YXNrRWRpdEZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGF0YU9iamVjdCA9ICBPYmplY3QuZnJvbUVudHJpZXModGFza0Zvcm1EYXRhLmVudHJpZXMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZ2V0TGlzdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmdldFByb2plY3QocHJvamVjdERhdGEuaWQpLmVkaXRUYXNrKHByb2plY3REYXRhLmlkLGlkLHRhc2tEYXRhT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBkYXRhLmdldFByb2plY3QocHJvamVjdERhdGEuaWQpLmdldFRhc2tzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3NbaWRdLnJlbWFpbmluZ0RheXMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza19uYW1lLnRleHRDb250ZW50ID0gdGFza0RhdGFPYmplY3QudGFza25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tEYXRhT2JqZWN0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrRGF0YU9iamVjdC5wcmlvcml0eVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0RhdGFPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICYgR2V0IHRhc2sgSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzay5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBeIERlbGV0ZSB0YXNrXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9Pi5tYWluLWRldGFpbD4uZGVsZXRlLXRhc2tgKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVRhc2spXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4gQ29tcGxldGUgVGFza1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wbGV0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9Pi5tYWluLWRldGFpbD5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAhIENSRUFURSBGVU5DVElPTiBGT1IgVEFTSyBDT01QTEVURVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+LnRhc2stbmFtZWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGlkLCB0aXRsZSkge1xyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgICAgIC8vIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG5cclxuICAgIC8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcclxuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSR7aWR9IGNsYXNzPVwicHJvamVjdFwiPiR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoIGRlbGV0ZS1wcm9qZWN0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2plY3RWaWV3KVxyXG4gICAgICAgIC8vIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9Eb3MpXHJcblxyXG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApXHJcbiAgICBsZXQgZGVsZXRlcHJvamVjdCA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7aWR9Pi5kZWxldGUtcHJvamVjdGApXHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRhc2tzKVxyXG4gICAgZGVsZXRlcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlUHJvamVjdClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdClcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0SWQsaWQsIHRpdGxlLCBkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKSB7XHJcblxyXG4gICAgVGFza1ZpZXcocHJvamVjdElkLGlkLHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhlbGVtZW50KSB7XHJcbiAgICAvL1NldCBhY3RpdmUgQnV0dG9uXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXHJcbiAgICBcclxuICAgICAgbGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpXHJcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuXHJcbiAgICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICYgVE8gQ0hBTkdFIEFTQVAhXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhc2soZWxlbWVudClcclxuICAgICAgICAgICAgY2xlYXJDb250YWluZXIodGFza0NvbnRhaW5lcilcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hY3RpdmUnKVxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGdldEl0ZW1CeUlkKGFjdGl2ZVByb2plY3QsICdwcm9qZWN0JylcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBwcm9qZWN0LnByb2plY3REYXRhXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBwcm9qZWN0LmlkXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IGRhdGEuZ2V0VGFza3MoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1Rhc2tzSFRNTCA9IGAgPGgzPk5vIHRhc2tzIGF2YWlsYWJsZS4gQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tWaWV3KHByb2plY3RJZCx0YXNrLmlkLHRhc2sudGl0bGUsdGFzay5kZXNjcmlwdGlvbix0YXNrLnByaW9yaXR5LHRhc2suZHVlRGF0ZSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbi8vIGRpc3BsYXkgYWxsIFRhc2tzXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXVxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdCAhPSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBldmVudExpc3RlbmVycywgZGlzcGxheVRhc2tzLCBhZGRQcm9qZWN0LCBhZGRUYXNrLHNldEFjdGl2ZVRhc2ssY2xlYXJDb250YWluZXIgfSIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG8uanNcIjtcclxuaW1wb3J0IHsgc2F2ZUVkaXRUYXNrLCBzYXZlVGFzayxkZWxldGVUYXNrIGFzIGRlbGV0ZVRhc2tTdG9yYWdlfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGFkZFRhc2sgYXMgYWRkVGFza1VJIH0gZnJvbSBcIi4vVUkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRhc2tzID0gW11cclxuICAgICAgICB0aGlzLnRhc2tJZCA9IDBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UHJvamVjdEluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB0YXNrczogdGhpcy50YXNrc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRUYXNrKHByb2plY3RJZCx0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSwgZHVlRGF0ZSxhdmFpbGFibGUpIHtcclxuICAgICAgICBsZXQgdG9EbyA9IG5ldyBUb0RvKHRoaXMudGFza0lkLHRpdGxlLGRlc2NyaXB0aW9uLCBkdWVEYXRlLHByaW9yaXR5KTtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godG9EbylcclxuICAgICAgICBcclxuICAgICAgICBpZighYXZhaWxhYmxlKXtcclxuICAgICAgICAgICAgZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpXHJcbiAgICAgICAgICAgIGFkZFRhc2tVSShwcm9qZWN0SWQsdGhpcy50YXNrSWQsIHRpdGxlLCBkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKVxyXG4gICAgICAgICAgICBzYXZlVGFzayhwcm9qZWN0SWQsIHRvRG8pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhc2tJZCsrXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRhc2socHJvamVjdElkLHRhc2tJZCwgZGF0YSl7XHJcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrSWQpXHJcbiAgICAgICAgLy8gdGhpcy50YXNrc1t0YXNrSW5kZXhdLmVkaXRUYXNrKClcclxuICAgICAgIGxldCB0YXNrID0gIHRoaXMudGFza3NbdGFza0luZGV4XS5lZGl0VGFzayhkYXRhLnRhc2tuYW1lLFxyXG4gICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLGRhdGEuZHVlZGF0ZSxkYXRhLnByaW9yaXR5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3NbdGFza0luZGV4XSlcclxuXHJcbiAgICAgICAgc2F2ZUVkaXRUYXNrKHByb2plY3RJZCx0YXNrSWQsdGFzaylcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHByb2plY3RJZCx0YXNrSWQpe1xyXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKVxyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3MpXHJcbiAgICAgICAgZGVsZXRlVGFza1N0b3JhZ2UocHJvamVjdElkLHRhc2tJZClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vLyBsZXQgUHJvamVjdGEgPSBuZXcgUHJvamVjdCgnQ29kaW5nJylcclxuXHJcbi8vIFByb2plY3RhLmFkZFRvRG8oJ1N0YXJ0IENvZGluZyBIVE1MJywgbmV3IERhdGUoKSlcclxuLy8gUHJvamVjdGEuYWRkVG9EbygnU3RhcnQgQ29kaW5nIENTUycsIG5ldyBEYXRlKCkpXHJcbi8vIGNvbnNvbGUubG9nKFByb2plY3RhLnRpdGxlKTtcclxuLy8gY29uc29sZS5sb2coUHJvamVjdGEuZ2V0QWxsVG9EbygpKSIsImltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSAnLi90b0RvTGlzdCdcclxuaW1wb3J0IHsgYWRkUHJvamVjdCwgZGlzcGxheVRhc2sgfSBmcm9tICcuL1VJJztcclxuXHJcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gICAgbGV0IHN0b3JhZ2U7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxyXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8XHJcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcclxuICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XHJcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcclxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAgICAgc3RvcmFnZSAmJlxyXG4gICAgICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoZGF0YSkge1xyXG5cclxuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XHJcbiAgICAgICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcclxuICAgICAgICAgICAgc3RvcmFnZS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hZGRQcm9qZWN0KHByb2plY3QudGl0bGUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgaWYocHJvamVjdC50YXNrcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IGRhdGEuZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSBwcm9qZWN0LnRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5hZGRUYXNrKHByb2plY3QuaWQsdGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlLHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgIHRvZGF5LmNsaWNrKCkgICAgICBcclxuICAgIH0pOyAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmdldFByb2plY3RzKCkpXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RvcmFnZURhdGEoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpXHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpXHJcbiAgICAgICAgbGV0IGxhc3REYXRhSWQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uaWRcclxuICAgICAgICByZXR1cm4gKGxhc3REYXRhSWQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdChkYXRhKSB7XHJcblxyXG4gICAgbGV0IG9sZERhdGEgPSBnZXREYXRhKClcclxuICAgIG9sZERhdGEucHVzaChkYXRhKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZCl7XHJcbiAgICBsZXQgb2xkRGF0YSA9IGdldERhdGEoKVxyXG4gICAgb2xkRGF0YS5zcGxpY2UoaWQsMSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrKHByb2plY3RJZCwgdGFzaykge1xyXG4gICAgbGV0IG9sZERhdGEgPSBnZXREYXRhKClcclxuICAgIGNvbnNvbGUubG9nKG9sZERhdGEpXHJcbiAgICBvbGREYXRhW3Byb2plY3RJZF0udGFza3MucHVzaCh0YXNrKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVkaXRUYXNrKHByb2plY3RJZCx0YXNrSWQsdGFzayl7XHJcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoKVxyXG4gICAgZGF0YVtwcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0gPSB0YXNrXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJZCwgdGFza0lkKXtcclxuICAgIGxldCBkYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBkYXRhW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwxKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIikpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmFnZSwgc2F2ZVByb2plY3QgYXMgc2F2ZVByb2pUb1N0b3JhZ2UsIGNoZWNrU3RvcmFnZURhdGEsZGVsZXRlUHJvamVjdCBhcyBkZWxQcm9qRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgYXMgZG9tQWRkUHJvamVjdCB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5pZCA9IDBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QodGl0bGUsIGF2YWlsYWJsZSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGhpcy5pZCwgdGl0bGUpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpXHJcbiAgICAgICAgZG9tQWRkUHJvamVjdChgcHJvamVjdCR7dGhpcy5pZH1gLCBwcm9qZWN0RGF0YS50aXRsZSlcclxuICAgICAgICB0aGlzLmlkKytcclxuICAgICAgICAgICAgaWYgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qVG9TdG9yYWdlKHByb2plY3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBpZClcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsMSlcclxuICAgICAgICBkZWxQcm9qRnJvbVN0b3JhZ2UoaWQpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoaWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgZ2V0QWxsVGFza3MoKXtcclxuICAgICAgICBsZXQgdGFza3MgPSBbXVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2s9PntcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGV0YWlsID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpIFxyXG4gICAgICAgICAgICAgICAgaWYodGFzay5yZW1haW5pbmdEYXlzKCkgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrZGV0YWlsOnRhc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pJZDpwcm9qZWN0RGV0YWlsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFza3NcclxuICAgIH1cclxuICAgIGdldFRvZGF5VGFza3MoKXtcclxuICAgICAgICBsZXQgdGFza3MgPSBbXVxyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzaz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3REZXRhaWwgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkgXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrLnJlbWFpbmluZ0RheXMoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrZGV0YWlsOnRhc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pJZDpwcm9qZWN0RGV0YWlsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0YXNrc1xyXG5cclxuICAgIH1cclxuICAgIGdldFdlZWtUYXNrcyh3ZWVrKXtcclxuICAgICAgICBsZXQgdGFza3MgPSBbXVxyXG4gICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERldGFpbCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKSBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2sudGFza1dlZWsoKSA9PT0gd2VlayAmJiB0YXNrLnJlbWFpbmluZ0RheXMoKSA+PSAwKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tkZXRhaWw6dGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklkOnByb2plY3REZXRhaWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGxldCB0b0RvcyA9IG5ldyBUb0RvTGlzdCgpXHJcblxyXG4vLyB0b0Rvcy5hZGRQcm9qZWN0KCdDb2RpbmcnKVxyXG4vLyB0b0Rvcy5nZXRQcm9qZWN0cygpWzFdLmFkZFRvRG8oJ0xlYXJuIGFuZCBQcmFjdGljZSBIVE1MJywgbmV3IERhdGUoKSlcclxuXHJcbi8vIHRvRG9zLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvamVjdC50aXRsZX0gYClcclxuLy8gICAgIHByb2plY3QuZ2V0QWxsVG9EbygpLmZvckVhY2goKHRvZG8pID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxyXG4vLyAgICAgfSlcclxuLy8gICAgIGNvbnNvbGUubG9nKCdcXG4nKVxyXG4vLyB9KVxyXG5cclxuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLGdldElTT1dlZWtZZWFyfSBmcm9tIFwiZGF0ZS1mbnNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCx0aXRsZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSlcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSlcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbXBsZXRlZCgpe1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtYWluaW5nRGF5cygpe1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBsZXQgZGF0ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmR1ZURhdGUsY3VycmVudERhdGUpXHJcbiAgICAgICAgcmV0dXJuIGRhdGVcclxuICAgIH1cclxuICAgIHRhc2tXZWVrKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldElTT1dlZWtZZWFyKHRoaXMuZHVlRGF0ZSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==