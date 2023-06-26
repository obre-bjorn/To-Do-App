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


// et storage = JSON.parse(localStorage.getItem('toDoList'))
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
    list.addProject(projectData.value,false)
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
        let dataAvailability = checkStorageData(data)
        if (dataAvailability > 0) {


            let storage = JSON.parse(localStorage.getItem('toDoList'))
                // console.log(storage)
                console.log(storage)
            let projects = storage.length

            for(let i = 0;i < projects; i++){
               let  project = storage[i]
                data.addProject(project.title,true)
                console.log(project.tasks)

                if(project.tasks.length > 0){
                    let projs = data.getProjects()
                    console.log(projs)
    
                    let tasks = project.tasks
                    for(let j=0; j < tasks.length; j++){
                        let task = tasks[j]
                        console.log(task)
                         projs[i].addTask(project.id,task.title,task.description,task.priority,task.dueDate,true)
                    }
                    
                }

            }
            // storage.forEach(project => {
            //     data.addProject(project.title, true)
            //     console.log(project)

            //     if(project.tasks.length){
            //         let projects = data.getProjects()
    
            //         let tasks = project.tasks
            //         tasks.forEach(task=> {
            //             projects[projects.length - 1].addTask(project.id,task.title,task.description,task.priority,task.dueDate,true)
            //         })
            //     }
            // });
            

                // data.addProject('Coding')
                // data.getProjects()[1].addToDo('Learn and Practice HTML', new Date())
            
            
        }

       // localStorage.setItem("toDoList", JSON.stringify(data.getProjects()));
       
       
       
       // console.log(data.getProjects())
       document.addEventListener("DOMContentLoaded", function() {
           
           let today = document.querySelector('#home')
           today.click()
        });
        
    } 
    
    
}


function checkStorageData(data) {
    let local= JSON.parse(localStorage.getItem('toDoList'))

    if(local == null){

        localStorage.setItem("toDoList", JSON.stringify(data.getProjects()))
        console.log('Initial storage saved:', data.getProjects());
        return

    }else{
        
        return 1
    }
    
        // let lastIndex = local.length - 1
        // let lastDataId = local[lastIndex].id
        // return (lastDataId)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZklTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIHtcbiAgICB3ZWVrU3RhcnRzT246IDFcbiAgfSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yYWdlLHNhdmVQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vbW9kdWxlcy90b0RvTGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IGFzIGFkLHNldEFjdGl2ZVRhc2ssY2xlYXJDb250YWluZXIsVGFza1ZpZXcgfSBmcm9tIFwiLi9tb2R1bGVzL1VJLmpzXCI7XHJcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxubGV0IGxpc3QgPSBuZXcgVG9Eb0xpc3QoKVxyXG5cclxuXHJcblxyXG5jcmVhdGVTdG9yYWdlKGxpc3QpXHJcblxyXG5cclxuLy8gZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxyXG5cclxuLy8gbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG5cclxuLy8gc3RvcmFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXHJcbi8vICAgICAgICAgLy8gbGV0IHByb2plY3QgPSBlbGVtZW50LmdldFByb2plY3RJbmZvKClcclxuLy8gICAgIGxpc3QuYWRkUHJvamVjdChlbGVtZW50LmlkLCBlbGVtZW50LnRpdGxlKVxyXG4vLyB9KTtcclxuXHJcblxyXG4vLyBTZXQgVG9kYXkgcHJvamVjdCB0byBhY3RpdmVcclxuXHJcblxyXG5cclxubGV0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIilcclxuXHJcbmFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBwcm9qZWN0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XHJcbiAgICBsaXN0LmFkZFByb2plY3QocHJvamVjdERhdGEudmFsdWUsZmFsc2UpXHJcbiAgICBhZGRQcm9qLnJlc2V0KClcclxufSlcclxuXHJcblxyXG4vLyAqIFZpZXcgYWRkIHRhc2sgZm9ybVxyXG5sZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXHJcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn0pXHJcbmxldCBjYW5jZWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbF9hZGRfdGFzaycpXHJcblxyXG5jYW5jZWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIEFERCBUQVNLIEZPUk1cclxubGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWZvcm1cIilcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbiAgICAvLyBeIEdldCBGb3JtIGRhdGFcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0YSA9IG5ldyBGb3JtRGF0YShhZGRUYXNrKVxyXG4gICAgbGV0IHRhc2tEYXRhT2JqZWN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKHRhc2tEYXRhLmVudHJpZXMoKSlcclxuXHJcbiAgICAvLyBeXHJcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpXHJcbiAgICBsZXQgcHJvamVjdCA9IGdldEl0ZW1CeUlkKGFjdGl2ZVByb2plY3QsICdwcm9qZWN0JylcclxuICAgIHByb2plY3QucHJvamVjdERhdGEuYWRkVGFza1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgcHJvamVjdC5pZCwgdGFza0RhdGFPYmplY3QudGFza25hbWUsIFxyXG4gICAgICAgICAgICB0YXNrRGF0YU9iamVjdC5kZXNjcmlwdGlvbix0YXNrRGF0YU9iamVjdC5wcmlvcml0eSxcclxuICAgICAgICAgICAgdGFza0RhdGFPYmplY3QuZHVlZGF0ZSxmYWxzZVxyXG4gICAgICAgIClcclxuXHJcbiAgICBhZGRUYXNrLnJlc2V0KClcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHJcblxyXG59KVxyXG5cclxuLy8gXiBSZW1vdmUgUHJvamVjdCBFbGVtZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpe1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgbGV0IHByb2pFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgbGV0IHByb2plY3REYXRhID0gIGdldEl0ZW1CeUlkKHByb2pFbGVtZW50LCdwcm9qZWN0JylcclxuICAgIHByb2pFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvakVsZW1lbnQpXHJcbiAgICBsaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdERhdGEucHJvamVjdERhdGEuaWQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKXtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAvL14gR0VUIFBST0pFQ1QgVE8gREVMRVRFIEZST01cclxuICAgIC8vIGxldCBnZXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgIC8vIGxldCBwcm9qZWN0RGF0YSA9IGdldEl0ZW1CeUlkKGdldFByb2plY3QsJ3Byb2plY3QnKVxyXG5cclxuICAgIC8vXiBHRVQgVEFTSyBUTyBCRSBERUxFVEVEXHJcbiAgICBsZXQgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgIGxldCB0YXNrSWQgPSBwYXJzZUludCh0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tJZClcclxuICAgIGxldCBwcm9qZWN0SWQgPSBwYXJzZUludCh0YXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3RJZClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpXHJcbiAgICAvLyBsZXQgdGFza0lkID0gZ2V0SXRlbUJ5SWQodGFza0VsZW1lbnQsJ3Rhc2snKVxyXG5cclxuICAgIHRhc2tFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFza0VsZW1lbnQpXHJcbiAgICBsZXQgcHJvamVjdCA9IGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpXHJcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2socHJvamVjdElkLHRhc2tJZClcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCgpe1xyXG4gICAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gVE9ETyA6IENoYW5nZSBtb2R1bGUgbG9jYXRpb24gXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1CeUlkKGVsZW1lbnQsIGl0ZW0pIHtcclxuXHJcblxyXG4gICAgLy8gVE9ETzogQ0hBTkdFIFRPIFVTRSBTV0lUQ0ggJiBDQVNFIC0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBpZiAoaXRlbSA9PSBcInByb2plY3RcIikge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBlbGVtZW50LmlkLnNwbGl0KCdwcm9qZWN0JylbMV1cclxuICAgICAgICBsZXQgZGF0YSA9IGxpc3QuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IGRhdGEuZmluZChwcm9qID0+IHByb2ouaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHByb2plY3RJZCwgcHJvamVjdERhdGE6IHByb2plY3REYXRhIH1cclxuICAgIH0gZWxzZSBpZihpdGVtID09PSBcInRhc2tcIil7XHJcbiAgICAgICAgbGV0IHRhc2tJZCA9IGVsZW1lbnQuaWQuc3BsaXQoJ3Rhc2snKVsxXVxyXG4gICAgICAgIHJldHVybiB0YXNrSWRcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gIF4gTWVudSBkaXNwbGF5XHJcbmxldCBtZW51ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51JyldXHJcblxyXG5tZW51LmZvckVhY2goYnV0dG9uID0+ICB7IFxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5TWVudVRhc2spXHJcbn1cclxuXHJcbiApXHJcblxyXG5cclxuIGZ1bmN0aW9uIGRpc3BsYXlNZW51VGFzayhlbGVtZW50KXtcclxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gZWxlbWVudC50YXJnZXRcclxuICAgIFxyXG4gICAgbGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpXHJcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudFRhcmdldC5pZClcclxuICAgIGlmKGVsZW1lbnRUYXJnZXQuaWQgPT09IFwiaG9tZVwiKXtcclxuICAgICAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgbGV0IHRvZG9zID0gbGlzdC5nZXRBbGxUYXNrcygpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIDxiPkFkZCBhIFByb2plY3QgPC9iPiBhbmQgQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvaklkID0gdG9kby5wcm9qSWQgXHJcbiAgICAgICAgICAgICB0b2RvID0gdG9kby50YXNrZGV0YWlsXHJcbiAgICAgICAgICAgIFRhc2tWaWV3KHByb2pJZCx0b2RvLmlkLHRvZG8udGl0bGUsdG9kby5kZXNjcmlwdGlvbix0b2RvLnByaW9yaXR5LHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICB9KX1cclxuXHJcbiAgICB9XHJcbiAgICAgaWYoZWxlbWVudFRhcmdldC5pZCA9PT0gXCJ0b2RheVwiKXtcclxuICAgICAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgbGV0IHRvZG9zID0gbGlzdC5nZXRUb2RheVRhc2tzKClcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1Rhc2tzSFRNTCA9IGAgPGgzPk5vIHRhc2tzIGF2YWlsYWJsZS4gPGI+QWRkIGEgUHJvamVjdCA8L2I+IGFuZCAgQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbz0+e1xyXG4gICAgICAgICAgICAgICBsZXQgcHJvaklkID0gdG9kby5wcm9qSWQgXHJcbiAgICAgICAgICAgICAgICAgdG9kbyA9IHRvZG8udGFza2RldGFpbFxyXG4gICAgICAgICAgICAgICAgVGFza1ZpZXcocHJvaklkLHRvZG8uaWQsdG9kby50aXRsZSx0b2RvLmRlc2NyaXB0aW9uLHRvZG8ucHJpb3JpdHksdG9kby5kdWVEYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmKGVsZW1lbnRUYXJnZXQuaWQgPT09IFwidGhpc3dlZWtcIil7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB3ZWVrID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoKSlcclxuICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgY2xlYXJDb250YWluZXIodGFza0NvbnRhaW5lcilcclxuICAgICAgICBsZXQgdG9kb3MgPSBsaXN0LmdldFdlZWtUYXNrcyh3ZWVrKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vVGFza3NIVE1MID0gYCA8aDM+Tm8gdGFza3MgYXZhaWxhYmxlLiA8Yj5BZGQgYSBQcm9qZWN0IDwvYj4gYW5kICBDbGljayB0aGUgKCspIGJ1dHRvbiBiZWxvdyB0byBhZGQgdGFza3M8L2gzPmBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBub1Rhc2tzSFRNTClcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2pJZCA9IHRvZG8ucHJvaklkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvID0gdG9kby50YXNrZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tWaWV3KHByb2pJZCx0b2RvLmlkLHRvZG8udGl0bGUsdG9kby5kZXNjcmlwdGlvbix0b2RvLnByaW9yaXR5LHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiB9XHJcblxyXG5cclxuLy8gbGlzdC5hZGRQcm9qZWN0KFwiTGF1bmRyeVwiKSIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG5cclxuXHJcbi8vICEgVE8gQ0hBTkdFISFcclxuaW1wb3J0IHsgZ2V0SXRlbUJ5SWQsZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tWaWV3KHByb2plY3RJZCxpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUscmVtYWluaW5nRGF5cyl7XHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXHJcblxyXG4gICAgbGV0IHRhc2tIdG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFzayR7aWR9JHtwcm9qZWN0SWR9XCIgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNrLWlkPVwiJHtpZH1cIiBkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3RJZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZWRcIiBpZD1cIlwiIGNsYXNzPVwidGFzay1kb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrbmFtZSR7aWR9XCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBlZGl0LXRhc2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggZGVsZXRlLXRhc2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJkYXlzJHtpZH1cIj5yZW1haW5pbmdEYXlzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInByaW9yaXR5JHtpZH1cIj5Qcmlvcml0eTogJHtwcmlvcml0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGVzY3JpcHRpb24ke2lkfVwiPkRlc2NyaXB0aW9uOiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlZGl0LXRhc2ske2lkfVwiIGNsYXNzPVwiZWRpdC10YXNrLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJlZGl0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LXRhc2tuYW1lJHtpZH1cIj5UYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlZGl0LXRhc2tuYW1lJHtpZH1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LWRlc2NyaXB0aW9uJHtpZH1cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZWRpdC1kZXNjcmlwdGlvbiR7aWR9XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93PVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtZHVlZGF0ZSR7aWR9XCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIiBpZD1cImVkaXQtZHVlZGF0ZSR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eSR7aWR9XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInNlbGVjdC1wcmlvcml0eSR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiBpZD1cImxvd1wiIGNsYXNzPVwib3B0aW9uXCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiIGNsYXNzPVwib3B0aW9uXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgaWQ9XCJoaWdoXCIgY2xhc3M9XCJvcHRpb25cIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ZWRpdC1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1mb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjYW5jZWxcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGFza0h0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfWApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4gU2hvdyB0YXNrIGRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RldGFpbHMgPSB0YXNrQ29udC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBFZGl0IHRhc2tcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9Pi5tYWluLWRldGFpbD4uZWRpdC10YXNrYClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdGFzayR7aWR9YClcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dCB2YWx1ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRUYXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtdGFza25hbWUke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXREZXNjcmlwcnRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LWRlc2NyaXB0aW9uJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtZHVlZGF0ZSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlbGVjdC1wcmlvcml0eSR7aWR9YClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFByaW9yaXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrTmFtZUlucHV0LnZhbHVlID0gdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGVzY3JpcHJ0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5T3B0aW9ucyA9IGVkaXRQcmlvcml0eS5vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlPcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eU9wdGlvbnNbaV0udmFsdWUgPT09IHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eU9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWRpdFByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrRWRpdGZvcm0uY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAmIFRhc2sgZm9ybSBzdWJtaXNpb25cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRGb3JtID0gdGFza0VkaXRmb3JtLnF1ZXJ5U2VsZWN0b3IoYGZvcm1gKSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza25hbWUke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rlc2NyaXB0aW9uJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza19wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcmlvcml0eSR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF4gcHJvamVjdCB0byBlZGl0IGZyb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdldFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBnZXRJdGVtQnlJZChnZXRQcm9qZWN0LCdwcm9qZWN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdERhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFza0VkaXRGb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RhdGFPYmplY3QgPSAgT2JqZWN0LmZyb21FbnRyaWVzKHRhc2tGb3JtRGF0YS5lbnRyaWVzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGdldExpc3QoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5nZXRQcm9qZWN0KHByb2plY3REYXRhLmlkKS5lZGl0VGFzayhwcm9qZWN0RGF0YS5pZCxpZCx0YXNrRGF0YU9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9zID0gZGF0YS5nZXRQcm9qZWN0KHByb2plY3REYXRhLmlkKS5nZXRUYXNrcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zW2lkXS5yZW1haW5pbmdEYXlzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tEYXRhT2JqZWN0LnRhc2tuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGF0YU9iamVjdC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrX3ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza0RhdGFPYmplY3QucHJpb3JpdHlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tEYXRhT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAmIEdldCB0YXNrIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2suaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBEZWxldGUgdGFza1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+LmRlbGV0ZS10YXNrYClcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBeIENvbXBsZXRlIFRhc2tcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdYClcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISBDUkVBVEUgRlVOQ1RJT04gRk9SIFRBU0sgQ09NUExFVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH0+Lm1haW4tZGV0YWlsPi50YXNrLW5hbWVgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXJzKCkge1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChpZCwgdGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuICAgICAgICAvLyBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuXHJcbiAgICAvLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ke2lkfSBjbGFzcz1cInByb2plY3RcIj4ke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaCBkZWxldGUtcHJvamVjdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9qZWN0VmlldylcclxuICAgICAgICAvLyBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvRG9zKVxyXG5cclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKVxyXG4gICAgbGV0IGRlbGV0ZXByb2plY3QgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfT4uZGVsZXRlLXByb2plY3RgKVxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUYXNrcylcclxuICAgIGRlbGV0ZXByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVByb2plY3QpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdElkLGlkLCB0aXRsZSwgZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xyXG5cclxuICAgIFRhc2tWaWV3KHByb2plY3RJZCxpZCx0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoZWxlbWVudCkge1xyXG4gICAgLy9TZXQgYWN0aXZlIEJ1dHRvblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxyXG4gICAgXHJcbiAgICAgIGxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKVxyXG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcblxyXG4gICAgaWYgKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAmIFRPIENIQU5HRSBBU0FQIVxyXG4gICAgICAgICAgICBzZXRBY3RpdmVUYXNrKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBnZXRJdGVtQnlJZChhY3RpdmVQcm9qZWN0LCAncHJvamVjdCcpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcHJvamVjdC5wcm9qZWN0RGF0YVxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdC5pZFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdGFza3MgPSBkYXRhLmdldFRhc2tzKClcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIENsaWNrIHRoZSAoKykgYnV0dG9uIGJlbG93IHRvIGFkZCB0YXNrczwvaDM+YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5vVGFza3NIVE1MKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBUYXNrVmlldyhwcm9qZWN0SWQsdGFzay5pZCx0YXNrLnRpdGxlLHRhc2suZGVzY3JpcHRpb24sdGFzay5wcmlvcml0eSx0YXNrLmR1ZURhdGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4vLyBkaXNwbGF5IGFsbCBUYXNrc1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlVGFzayhlbGVtZW50KSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV1cclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QgIT0gdGhpcykge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZXZlbnRMaXN0ZW5lcnMsIGRpc3BsYXlUYXNrcywgYWRkUHJvamVjdCwgYWRkVGFzayxzZXRBY3RpdmVUYXNrLGNsZWFyQ29udGFpbmVyIH0iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmltcG9ydCB7IHNhdmVFZGl0VGFzaywgc2F2ZVRhc2ssZGVsZXRlVGFzayBhcyBkZWxldGVUYXNrU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUYXNrIGFzIGFkZFRhc2tVSSB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgICAgICAgdGhpcy50YXNrSWQgPSAwXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb2plY3RJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgdGFza3M6IHRoaXMudGFza3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVGFzayhwcm9qZWN0SWQsdGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksIGR1ZURhdGUsYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgbGV0IHRvRG8gPSBuZXcgVG9Ebyh0aGlzLnRhc2tJZCx0aXRsZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSxwcmlvcml0eSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRvRG8pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWF2YWlsYWJsZSl7XHJcbiAgICAgICAgICAgIGR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgICAgICBhZGRUYXNrVUkocHJvamVjdElkLHRoaXMudGFza0lkLCB0aXRsZSwgZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSlcclxuICAgICAgICAgICAgc2F2ZVRhc2socHJvamVjdElkLCB0b0RvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrSWQrK1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUYXNrKHByb2plY3RJZCx0YXNrSWQsIGRhdGEpe1xyXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKVxyXG4gICAgICAgIC8vIHRoaXMudGFza3NbdGFza0luZGV4XS5lZGl0VGFzaygpXHJcbiAgICAgICBsZXQgdGFzayA9ICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZWRpdFRhc2soZGF0YS50YXNrbmFtZSxcclxuICAgICAgICAgICAgZGF0YS5kZXNjcmlwdGlvbixkYXRhLmR1ZWRhdGUsZGF0YS5wcmlvcml0eSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzW3Rhc2tJbmRleF0pXHJcblxyXG4gICAgICAgIHNhdmVFZGl0VGFzayhwcm9qZWN0SWQsdGFza0lkLHRhc2spXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayhwcm9qZWN0SWQsdGFza0lkKXtcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZClcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsMSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKVxyXG4gICAgICAgIGRlbGV0ZVRhc2tTdG9yYWdlKHByb2plY3RJZCx0YXNrSWQpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy8gbGV0IFByb2plY3RhID0gbmV3IFByb2plY3QoJ0NvZGluZycpXHJcblxyXG4vLyBQcm9qZWN0YS5hZGRUb0RvKCdTdGFydCBDb2RpbmcgSFRNTCcsIG5ldyBEYXRlKCkpXHJcbi8vIFByb2plY3RhLmFkZFRvRG8oJ1N0YXJ0IENvZGluZyBDU1MnLCBuZXcgRGF0ZSgpKVxyXG4vLyBjb25zb2xlLmxvZyhQcm9qZWN0YS50aXRsZSk7XHJcbi8vIGNvbnNvbGUubG9nKFByb2plY3RhLmdldEFsbFRvRG8oKSkiLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gJy4vdG9Eb0xpc3QnXHJcbmltcG9ydCB7IGFkZFByb2plY3QsIGRpc3BsYXlUYXNrIH0gZnJvbSAnLi9VSSc7XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgICAgIHN0b3JhZ2UgJiZcclxuICAgICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yYWdlKGRhdGEpIHtcclxuXHJcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xyXG4gICAgICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcclxuICAgICAgICBsZXQgZGF0YUF2YWlsYWJpbGl0eSA9IGNoZWNrU3RvcmFnZURhdGEoZGF0YSlcclxuICAgICAgICBpZiAoZGF0YUF2YWlsYWJpbGl0eSA+IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcmFnZSlcclxuICAgICAgICAgICAgbGV0IHByb2plY3RzID0gc3RvcmFnZS5sZW5ndGhcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IHByb2plY3RzOyBpKyspe1xyXG4gICAgICAgICAgICAgICBsZXQgIHByb2plY3QgPSBzdG9yYWdlW2ldXHJcbiAgICAgICAgICAgICAgICBkYXRhLmFkZFByb2plY3QocHJvamVjdC50aXRsZSx0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcylcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0LnRhc2tzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qcyA9IGRhdGEuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2pzKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tzW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qc1tpXS5hZGRUYXNrKHByb2plY3QuaWQsdGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlLHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhLmFkZFByb2plY3QocHJvamVjdC50aXRsZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3QpXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgaWYocHJvamVjdC50YXNrcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBwcm9qZWN0cyA9IGRhdGEuZ2V0UHJvamVjdHMoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrc1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRhc2tzLmZvckVhY2godGFzaz0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0uYWRkVGFzayhwcm9qZWN0LmlkLHRhc2sudGl0bGUsdGFzay5kZXNjcmlwdGlvbix0YXNrLnByaW9yaXR5LHRhc2suZHVlRGF0ZSx0cnVlKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhLmFkZFByb2plY3QoJ0NvZGluZycpXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhLmdldFByb2plY3RzKClbMV0uYWRkVG9EbygnTGVhcm4gYW5kIFByYWN0aWNlIEhUTUwnLCBuZXcgRGF0ZSgpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS5nZXRQcm9qZWN0cygpKSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmdldFByb2plY3RzKCkpXHJcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpXHJcbiAgICAgICAgICAgdG9kYXkuY2xpY2soKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdG9yYWdlRGF0YShkYXRhKSB7XHJcbiAgICBsZXQgbG9jYWw9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpXHJcblxyXG4gICAgaWYobG9jYWwgPT0gbnVsbCl7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS5nZXRQcm9qZWN0cygpKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbCBzdG9yYWdlIHNhdmVkOicsIGRhdGEuZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIGxldCBsYXN0SW5kZXggPSBsb2NhbC5sZW5ndGggLSAxXHJcbiAgICAgICAgLy8gbGV0IGxhc3REYXRhSWQgPSBsb2NhbFtsYXN0SW5kZXhdLmlkXHJcbiAgICAgICAgLy8gcmV0dXJuIChsYXN0RGF0YUlkKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdChkYXRhKSB7XHJcblxyXG4gICAgbGV0IG9sZERhdGEgPSBnZXREYXRhKClcclxuICAgIG9sZERhdGEucHVzaChkYXRhKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZCl7XHJcbiAgICBsZXQgb2xkRGF0YSA9IGdldERhdGEoKVxyXG4gICAgb2xkRGF0YS5zcGxpY2UoaWQsMSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrKHByb2plY3RJZCwgdGFzaykge1xyXG4gICAgbGV0IG9sZERhdGEgPSBnZXREYXRhKClcclxuICAgIGNvbnNvbGUubG9nKG9sZERhdGEpXHJcbiAgICBvbGREYXRhW3Byb2plY3RJZF0udGFza3MucHVzaCh0YXNrKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkob2xkRGF0YSkpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVkaXRUYXNrKHByb2plY3RJZCx0YXNrSWQsdGFzayl7XHJcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoKVxyXG4gICAgZGF0YVtwcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0gPSB0YXNrXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJZCwgdGFza0lkKXtcclxuICAgIGxldCBkYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBkYXRhW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwxKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIikpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3QgYXMgc2F2ZVByb2pUb1N0b3JhZ2UsZGVsZXRlUHJvamVjdCBhcyBkZWxQcm9qRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgYXMgZG9tQWRkUHJvamVjdCB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5pZCA9IDBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QodGl0bGUsIGF2YWlsYWJsZSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGhpcy5pZCwgdGl0bGUpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpXHJcbiAgICAgICAgZG9tQWRkUHJvamVjdChgcHJvamVjdCR7dGhpcy5pZH1gLCBwcm9qZWN0RGF0YS50aXRsZSlcclxuICAgICAgICB0aGlzLmlkKytcclxuICAgICAgICBpZiAoIWF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2pUb1N0b3JhZ2UocHJvamVjdClcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwxKVxyXG4gICAgICAgIGRlbFByb2pGcm9tU3RvcmFnZShpZClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChpZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBnZXRBbGxUYXNrcygpe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzaz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3REZXRhaWwgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkgXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrLnJlbWFpbmluZ0RheXMoKSA+PSAwKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tkZXRhaWw6dGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklkOnByb2plY3REZXRhaWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0YXNrc1xyXG4gICAgfVxyXG4gICAgZ2V0VG9kYXlUYXNrcygpe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERldGFpbCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKSBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2sucmVtYWluaW5nRGF5cygpID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tkZXRhaWw6dGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklkOnByb2plY3REZXRhaWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0V2Vla1Rhc2tzKHdlZWspe1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdXHJcbiAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2s9PntcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGV0YWlsID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpIFxyXG4gICAgICAgICAgICAgICAgaWYodGFzay50YXNrV2VlaygpID09PSB3ZWVrICYmIHRhc2sucmVtYWluaW5nRGF5cygpID49IDApe1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7dGFza2RldGFpbDp0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qSWQ6cHJvamVjdERldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFza3NcclxuICAgIH1cclxufVxyXG5cclxuLy8gbGV0IHRvRG9zID0gbmV3IFRvRG9MaXN0KClcclxuXHJcbi8vIHRvRG9zLmFkZFByb2plY3QoJ0NvZGluZycpXHJcbi8vIHRvRG9zLmdldFByb2plY3RzKClbMV0uYWRkVG9EbygnTGVhcm4gYW5kIFByYWN0aWNlIEhUTUwnLCBuZXcgRGF0ZSgpKVxyXG5cclxuLy8gdG9Eb3MuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0LnRpdGxlfSBgKVxyXG4vLyAgICAgcHJvamVjdC5nZXRBbGxUb0RvKCkuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcbi8vICAgICB9KVxyXG4vLyAgICAgY29uc29sZS5sb2coJ1xcbicpXHJcbi8vIH0pXHJcblxyXG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsZ2V0SVNPV2Vla1llYXJ9IGZyb20gXCJkYXRlLWZuc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLHRpdGxlLGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tcGxldGVkKCl7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWRcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1haW5pbmdEYXlzKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGxldCBkYXRlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuZHVlRGF0ZSxjdXJyZW50RGF0ZSlcclxuICAgICAgICByZXR1cm4gZGF0ZVxyXG4gICAgfVxyXG4gICAgdGFza1dlZWsoKXtcclxuICAgICAgICByZXR1cm4gZ2V0SVNPV2Vla1llYXIodGhpcy5kdWVEYXRlKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9