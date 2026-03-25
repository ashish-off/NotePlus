const formattedDate = (dateString: string): string => {
  return new Date(dateString)
    .toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");
};

export default formattedDate;
