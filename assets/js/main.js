document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".categories li");
  const posts = document.querySelectorAll(".blog .col");

  // Function to filter posts by category
  function filterPosts(category) {
    posts.forEach((post) => {
      const postCategories = post.getAttribute("data-category").split(" ");

      // [study-abroad, student-lifestyle]    

      // Show the post if the 'category' matches or if 'All Categories' is selected
      if (category === "all-categories" || postCategories.includes(category)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });

    // for (let post of posts ){
    //   const postCategories = post.getAttribute("data-category").split(" ");

    //   // Show the post if the 'category' matches or if 'All Categories' is selected
    //   if (category === "all-categories" || postCategories.includes(category)) {
    //     post.style.display = "block";
    //   } else {
    //     post.style.display = "none";
    //   }
    // }
  }

  // Add click event to each category item
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      // Remove active class from all categories and add to clicked one
      categories.forEach((cat) => cat.classList.remove("active"));
      category.classList.add("active");

      // Get the selected category
      const selectedCategory = category.textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      // Filter posts by the selected category
      filterPosts(selectedCategory);

      //events
    });
  });

  // Initially show all posts
  filterPosts("all-categories");
});


