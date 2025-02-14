const formattedDate = (): string => {
  const currentDate : string = new Date().toLocaleString('en-US', { 
    month: 'short',   // "Feb"
    day: '2-digit',   // "11"
    year: 'numeric',  // "2025"
    hour: '2-digit',  // "1"
    minute: '2-digit',// "53"
    hour12: true      // AM/PM format
  }).replace(',', ''); // Remove extra comma
  return currentDate;
}

export default formattedDate;