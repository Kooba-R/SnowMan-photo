const gallery = document.getElementById('gallery');
const totalImages = 38; // 38枚に対応

for (let i = 1; i <= totalImages; i++) {
    const item = document.createElement('div');
    item.classList.add('item');

    // 奇数は縦(portrait)、偶数は横(landscape)
    if (i % 2 !== 0) {
        item.classList.add('portrait');
    } else {
        item.classList.add('landscape');
    }

    const img = document.createElement('img');
    // IMG-1.JPG 〜 IMG-38.JPG を読み込み
    img.src = `IMG-${i}.jpg`; 
    img.alt = `Photo ${i}`;
    img.loading = "lazy";

    item.appendChild(img);
    gallery.appendChild(item);
}