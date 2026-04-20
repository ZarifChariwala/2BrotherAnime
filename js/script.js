document.addEventListener("DOMContentLoaded", () => {

    // ONLY run auto-scroll if grid exists
    const grid = document.querySelector('.grid');

    if (grid) {
        let scrollAmount = 0;
        let scrollStep = 1;

        function autoScroll() {
            scrollAmount += scrollStep;
            grid.scrollLeft = scrollAmount;

            if (scrollAmount >= grid.scrollWidth - grid.clientWidth) {
                scrollAmount = 0;
            }
        }

        let scrollInterval = setInterval(autoScroll, 20);

        grid.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        grid.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 20);
        });
    }

    // PRODUCT PAGE LOGIC
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        const nameEl = document.getElementById("productName");
        const priceEl = document.getElementById("productPrice");
        const imgEl = document.getElementById("productImage");

        if (nameEl) nameEl.textContent = product.name;
        if (priceEl) priceEl.textContent = "$" + product.price;
        if (imgEl) imgEl.src = product.image;
    }

});