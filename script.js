document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-link');
    const urlLink = document.getElementById('url-link');
    const content = document.getElementById('content');

    emailLink.addEventListener('click', function() {
        content.innerHTML = `
            <form id="email-scan-form" class="text-center">
                <div class="form-group mt-3">
                    <img src="img/email.png" alt="Email Icon" class="input-icon img-fluid">
                    <textarea class="form-control email-content" rows="10" placeholder="Enter email content here..." required></textarea>
                </div>
                <button type="submit" class="btn btn-scan mt-3">Scan</button>
            </form>
        `;
        document.querySelector('.nav-item.active').classList.remove('active');
        emailLink.parentElement.classList.add('active');
    });

    urlLink.addEventListener('click', function() {
        content.innerHTML = `
            <form id="url-scan-form" class="text-center">
                <div class="form-group mt-3">
                    <img src="img/url.png" alt="URL Icon" class="input-icon img-fluid">
                    <input type="url" class="form-control url-input" placeholder="Enter URL here..." required>
                </div>
                <button type="submit" class="btn btn-scan mt-3">Scan</button>
            </form>
        `;
        document.querySelector('.nav-item.active').classList.remove('active');
        urlLink.parentElement.classList.add('active');
    });
});
