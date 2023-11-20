document.getElementById('showlogin').addEventListener('click', function() {
  var loginbox = document.getElementsByClassName('loginbox')[0];
  loginbox.style.display = 'block';
  
});

document.getElementById('cancelBtn').addEventListener('click', function() {
  document.getElementsByClassName('loginbox')[0].style.display = 'none';
});

document.getElementById('loginBtn').addEventListener('click', function() {
  // 로그인 버튼을 눌렀을 때 로그인 처리 로직을 추가할 수 있음
  // 여기에 필요한 처리를 추가하고, 마지막에 아래 코드를 추가하여 창을 숨길 수 있음
  document.getElementsByClassName('loginbox')[0].style.display = 'none';
});