// create load categories
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories)
    )
    .catch(err => console.log(err) )
};

const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("categories");
      categories.forEach(item => {
        console.log(item);
        
      const button =  document.createElement("button");
      button.classList = "btn";
      button.innerHTML = item.category;

    //   add button to category Container
    categoryContainer.append(button)
      });
};
loadCategories();