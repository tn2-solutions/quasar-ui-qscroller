import { validateView } from './views'

/* public properties */
export default {
  // string scroller has stand-alone properties
  scroller: {
    value: String,
    items: Array,
    disable: Boolean,
    textColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  common: {
    dense: Boolean,
    disable: Boolean,
    roundedBorders: Boolean,
    noBorder: Boolean,
    noHeader: Boolean,
    noFooter: Boolean,
    noShadow: Boolean,
    disabledTextColor: {
      type: String,
      default: 'grey-7'
    },
    childHeight: [Number, String]
  },
  base: {
    value: null, // [Number, String, Object, Array, Date, Function],
    borderColor: {
      type: String,
      default: '#ccc'
    },
    barColor: {
      type: String,
      default: '#ccc'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'primary'
    },
    innerTextColor: {
      type: String,
      default: 'primary'
    },
    innerColor: {
      type: String,
      default: 'white'
    }
  },
  locale: {
    locale: {
      type: String,
      default: 'en-us'
    }
  },
  view: {
    view: {
      type: String,
      default: 'string',
      validator: validateView
    }
  },
  verticalBar: {
    verticalBar: Boolean
  },
  date: {
    dates: Array,
    disabledDates: Array,
    disabledYears: {
      type: Array,
      default: () => []
    },
    disabledMonths: {
      type: Array,
      default: () => []
    },
    disabledDays: {
      type: Array,
      default: () => []
    },
    // shortYearLabel: Boolean,
    // shortMonthLabel: Boolean,
    // shortDayLabel: Boolean,
    // showMonthLabel: Boolean,
    // showWeekdayLabel: Boolean,
    noDays: Boolean,
    noMonths: Boolean,
    noYears: Boolean,
    yearBegin: [Number, String],
    yearStop: [Number, String]
  },
  time: {
    secondInterval: {
      type: [String, Number],
      default: 1
    },
    minuteInterval: {
      type: [String, Number],
      default: 1
    },
    hourInterval: {
      type: [String, Number],
      default: 1
    },
    shortTimeLabel: Boolean,
    disabledHours: {
      type: Array,
      default: () => []
    },
    disabledMinutes: {
      type: Array,
      default: () => []
    },
    disabledSeconds: {
      type: Array,
      default: () => []
    },
    noSeconds: Boolean,
    noMinutes: Boolean,
    noHours: Boolean
  },
  timeRange: {
    displaySeparator: {
      type: String,
      default: ' - '
    },
    disableValidation: Boolean,
    errorColor: {
      type: String,
      default: 'red-1'
    },
    errorTextColor: {
      type: String,
      default: 'red-10'
    },
    // --------------------------------
    // start time
    // --------------------------------
    startSecondInterval: {
      type: [String, Number],
      default: 1
    },
    startMinuteInterval: {
      type: [String, Number],
      default: 1
    },
    startHourInterval: {
      type: [String, Number],
      default: 1
    },
    startShortTimeLabel: Boolean,
    startDisabledHours: {
      type: Array,
      default: () => []
    },
    startDisabledMinutes: {
      type: Array,
      default: () => []
    },
    startDisabledSeconds: {
      type: Array,
      default: () => []
    },
    startNoSeconds: Boolean,
    startNoMinutes: Boolean,
    startNoHours: Boolean,
    startAmPmLabels: {
      type: Array,
      default: () => ['AM', 'PM'],
      validator: v => Array.isArray(v) && v.length === 2 && typeof v[0] === 'string' && typeof v[1] === 'string'
    },

    // --------------------------------
    // end time
    // --------------------------------
    endSecondInterval: {
      type: [String, Number],
      default: 1
    },
    endMinuteInterval: {
      type: [String, Number],
      default: 1
    },
    endHourInterval: {
      type: [String, Number],
      default: 1
    },
    endShortTimeLabel: Boolean,
    endDisabledHours: {
      type: Array,
      default: () => []
    },
    endDisabledMinutes: {
      type: Array,
      default: () => []
    },
    endDisabledSeconds: {
      type: Array,
      default: () => []
    },
    endNoSeconds: Boolean,
    endNoMinutes: Boolean,
    endNoHours: Boolean,
    endAmPmLabels: {
      type: Array,
      default: () => ['AM', 'PM'],
      validator: v => Array.isArray(v) && v.length === 2 && typeof v[0] === 'string' && typeof v[1] === 'string'
    }
  },
  dateRange: {
    displaySeparator: {
      type: String,
      default: ' - '
    },
    disableValidation: Boolean,
    errorColor: {
      type: String,
      default: 'red-1'
    },
    errorTextColor: {
      type: String,
      default: 'red-10'
    },
    // --------------------------------
    // start date
    // --------------------------------
    startDisabledYears: {
      type: Array,
      default: () => []
    },
    startDisabledMonths: {
      type: Array,
      default: () => []
    },
    startDisabledDays: {
      type: Array,
      default: () => []
    },
    // startShortYearLabel: Boolean,
    // startShortMonthLabel: Boolean,
    // startShortDayLabel: Boolean,
    // startShowMonthLabel: Boolean,
    // startShowWeekdayLabel: Boolean,
    startNoDays: Boolean,
    startNoMonths: Boolean,
    startNoYears: Boolean,
    startYearBegin: [Number, String],
    startYearStop: [Number, String],
    // --------------------------------
    // end date
    // --------------------------------
    endDisabledYears: {
      type: Array,
      default: () => []
    },
    endDisabledMonths: {
      type: Array,
      default: () => []
    },
    endDisabledDays: {
      type: Array,
      default: () => []
    },
    // endShortYearLabel: Boolean,
    // endShortMonthLabel: Boolean,
    // endShortDayLabel: Boolean,
    // endShowMonthLabel: Boolean,
    // endShowWeekdayLabel: Boolean,
    endNoDays: Boolean,
    endNoMonths: Boolean,
    endNoYears: Boolean,
    endYearBegin: [Number, String],
    endYearStop: [Number, String]
  }
}
