async function fetchFact() {
  const today = new Date();
  const month = today.getMonth() + 1;  // getMonth() returns 0 for January, so add 1
  const day = today.getDate();         // Get the day of the month
  const year = today.getFullYear();   // Get the full year

  // Format today's date as "Month Day, Year" (e.g., March 21, 2025)
  const formattedDate = `${today.toLocaleString('default', { month: 'long' })} ${day}, ${year}`;
  
  // Show the current date in the "todayDate" element
  document.getElementById('todayDate').innerText = `Today's date is: ${formattedDate}`;

  // Construct the Numbers API URLs dynamically
  const urlDate = `http://numbersapi.com/${month}/${day}/date?json`;
  const urlDay = `http://numbersapi.com/${day}/math?json`;
  const urlMonth = `http://numbersapi.com/${month}/math?json`;
  const urlYear = `http://numbersapi.com/${year}/math?json`;

  try {
    // Fetch and display the date fact
    const responseDate = await fetch(urlDate);
    const dataDate = await responseDate.json();
    document.getElementById('randomFact').innerText = `${dataDate.text}`;

    // Fetch and display the day fact
    const responseDay = await fetch(urlDay);
    const dataDay = await responseDay.json();
    document.getElementById('randomFactDay').innerText = `${dataDay.text}`;

    // Fetch and display the month fact
    const responseMonth = await fetch(urlMonth);
    const dataMonth = await responseMonth.json();
    document.getElementById('randomFactMonth').innerText = `${dataMonth.text}`;

    // Fetch and display the year fact
    const responseYear = await fetch(urlYear);
    const dataYear = await responseYear.json();
    document.getElementById('randomFactYear').innerText = `${dataYear.text}`;
  } catch (error) {
    document.getElementById('randomFact').innerText = 'Could not fetch facts at the moment.';
    document.getElementById('randomFactMonth').innerText = '';
    document.getElementById('randomFactYear').innerText = '';
  }
}

// Fetch the facts on page load
window.onload = fetchFact;
