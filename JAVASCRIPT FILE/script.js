function saveName(){
    const username = document.getElementById('userNameInput').value.trim();

    if(username === ""){
        document.getElementById('welcomeMSG').textContent = `Hi Guest, Welcome To My Website`;
    } else {
        document.getElementById('welcomeMSG').textContent = `Hi ${username}, Welcome To My Website`;
    }

    document.getElementById('name-modal').style.display = 'none';
}

window.onload = function(){
    const modal = document.getElementById('name-modal');

    modal.style.display = 'flex';

    updateTime();
    setInterval(updateTime, 1000);

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
        });
    }
};

function updateTime(){
    const now = new Date();
    const formatted = now.toString();
    const el = document.getElementById('currentTime');
    if(el) el.textContent = formatted;
}

