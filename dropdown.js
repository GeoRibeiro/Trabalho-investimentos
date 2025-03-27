function myFunction(event) {
  if (event) event.preventDefault();
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.getElementById("myDropdown");
  
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-20px)';
    dropbtn.classList.remove('arrow-up');
    
    setTimeout(() => {
      dropdownContent.classList.remove('show');
    }, 300);s
  } else {
    dropdownContent.classList.add('show');
    dropbtn.classList.add('arrow-up');
    setTimeout(() => {
      dropdownContent.style.opacity = '1';
      dropdownContent.style.transform = 'translateY(0)';
    }, 10);
  }
  
  return false;
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdownContent = document.getElementById("myDropdown");
    var dropbtn = document.querySelector('.dropbtn');
    if (dropdownContent && dropdownContent.classList.contains('show')) {
      dropdownContent.style.opacity = '0';
      dropdownContent.style.transform = 'translateY(-20px)';
      dropbtn.classList.remove('arrow-up');
      
      setTimeout(() => {
        dropdownContent.classList.remove('show');
      }, 300);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
}); 