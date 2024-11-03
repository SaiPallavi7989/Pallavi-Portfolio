document.getElementById('scrollImage').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('scrollImage1').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
document.getElementById('scrollImage2').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
