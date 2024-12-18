

let blogs = [];

// function : membuat suatu perintah
function addBlog(event) {

    // agar halaman tidak ter refresh saat fungsi dijalankan
    event.preventDefault();
    let title = document.getElementById("input-blog-title").value;
    let description = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image");

    // untuk ambil gambar
    image = URL.createObjectURL(image.files[0]); 

    // data objek
    const blog = {
        blogTitle: title,
        blogContent: description,
        blogImage: image, 
    };

    // push method array untuk di save ke dalam array
    blogs.push(blog);

    console.log(blogs);

    renderBlog();
}

// untuk menyisipkan data baru ke elemen HTML
function renderBlog() {
    // akses dahulu dengan id content
    let contentContainer = document.getElementById("contents");

    // inject element HTML
    contentContainer.innerHTML = "";

    // looping tiap data di dalam array dan render ke HTML
    for (let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML +=  `
        <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blogs[i].blogImage}" alt="blog-image" />
                    </div>
                    <div class="blog-content">
                    <h2>${blogs[i].blogTitle}</h2>
                    <span class="detail-blog">17 Des 2024 09.00 | Author</span>
                    <p>
                    ${blogs[i].blogContent}
                    </p>
                    </div>
                </div>
                `;
    }
}