// Ürünleri içeren JSON dosyasının yolu
const productsURL = 'products.json';

// Ana sayfadaki ürün listesini oluştur
window.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // JSON dosyasından ürünleri al
    fetch(productsURL)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const card = createProductCard(product);
                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Ürünleri alırken bir hata oluştu:', error);
        });
});

// Ürün kartı oluştur
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Barkod: ${product.barcode}</p>
        <p>Paket Adedi: ${product.package_quantity}</p>
        <p>Price: ${product.price}</p>
        <p>Lot: ${product.lot_content}</p>
        <p>Paket Fiyatı: ${product.package_quantity*product.price}</p>
        <button onclick="showProductDetail('${product.name}')">Detayları Gör</button>
    `;

    return card;
}

// Ürün detaylarını göster
function showProductDetail(productName) {
    // Ürün adını query parametresi olarak ekleyerek ürün detay sayfasına yönlendir
    window.location.href = `product.html?name=${encodeURIComponent(productName)}`;
}
