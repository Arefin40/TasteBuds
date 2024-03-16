export default function convertToHoursAndMinutes(duration) {
   const hours = Math.floor(duration / 60);
   const minutes = duration % 60;

   if (hours === 0) {
      return `${minutes} min`;
   } else {
      let prettyTime = minutes === 30 ? `${hours}.5 hour` : `${hours} hour`;
      if (hours > 1) prettyTime += "s";
      if (minutes > 0 && minutes !== 30) prettyTime += ` ${minutes} min`;
      return prettyTime;
   }
}
