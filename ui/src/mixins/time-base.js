import props from '../utils/props'

export default {
  name: 'TimeBase',

  props: {
    ...props.common,
    ...props.base,
    ...props.locale,
    // height: [Number, String],
    hour12: Boolean,
    amPmLabels: {
      type: Array,
      default: () => ['AM', 'PM'],
      validator: v => Array.isArray(v) && v.length === 2 && typeof v[0] === 'string' && typeof v[1] === 'string'
    }
  },

  methods: {
    isValidTime (time) {
      const parts = time.split(':')
      if (parts.length === 2) {
        const hour = parseInt(parts[0], 10)
        const minute = parseInt(parts[1], 10)
        const second = parseInt(parts[2], 10)
        if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
          return true
        }
      }
      return false
    }
  }
}
