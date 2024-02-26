// window.onresize = function() {
//     var container = document.querySelector('.rounded-squares1');
//     container.style.width = "300px"; // Set the width
//     container.style.height = "200px"; // Set the height
//   };


new fullpage('#fullpage', {
    // Options like autoScrolling, anchors, menu, etc.
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71'],
    anchors: ['section1', 'section2', 'section3', 'section4'],
  });