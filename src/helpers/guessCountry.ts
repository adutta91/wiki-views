import countries, { COUNTRY_OPTIONS} from "constants/countries";
import timezones from "constants/timezones";

const sanitize = (str: string): string => str.toLowerCase().replace(/[^a-z]/gi, '')

export default (): COUNTRY_OPTIONS | undefined => {
  const browserTZ = Intl.DateTimeFormat().resolvedOptions().timeZone

  const timezone = timezones.find(tz => sanitize(tz.timezone).includes(sanitize(browserTZ)))

  if (!timezone) return
  
  const potentialMatch = timezone.code as COUNTRY_OPTIONS
  if (countries[potentialMatch]) return potentialMatch
}