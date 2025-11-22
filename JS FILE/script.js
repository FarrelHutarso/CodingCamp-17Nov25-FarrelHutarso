// function saveName(){
//     const username = document.getElementById('userNameInput').value;
    
//     if(username.trim() === ""){
//         alert("Nama Tidak Boleh Kosong!");
//         return;
//     }

//     localStorage.setItem('username', username.trim());

//     document.getElementById('welcomeMsg').textContent = 'Hi ${username.trim()}, Welcome To Website';
//     document.getElementById('name-modal').style.display = 'none';
// }

// window.onload = function(){
//     const storeName = localStorage.getItem('username');
//     const modal = this.document.getElementById('name-modal');
    
//     if(storeName){
//         document.getElementById('welcomeMsg').textContent = `Hi ${storeName}, Welcome To Website`;
//         document.getElementById('name-modal').style.display = 'none';
//     }else{
//         modal.style.display = 'flex';
//     }
// }

function saveName(){
    const username = document.getElementById('userNameInput').value.trim();
    
    if(username === ""){
        alert("Nama Tidak Boleh Kosong!");
        return;
    }

    // SIMPAN NAMA
    localStorage.setItem('username', username);

    // UPDATE TEKS WELCOME
    document.getElementById('welcomeMSG').textContent = `Hi ${username}, Welcome To My Website`;

    // TUTUP MODAL
    document.getElementById('name-modal').style.display = 'none';
}

window.onload = function(){
    const storedName = localStorage.getItem('username');
    const modal = document.getElementById('name-modal');

    if(storedName){
        // kalau ada nama tersimpan
        document.getElementById('welcomeMSG').textContent = `Hi ${storedName}, Welcome To My Website`;
        modal.style.display = 'none';
    } else {
        // kalau belum ada nama
        modal.style.display = 'flex';
    }

    // Start clock in preview box
    updateTime();
    setInterval(updateTime, 1000);

    // Wire contact form submit to preview update
    const contactForm = document.getElementById('contactForm');
    if(contactForm){
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const dob = document.getElementById('contactDOB').value;
            const genderEl = document.querySelector('input[name="gender"]:checked');
            const gender = genderEl ? genderEl.value : '-';
            const message = document.getElementById('contactMessage').value.trim();

            document.getElementById('previewName').textContent = name || '-';
            document.getElementById('previewDOB').textContent = dob || '-';
            document.getElementById('previewGender').textContent = gender || '-';
            document.getElementById('previewMessage').textContent = message || '-';

            // Optionally clear the form after submit (commented out):
            // contactForm.reset();
        });
    }
};

function updateTime(){
    const now = new Date();
    // Format: e.g., Fri Jun 17 2022 11:27:28 GMT+0100
    const formatted = now.toString();
    const el = document.getElementById('currentTime');
    if(el) el.textContent = formatted;
}

