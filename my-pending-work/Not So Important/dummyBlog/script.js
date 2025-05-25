document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://7twjqiw8.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27blog%27%5D%7C+order%28_createdAt+desc%29%7B%0A++title%2C%0A++++smallDescription%2C%0A++++%22slug%22%3A+slug.current%0A++++%0A%7D";
  
    // Fetch blog data from the provided Sanity.io query URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Log the fetched data to the console
        console.log("Fetched Data:", data);
        
        // If you want to proceed with rendering the data, call a function here, e.g., renderBlogCard(data.result);
      })
      .catch(error => {
        console.error("Error fetching blog data from Sanity.io:", error);
      });
  });
  