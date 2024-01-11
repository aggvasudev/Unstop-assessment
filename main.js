//sidbar responsive slide script

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    }
}

// popup modal script

document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling when the modal is open
  });
  
  document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling when the modal is closed
  });
  