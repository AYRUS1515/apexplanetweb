// ===== Product Data =====
const products = [
    { name: "Laptop", category: "electronics", price: 50000, rating: 4.5 },
    { name: "Phone", category: "electronics", price: 20000, rating: 4.2 },
    { name: "Headphones", category: "electronics", price: 3000, rating: 4.0 },
    { name: "T-Shirt", category: "clothing", price: 1000, rating: 4.1 },
    { name: "Jeans", category: "clothing", price: 2000, rating: 4.3 }
];

const container = document.getElementById("productContainer");

// ===== Display Products =====
function displayProducts(productArray) {
    container.innerHTML = "";

    productArray.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card", "glass");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ⭐ ${product.rating}</p>
        `;

        container.appendChild(card);
    });
}

// ===== Apply Filters and Sorting =====
function applyFilters() {

    let filtered = [...products];

    const category = document.getElementById("categoryFilter").value;
    const sortOption = document.getElementById("sortOption").value;

    // Filter by category
    if (category !== "all") {
        filtered = filtered.filter(product => product.category === category);
    }

    // Sorting
    if (sortOption === "priceLow") {
        filtered.sort((a, b) => a.price - b.price);
    }
    else if (sortOption === "priceHigh") {
        filtered.sort((a, b) => b.price - a.price);
    }
    else if (sortOption === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(filtered);
}

// ===== Event Listeners =====
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("sortOption").addEventListener("change", applyFilters);

// ===== Initial Display =====
displayProducts(products);