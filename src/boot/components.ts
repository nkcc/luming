import { boot } from 'quasar/wrappers'
import { ObserveVisibility } from 'vue-observe-visibility'

export default boot(({ app }) => {
   app.component('observe-visibility', ObserveVisibility);
})