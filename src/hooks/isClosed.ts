import { restaurantInfo } from '../utils/mockData';

export function getRestaurantStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  const currentTimeValue = currentHour * 100 + currentMinutes;
  const closeTimeValue = restaurantInfo.closeHour * 100 + restaurantInfo.closeMinutes;

  const formattedTime = `${restaurantInfo.closeHour}:${restaurantInfo.closeMinutes}`;

  if (currentTimeValue < closeTimeValue) {
    return {
      text: `Aberto até ${formattedTime}`,
      isOpen: true
    };
  } else {
    return {
      text: `Fechado desde ${formattedTime}`,
      isOpen: false
    };
  }
}