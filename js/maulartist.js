// Mendapatkan data dari file JSON menggunakan Fetch API
fetch('./filejson/maul.json')
  .then(response => response.json()) // Mengonversi respons ke JSON
  .then(data => {
    // Mengakses data artis dari objek JSON
    const artist = data.artists[0];

    // Menampilkan informasi artis di halaman web
    const artistsHover = document.querySelector('.m-artists-hover');
    artistsHover.innerHTML = `
      <p>
        <strong>Name:</strong>
        ${artist.name}
      </p>

      <p>
        <strong>Birthdate:</strong>
        ${artist.birthdate}
      </p>

      <p>
        <strong>Music:</strong>
        ${artist.music}
      </p>

      <hr>

      <p class="mb-0">
        <strong>Youtube Channel:</strong>
        <a href="#">${artist.youtubeChannel}</a>
      </p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    // Lakukan sesuatu jika terjadi kesalahan saat memuat data JSON
  });
