import Vue from 'vue'
import Vcalendar from 'v-calendar'
import '../node_modules/v-calendar/lib/v-calendar.common';
// import '../v-calendar/lib/v-calendar.min.css';
Vue.use(Vcalendar, {             // second is optional
  datePickerTintColor: '#F00',
  datePickerShowDayPopover: false
})
