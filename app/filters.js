module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  // const daysjs = require("daysjs");

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /*
  ====================================================================
  arrayToDateObject
  --------------------------------------------------------------------
  Convert array to javascript date object
  ====================================================================

  Usage:

  {{ [1,2,2020] | arrayToDateObject }}

  = 2020-02-01T00:00:00.000Z

*/


  // filters.arrayToDateObject = (array) => {
  //   return new Date(array[2], array[1] -1, array[0])
  // }

  // // Output date array - for use in design system macros macros
  // filters.toDateArray = (date) => {
  //   if (!date) return []
  //   if (_.isArray(date)) return date
  //   else {
  //     return [daysjs(date).date(), daysjs(date).month() + 1, daysjs(date).year()]
  //   }
  // }

  /*
  ====================================================================
  today
  --------------------------------------------------------------------
  Today's date as javascript date object
  ====================================================================

  Usage:

    {{ "" | today }}

  = 2020-02-01T00:00:00.000Z

*/

  // filters.today = () => {
  //   // var now = dayjs()
  //   return new Date()
  // }

  

  // filters.formatDate = (date, format, dateFormat) => {
  
  //         return daysjs(returnDate).fromNow()
  //         // return timeAgoInDays(returnDate)
  
  // }



  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */

  return filters
}
