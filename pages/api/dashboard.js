import api from '../../src/constants/api'
import {FETCH_DETAILS} from '../../src/constants/urls'

export default {
    fetchAllDetails: () => {
      return api.get(FETCH_DETAILS);
    },
}