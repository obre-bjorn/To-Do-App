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

        if (checkStorageData() === 0) {


            localStorage.setItem("toDoList", JSON.stringify(data.getProjects()))


        } else {

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


        }
        // console.log(data.getProjects())
        
             document.addEventListener("DOMContentLoaded", function() {
              
                 let today = document.querySelector('#home')
                 today.click()
    });
        
    } else {
        // Too bad, no localStorage for us
    }
    
    let today = document.querySelector('#home')
    today.click()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZklTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIHtcbiAgICB3ZWVrU3RhcnRzT246IDFcbiAgfSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yYWdlLHNhdmVQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vbW9kdWxlcy90b0RvTGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IGFzIGFkLHNldEFjdGl2ZVRhc2ssY2xlYXJDb250YWluZXIsVGFza1ZpZXcgfSBmcm9tIFwiLi9tb2R1bGVzL1VJLmpzXCI7XHJcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxubGV0IGxpc3QgPSBuZXcgVG9Eb0xpc3QoKVxyXG5cclxuXHJcblxyXG5jcmVhdGVTdG9yYWdlKGxpc3QpXHJcblxyXG5cclxubGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcclxuXHJcbi8vIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuXHJcbi8vIHN0b3JhZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxyXG4vLyAgICAgICAgIC8vIGxldCBwcm9qZWN0ID0gZWxlbWVudC5nZXRQcm9qZWN0SW5mbygpXHJcbi8vICAgICBsaXN0LmFkZFByb2plY3QoZWxlbWVudC5pZCwgZWxlbWVudC50aXRsZSlcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gU2V0IFRvZGF5IHByb2plY3QgdG8gYWN0aXZlXHJcblxyXG5cclxuXHJcbmxldCBhZGRQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpXHJcblxyXG5hZGRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgcHJvamVjdERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdERhdGEpO1xyXG4gICAgbGlzdC5hZGRQcm9qZWN0KHByb2plY3REYXRhLnZhbHVlKVxyXG4gICAgYWRkUHJvai5yZXNldCgpXHJcbn0pXHJcblxyXG5cclxuLy8gKiBWaWV3IGFkZCB0YXNrIGZvcm1cclxubGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKVxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcblxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59KVxyXG5sZXQgY2FuY2VsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxfYWRkX3Rhc2snKVxyXG5cclxuY2FuY2VsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59KVxyXG5cclxuXHJcblxyXG4vLyBBREQgVEFTSyBGT1JNXHJcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1mb3JtXCIpXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxyXG4gICAgLy8gXiBHZXQgRm9ybSBkYXRhXHJcblxyXG4gICAgY29uc3QgdGFza0RhdGEgPSBuZXcgRm9ybURhdGEoYWRkVGFzaylcclxuICAgIGxldCB0YXNrRGF0YU9iamVjdCA9IE9iamVjdC5mcm9tRW50cmllcyh0YXNrRGF0YS5lbnRyaWVzKCkpXHJcblxyXG4gICAgLy8gXlxyXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hY3RpdmUnKVxyXG4gICAgbGV0IHByb2plY3QgPSBnZXRJdGVtQnlJZChhY3RpdmVQcm9qZWN0LCAncHJvamVjdCcpXHJcbiAgICBwcm9qZWN0LnByb2plY3REYXRhLmFkZFRhc2tcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIHByb2plY3QuaWQsIHRhc2tEYXRhT2JqZWN0LnRhc2tuYW1lLCBcclxuICAgICAgICAgICAgdGFza0RhdGFPYmplY3QuZGVzY3JpcHRpb24sdGFza0RhdGFPYmplY3QucHJpb3JpdHksXHJcbiAgICAgICAgICAgIHRhc2tEYXRhT2JqZWN0LmR1ZWRhdGUsZmFsc2VcclxuICAgICAgICApXHJcblxyXG4gICAgYWRkVGFzay5yZXNldCgpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblxyXG5cclxufSlcclxuXHJcbi8vIF4gUmVtb3ZlIFByb2plY3QgRWxlbWVudFxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKXtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGxldCBwcm9qRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgIGxldCBwcm9qZWN0RGF0YSA9ICBnZXRJdGVtQnlJZChwcm9qRWxlbWVudCwncHJvamVjdCcpXHJcbiAgICBwcm9qRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2pFbGVtZW50KVxyXG4gICAgbGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3REYXRhLnByb2plY3REYXRhLmlkKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSl7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgLy9eIEdFVCBQUk9KRUNUIFRPIERFTEVURSBGUk9NXHJcbiAgICAvLyBsZXQgZ2V0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpXHJcbiAgICAvLyBsZXQgcHJvamVjdERhdGEgPSBnZXRJdGVtQnlJZChnZXRQcm9qZWN0LCdwcm9qZWN0JylcclxuXHJcbiAgICAvL14gR0VUIFRBU0sgVE8gQkUgREVMRVRFRFxyXG4gICAgbGV0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICBsZXQgdGFza0lkID0gcGFyc2VJbnQodGFza0VsZW1lbnQuZGF0YXNldC50YXNrSWQpXHJcbiAgICBsZXQgcHJvamVjdElkID0gcGFyc2VJbnQodGFza0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQpXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKVxyXG4gICAgLy8gbGV0IHRhc2tJZCA9IGdldEl0ZW1CeUlkKHRhc2tFbGVtZW50LCd0YXNrJylcclxuXHJcbiAgICB0YXNrRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tFbGVtZW50KVxyXG4gICAgbGV0IHByb2plY3QgPSBsaXN0LmdldFByb2plY3QocHJvamVjdElkKVxyXG4gICAgcHJvamVjdC5kZWxldGVUYXNrKHByb2plY3RJZCx0YXNrSWQpXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3QoKXtcclxuICAgIHJldHVybiBsaXN0XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIFRPRE8gOiBDaGFuZ2UgbW9kdWxlIGxvY2F0aW9uIFxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtQnlJZChlbGVtZW50LCBpdGVtKSB7XHJcblxyXG5cclxuICAgIC8vIFRPRE86IENIQU5HRSBUTyBVU0UgU1dJVENIICYgQ0FTRSAtLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgaWYgKGl0ZW0gPT0gXCJwcm9qZWN0XCIpIHtcclxuICAgICAgICBsZXQgcHJvamVjdElkID0gZWxlbWVudC5pZC5zcGxpdCgncHJvamVjdCcpWzFdXHJcbiAgICAgICAgbGV0IGRhdGEgPSBsaXN0LmdldFByb2plY3RzKClcclxuICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBkYXRhLmZpbmQocHJvaiA9PiBwcm9qLmlkID09PSBwYXJzZUludChwcm9qZWN0SWQpKVxyXG4gICAgICAgIHJldHVybiB7IGlkOiBwcm9qZWN0SWQsIHByb2plY3REYXRhOiBwcm9qZWN0RGF0YSB9XHJcbiAgICB9IGVsc2UgaWYoaXRlbSA9PT0gXCJ0YXNrXCIpe1xyXG4gICAgICAgIGxldCB0YXNrSWQgPSBlbGVtZW50LmlkLnNwbGl0KCd0YXNrJylbMV1cclxuICAgICAgICByZXR1cm4gdGFza0lkXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8vICBeIE1lbnUgZGlzcGxheVxyXG5sZXQgbWVudSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudScpXVxyXG5cclxubWVudS5mb3JFYWNoKGJ1dHRvbiA9PiAgeyBcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheU1lbnVUYXNrKVxyXG59XHJcblxyXG4gKVxyXG5cclxuXHJcbiBmdW5jdGlvbiBkaXNwbGF5TWVudVRhc2soZWxlbWVudCl7XHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXHJcbiAgICBsZXQgZWxlbWVudFRhcmdldCA9IGVsZW1lbnQudGFyZ2V0XHJcbiAgICBcclxuICAgIGxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKVxyXG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRUYXJnZXQuaWQpXHJcbiAgICBpZihlbGVtZW50VGFyZ2V0LmlkID09PSBcImhvbWVcIil7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldEFjdGl2ZVRhc2soZWxlbWVudClcclxuICAgICAgICBjbGVhckNvbnRhaW5lcih0YXNrQ29udGFpbmVyKVxyXG4gICAgICAgIGxldCB0b2RvcyA9IGxpc3QuZ2V0QWxsVGFza3MoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIGlmICghdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vVGFza3NIVE1MID0gYCA8aDM+Tm8gdGFza3MgYXZhaWxhYmxlLiA8Yj5BZGQgYSBQcm9qZWN0IDwvYj4gYW5kIENsaWNrIHRoZSAoKykgYnV0dG9uIGJlbG93IHRvIGFkZCB0YXNrczwvaDM+YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5vVGFza3NIVE1MKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PntcclxuICAgICAgICAgICAgbGV0IHByb2pJZCA9IHRvZG8ucHJvaklkIFxyXG4gICAgICAgICAgICAgdG9kbyA9IHRvZG8udGFza2RldGFpbFxyXG4gICAgICAgICAgICBUYXNrVmlldyhwcm9qSWQsdG9kby5pZCx0b2RvLnRpdGxlLHRvZG8uZGVzY3JpcHRpb24sdG9kby5wcmlvcml0eSx0b2RvLmR1ZURhdGUpXHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgfVxyXG4gICAgIGlmKGVsZW1lbnRUYXJnZXQuaWQgPT09IFwidG9kYXlcIil7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldEFjdGl2ZVRhc2soZWxlbWVudClcclxuICAgICAgICBjbGVhckNvbnRhaW5lcih0YXNrQ29udGFpbmVyKVxyXG4gICAgICAgIGxldCB0b2RvcyA9IGxpc3QuZ2V0VG9kYXlUYXNrcygpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICAgICAgaWYgKCF0b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9UYXNrc0hUTUwgPSBgIDxoMz5ObyB0YXNrcyBhdmFpbGFibGUuIDxiPkFkZCBhIFByb2plY3QgPC9iPiBhbmQgIENsaWNrIHRoZSAoKykgYnV0dG9uIGJlbG93IHRvIGFkZCB0YXNrczwvaDM+YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5vVGFza3NIVE1MKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICAgICAgICAgbGV0IHByb2pJZCA9IHRvZG8ucHJvaklkIFxyXG4gICAgICAgICAgICAgICAgIHRvZG8gPSB0b2RvLnRhc2tkZXRhaWxcclxuICAgICAgICAgICAgICAgIFRhc2tWaWV3KHByb2pJZCx0b2RvLmlkLHRvZG8udGl0bGUsdG9kby5kZXNjcmlwdGlvbix0b2RvLnByaW9yaXR5LHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZihlbGVtZW50VGFyZ2V0LmlkID09PSBcInRoaXN3ZWVrXCIpe1xyXG4gICAgICAgIGlmIChlbGVtZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgd2VlayA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKCkpXHJcbiAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHRhc2tDb250YWluZXIpXHJcbiAgICAgICAgbGV0IHRvZG9zID0gbGlzdC5nZXRXZWVrVGFza3Mod2VlaylcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1Rhc2tzSFRNTCA9IGAgPGgzPk5vIHRhc2tzIGF2YWlsYWJsZS4gPGI+QWRkIGEgUHJvamVjdCA8L2I+IGFuZCAgQ2xpY2sgdGhlICgrKSBidXR0b24gYmVsb3cgdG8gYWRkIHRhc2tzPC9oMz5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbm9UYXNrc0hUTUwpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIGVsc2V7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qSWQgPSB0b2RvLnByb2pJZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kbyA9IHRvZG8udGFza2RldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrVmlldyhwcm9qSWQsdG9kby5pZCx0b2RvLnRpdGxlLHRvZG8uZGVzY3JpcHRpb24sdG9kby5wcmlvcml0eSx0b2RvLmR1ZURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gfVxyXG5cclxuXHJcbi8vIGxpc3QuYWRkUHJvamVjdChcIkxhdW5kcnlcIikiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuXHJcblxyXG4vLyAhIFRPIENIQU5HRSEhXHJcbmltcG9ydCB7IGdldEl0ZW1CeUlkLGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYXNrVmlldyhwcm9qZWN0SWQsaWQsIHRpdGxlLCBkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlLHJlbWFpbmluZ0RheXMpe1xyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxyXG5cclxuICAgIGxldCB0YXNrSHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhc2ske2lkfSR7cHJvamVjdElkfVwiIGNsYXNzPVwidGFza1wiIGRhdGEtdGFzay1pZD1cIiR7aWR9XCIgZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0SWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgaWQ9XCJcIiBjbGFzcz1cInRhc2stZG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stbmFtZVwiIGlkPVwidGFza25hbWUke2lkfVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW8gZWRpdC10YXNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoIGRlbGV0ZS10YXNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiIGlkPVwiZGF5cyR7aWR9XCI+cmVtYWluaW5nRGF5czwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwcmlvcml0eSR7aWR9XCI+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRlc2NyaXB0aW9uJHtpZH1cIj5EZXNjcmlwdGlvbjoke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZWRpdC10YXNrJHtpZH1cIiBjbGFzcz1cImVkaXQtdGFzay1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZWRpdC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC10YXNrbmFtZSR7aWR9XCI+VGFzazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZWRpdC10YXNrbmFtZSR7aWR9XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC1kZXNjcmlwdGlvbiR7aWR9XCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImVkaXQtZGVzY3JpcHRpb24ke2lkfVwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIzMFwiIHJvdz1cIjEwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LWR1ZWRhdGUke2lkfVwiPkR1ZSBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCIgaWQ9XCJlZGl0LWR1ZWRhdGUke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHkke2lkfVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJzZWxlY3QtcHJpb3JpdHkke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgaWQ9XCJsb3dcIiBjbGFzcz1cIm9wdGlvblwiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgaWQ9XCJtZWRpdW1cIiBjbGFzcz1cIm9wdGlvblwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiIGlkPVwiaGlnaFwiIGNsYXNzPVwib3B0aW9uXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPWVkaXQtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2FuY2VsXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhc2tIdG1sKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH1gKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBeIFNob3cgdGFzayBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tEZXRhaWxzID0gdGFza0NvbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4gRWRpdCB0YXNrXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2ske2lkfSR7cHJvamVjdElkfT4ubWFpbi1kZXRhaWw+LmVkaXQtdGFza2ApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tFZGl0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LXRhc2ske2lkfWApXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXQgdmFsdWVzIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0VGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LXRhc2tuYW1lJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0RGVzY3JpcHJ0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC1kZXNjcmlwdGlvbiR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LWR1ZWRhdGUke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWxlY3QtcHJpb3JpdHkke2lkfWApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRQcmlvcml0eSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFza05hbWVJbnB1dC52YWx1ZSA9IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdERlc2NyaXBydGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdERhdGVJbnB1dC52YWx1ZSA9IGR1ZURhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eU9wdGlvbnMgPSBlZGl0UHJpb3JpdHkub3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpb3JpdHlPcHRpb25zW2ldLnZhbHVlID09PSBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlPcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVkaXRQcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza0VkaXRmb3JtLmNsYXNzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJiBUYXNrIGZvcm0gc3VibWlzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tFZGl0Rm9ybSA9IHRhc2tFZGl0Zm9ybS5xdWVyeVNlbGVjdG9yKGBmb3JtYCkgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza19uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tuYW1lJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXNjcmlwdGlvbiR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tfcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJpb3JpdHkke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBeIHByb2plY3QgdG8gZWRpdCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3REYXRhID0gZ2V0SXRlbUJ5SWQoZ2V0UHJvamVjdCwncHJvamVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3REYXRhLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tFZGl0Rm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRhT2JqZWN0ID0gIE9iamVjdC5mcm9tRW50cmllcyh0YXNrRm9ybURhdGEuZW50cmllcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBnZXRMaXN0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZ2V0UHJvamVjdChwcm9qZWN0RGF0YS5pZCkuZWRpdFRhc2socHJvamVjdERhdGEuaWQsaWQsdGFza0RhdGFPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvcyA9IGRhdGEuZ2V0UHJvamVjdChwcm9qZWN0RGF0YS5pZCkuZ2V0VGFza3MoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2Rvc1tpZF0ucmVtYWluaW5nRGF5cygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrX25hbWUudGV4dENvbnRlbnQgPSB0YXNrRGF0YU9iamVjdC50YXNrbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza0RhdGFPYmplY3QuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza19wcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tEYXRhT2JqZWN0LnByaW9yaXR5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrRGF0YU9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJiBHZXQgdGFzayBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4gRGVsZXRlIHRhc2tcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH0+Lm1haW4tZGV0YWlsPi5kZWxldGUtdGFza2ApXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlVGFzaylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXiBDb21wbGV0ZSBUYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrJHtpZH0ke3Byb2plY3RJZH0+Lm1haW4tZGV0YWlsPmlucHV0W3R5cGU9XCJjaGVja2JveFwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEgQ1JFQVRFIEZVTkNUSU9OIEZPUiBUQVNLIENPTVBMRVRFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzayR7aWR9JHtwcm9qZWN0SWR9Pi5tYWluLWRldGFpbD4udGFzay1uYW1lYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza05hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBldmVudExpc3RlbmVycygpIHtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoaWQsIHRpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgLy8gbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcblxyXG4gICAgLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9JHtpZH0gY2xhc3M9XCJwcm9qZWN0XCI+JHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggZGVsZXRlLXByb2plY3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdFZpZXcpXHJcbiAgICAgICAgLy8gcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUb0RvcylcclxuXHJcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7aWR9YClcclxuICAgIGxldCBkZWxldGVwcm9qZWN0ID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtpZH0+LmRlbGV0ZS1wcm9qZWN0YClcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VGFza3MpXHJcbiAgICBkZWxldGVwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVQcm9qZWN0KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3RJZCxpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpIHtcclxuXHJcbiAgICBUYXNrVmlldyhwcm9qZWN0SWQsaWQsdGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKGVsZW1lbnQpIHtcclxuICAgIC8vU2V0IGFjdGl2ZSBCdXR0b25cclxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIilcclxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG5cclxuICAgIGlmIChlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gJiBUTyBDSEFOR0UgQVNBUCFcclxuICAgICAgICAgICAgc2V0QWN0aXZlVGFzayhlbGVtZW50KVxyXG4gICAgICAgICAgICBjbGVhckNvbnRhaW5lcih0YXNrQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZ2V0SXRlbUJ5SWQoYWN0aXZlUHJvamVjdCwgJ3Byb2plY3QnKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHByb2plY3QucHJvamVjdERhdGFcclxuICAgICAgICAgICAgbGV0IHByb2plY3RJZCA9IHByb2plY3QuaWRcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRhc2tzID0gZGF0YS5nZXRUYXNrcygpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vVGFza3NIVE1MID0gYCA8aDM+Tm8gdGFza3MgYXZhaWxhYmxlLiBDbGljayB0aGUgKCspIGJ1dHRvbiBiZWxvdyB0byBhZGQgdGFza3M8L2gzPmBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBub1Rhc2tzSFRNTClcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgVGFza1ZpZXcocHJvamVjdElkLHRhc2suaWQsdGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuLy8gZGlzcGxheSBhbGwgVGFza3NcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZVRhc2soZWxlbWVudCkge1xyXG4gICAgbGV0IHByb2plY3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JyldXHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0ICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGV2ZW50TGlzdGVuZXJzLCBkaXNwbGF5VGFza3MsIGFkZFByb2plY3QsIGFkZFRhc2ssc2V0QWN0aXZlVGFzayxjbGVhckNvbnRhaW5lciB9IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlRWRpdFRhc2ssIHNhdmVUYXNrLGRlbGV0ZVRhc2sgYXMgZGVsZXRlVGFza1N0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgYWRkVGFzayBhcyBhZGRUYXNrVUkgfSBmcm9tIFwiLi9VSS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxyXG4gICAgICAgIHRoaXMudGFza0lkID0gMFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQcm9qZWN0SW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRhc2tzOiB0aGlzLnRhc2tzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFRhc2socHJvamVjdElkLHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LCBkdWVEYXRlLGF2YWlsYWJsZSkge1xyXG4gICAgICAgIGxldCB0b0RvID0gbmV3IFRvRG8odGhpcy50YXNrSWQsdGl0bGUsZGVzY3JpcHRpb24sIGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0b0RvKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFhdmFpbGFibGUpe1xyXG4gICAgICAgICAgICBkdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSlcclxuICAgICAgICAgICAgYWRkVGFza1VJKHByb2plY3RJZCx0aGlzLnRhc2tJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpXHJcbiAgICAgICAgICAgIHNhdmVUYXNrKHByb2plY3RJZCwgdG9EbylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFza0lkKytcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VGFzayhwcm9qZWN0SWQsdGFza0lkLCBkYXRhKXtcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZClcclxuICAgICAgICAvLyB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZWRpdFRhc2soKVxyXG4gICAgICAgbGV0IHRhc2sgPSAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLmVkaXRUYXNrKGRhdGEudGFza25hbWUsXHJcbiAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sZGF0YS5kdWVkYXRlLGRhdGEucHJpb3JpdHkpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrc1t0YXNrSW5kZXhdKVxyXG5cclxuICAgICAgICBzYXZlRWRpdFRhc2socHJvamVjdElkLHRhc2tJZCx0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2socHJvamVjdElkLHRhc2tJZCl7XHJcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrSWQpXHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LDEpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrcylcclxuICAgICAgICBkZWxldGVUYXNrU3RvcmFnZShwcm9qZWN0SWQsdGFza0lkKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGxldCBQcm9qZWN0YSA9IG5ldyBQcm9qZWN0KCdDb2RpbmcnKVxyXG5cclxuLy8gUHJvamVjdGEuYWRkVG9EbygnU3RhcnQgQ29kaW5nIEhUTUwnLCBuZXcgRGF0ZSgpKVxyXG4vLyBQcm9qZWN0YS5hZGRUb0RvKCdTdGFydCBDb2RpbmcgQ1NTJywgbmV3IERhdGUoKSlcclxuLy8gY29uc29sZS5sb2coUHJvamVjdGEudGl0bGUpO1xyXG4vLyBjb25zb2xlLmxvZyhQcm9qZWN0YS5nZXRBbGxUb0RvKCkpIiwiaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tICcuL3RvRG9MaXN0J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBkaXNwbGF5VGFzayB9IGZyb20gJy4vVUknO1xyXG5cclxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxyXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICBzdG9yYWdlICYmXHJcbiAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmFnZShkYXRhKSB7XHJcblxyXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcclxuICAgICAgICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXHJcblxyXG4gICAgICAgIGlmIChjaGVja1N0b3JhZ2VEYXRhKCkgPT09IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEuZ2V0UHJvamVjdHMoKSkpXHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcclxuICAgICAgICAgICAgc3RvcmFnZS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hZGRQcm9qZWN0KHByb2plY3QudGl0bGUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgaWYocHJvamVjdC50YXNrcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IGRhdGEuZ2V0UHJvamVjdHMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSBwcm9qZWN0LnRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5hZGRUYXNrKHByb2plY3QuaWQsdGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlLHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5nZXRQcm9qZWN0cygpKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgIHRvZGF5LmNsaWNrKClcclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcclxuICAgIHRvZGF5LmNsaWNrKClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0b3JhZ2VEYXRhKCkge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKVxyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKVxyXG4gICAgICAgIGxldCBsYXN0RGF0YUlkID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmlkXHJcbiAgICAgICAgcmV0dXJuIChsYXN0RGF0YUlkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3QoZGF0YSkge1xyXG5cclxuICAgIGxldCBvbGREYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBvbGREYXRhLnB1c2goZGF0YSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG9sZERhdGEpKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQpe1xyXG4gICAgbGV0IG9sZERhdGEgPSBnZXREYXRhKClcclxuICAgIG9sZERhdGEuc3BsaWNlKGlkLDEpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLEpTT04uc3RyaW5naWZ5KG9sZERhdGEpKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFzayhwcm9qZWN0SWQsIHRhc2spIHtcclxuICAgIGxldCBvbGREYXRhID0gZ2V0RGF0YSgpXHJcbiAgICBjb25zb2xlLmxvZyhvbGREYXRhKVxyXG4gICAgb2xkRGF0YVtwcm9qZWN0SWRdLnRhc2tzLnB1c2godGFzaylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG9sZERhdGEpKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVFZGl0VGFzayhwcm9qZWN0SWQsdGFza0lkLHRhc2spe1xyXG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKClcclxuICAgIGRhdGFbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdID0gdGFza1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShkYXRhKSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJZCl7XHJcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoKVxyXG4gICAgZGF0YVtwcm9qZWN0SWRdLnRhc2tzLnNwbGljZSh0YXNrSWQsMSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9MaXN0XCIpKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JhZ2UsIHNhdmVQcm9qZWN0IGFzIHNhdmVQcm9qVG9TdG9yYWdlLCBjaGVja1N0b3JhZ2VEYXRhLGRlbGV0ZVByb2plY3QgYXMgZGVsUHJvakZyb21TdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IGFzIGRvbUFkZFByb2plY3QgfSBmcm9tIFwiLi9VSS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgICAgIHRoaXMuaWQgPSAwXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHRpdGxlLCBhdmFpbGFibGUpIHtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRoaXMuaWQsIHRpdGxlKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKVxyXG4gICAgICAgIGRvbUFkZFByb2plY3QoYHByb2plY3Qke3RoaXMuaWR9YCwgcHJvamVjdERhdGEudGl0bGUpXHJcbiAgICAgICAgdGhpcy5pZCsrXHJcbiAgICAgICAgICAgIGlmICghYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvalRvU3RvcmFnZShwcm9qZWN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvamVjdChpZCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LDEpXHJcbiAgICAgICAgZGVsUHJvakZyb21TdG9yYWdlKGlkKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KGlkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBpZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNcclxuICAgIH1cclxuICAgICBcclxuICAgIGdldEFsbFRhc2tzKCl7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW11cclxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERldGFpbCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKSBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2sucmVtYWluaW5nRGF5cygpID49IDApe1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7dGFza2RldGFpbDp0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qSWQ6cHJvamVjdERldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzXHJcbiAgICB9XHJcbiAgICBnZXRUb2RheVRhc2tzKCl7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW11cclxuICAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2s9PntcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGV0YWlsID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpIFxyXG4gICAgICAgICAgICAgICAgaWYodGFzay5yZW1haW5pbmdEYXlzKCkgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7dGFza2RldGFpbDp0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qSWQ6cHJvamVjdERldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFza3NcclxuXHJcbiAgICB9XHJcbiAgICBnZXRXZWVrVGFza3Mod2Vlayl7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW11cclxuICAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzaz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3REZXRhaWwgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkgXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrLnRhc2tXZWVrKCkgPT09IHdlZWsgJiYgdGFzay5yZW1haW5pbmdEYXlzKCkgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrZGV0YWlsOnRhc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pJZDpwcm9qZWN0RGV0YWlsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0YXNrc1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBsZXQgdG9Eb3MgPSBuZXcgVG9Eb0xpc3QoKVxyXG5cclxuLy8gdG9Eb3MuYWRkUHJvamVjdCgnQ29kaW5nJylcclxuLy8gdG9Eb3MuZ2V0UHJvamVjdHMoKVsxXS5hZGRUb0RvKCdMZWFybiBhbmQgUHJhY3RpY2UgSFRNTCcsIG5ldyBEYXRlKCkpXHJcblxyXG4vLyB0b0Rvcy5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2plY3QudGl0bGV9IGApXHJcbi8vICAgICBwcm9qZWN0LmdldEFsbFRvRG8oKS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codG9kbylcclxuLy8gICAgIH0pXHJcbi8vICAgICBjb25zb2xlLmxvZygnXFxuJylcclxuLy8gfSlcclxuXHJcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxnZXRJU09XZWVrWWVhcn0gZnJvbSBcImRhdGUtZm5zXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsdGl0bGUsZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VGFzayh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWRcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb21wbGV0ZWQoKXtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbWFpbmluZ0RheXMoKXtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgbGV0IGRhdGUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModGhpcy5kdWVEYXRlLGN1cnJlbnREYXRlKVxyXG4gICAgICAgIHJldHVybiBkYXRlXHJcbiAgICB9XHJcbiAgICB0YXNrV2Vlaygpe1xyXG4gICAgICAgIHJldHVybiBnZXRJU09XZWVrWWVhcih0aGlzLmR1ZURhdGUpXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=