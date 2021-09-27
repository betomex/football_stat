import qs from "qs";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

export const getUrlParams = () => {
  let urlParams = []
  const filterParams = history.location.search.substr(1);
  const filtersFromParams = qs.parse(filterParams);
  if (filtersFromParams.dateFrom) {
    const preparedDateFrom = new Date(String(filtersFromParams.dateFrom))
    urlParams.push(preparedDateFrom)
  } else urlParams.push(null)
  if (filtersFromParams.dateTo) {
    const preparedDateTo = new Date(String(filtersFromParams.dateTo))
    urlParams.push(preparedDateTo)
  } else urlParams.push(null)
  return urlParams
}