const CORRECT_PASSWORD = 'wangcy12121';

function checkPassword() {
    const password = document.getElementById('password-input').value;
    if (password === CORRECT_PASSWORD) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        renderFiles();
        // 保存登录状态
        sessionStorage.setItem('isLoggedIn', 'true');
    } else {
        alert('密码错误！');
    }
}

// 监听Enter键登录
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// 检查登录状态
function checkLoginStatus() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        renderFiles();
    }
}

// 页面加载时检查登录状态
window.addEventListener('load', checkLoginStatus);