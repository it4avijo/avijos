
export const BaseUrl = "https://avijobackend-production.up.railway.app";


export const timeAgo = (inputTime) => {
    const now = new Date();
    const past = new Date(inputTime);
    const diffInMs = now - past;
  
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (seconds < 60) return `${seconds} sec ago`;
    if (minutes < 60) return `${minutes} mins ago`;
    if (hours < 24) return `${hours} hr ago`;
    if (days < 7) return `${days} day ago`;
    if (weeks < 4) return `${weeks} week ago`;
    if (months < 12) return `${months} mon ago`;
    return `${years} yrs ago`;
  }