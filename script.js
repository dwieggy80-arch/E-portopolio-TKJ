document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data Proyek TKJ
    const projectsData = [
        {
            id: 1,
            title: "Simulasi Jaringan LAN Sederhana",
            description: "Membuat topologi jaringan LAN menggunakan Cisco Packet Tracer, konfigurasi IP address, dan testing koneksi antar host.",
            image: "images/project_network.jpg", // Ganti dengan path gambar Anda
            tags: ["Jaringan Dasar", "Cisco PT", "Konfigurasi IP"],
            link: "#detail-proyek-1"
        },
        {
            id: 2,
            title: "Website Portofolio HTML & CSS",
            description: "Proyek akhir semester membuat website statis menggunakan HTML5 dan CSS3 murni dengan desain responsif.",
            image: "images/project_web.jpg", // Ganti dengan path gambar Anda
            tags: ["Web Dev", "HTML5", "CSS3", "Responsive"],
            link: "#detail-proyek-2"
        },
        {
            id: 3,
            title: "Instalasi & Konfigurasi Server Debian",
            description: "Instalasi OS Debian, konfigurasi DHCP Server, dan Web Server (Apache) untuk kebutuhan lab sekolah.",
            image: "images/project_server.jpg", // Ganti dengan path gambar Anda
            tags: ["Linux", "Server", "Debian", "Apache"],
            link: "#detail-proyek-3"
        },
        // Tambahkan Proyek TKJ Anda yang lain di sini
    ];

    const container = document.getElementById('projects-container');

    // Fungsi untuk membuat elemen kartu proyek
    function createProjectCard(data) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-id', data.id);

        const tagsHtml = data.tags.map(tag => `<span>${tag}</span>`).join('');

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${data.image}" alt="${data.title}" class="project-image">
            </div>
            <div class="project-content">
                <h3>${data.title}</h3>
                <div class="tags">${tagsHtml}</div>
                <p>${data.description}</p>
                <a href="${data.link}" class="detail-button">Lihat Detail Proyek <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        return card;
    }

    // Tampilkan semua kartu proyek di container
    projectsData.forEach(data => {
        container.appendChild(createProjectCard(data));
    });


    // 2. Animasi Keren: Kartu Muncul Bertahap (Staggered Load)
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        // Atur posisi awal (di bawah dan transparan)
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        
        // Atur jeda dan transisi saat muncul
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 200); // Jeda 200ms antara setiap kartu
    });
});
