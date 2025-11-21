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
};

