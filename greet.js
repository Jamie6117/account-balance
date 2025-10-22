// greet.js
export function WelcomeMessage(name) {
  const hours = new Date().getHours();
  let greet;

  if (hours < 12) greet = "Good morning";
  else if (hours < 18) greet = "Good afternoon";
  else greet = "Good evening";

  return `${greet}, ${name}! 👋`;
}
