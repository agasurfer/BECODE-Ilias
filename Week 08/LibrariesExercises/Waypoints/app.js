const waypointDown = new Waypoint({
    element: document.querySelector('.first'),
    handler: function(direction) {
        if (direction ==="down"){ 
      alert('Are you sure? Things are wild down there')
        } 
    },

     offset: 'bottom-in-view'
    
  })

  const waypointUp = new Waypoint({
    element: document.querySelector('.second'),
    handler: function(direction) {
        if (direction === "up") {
            alert('I told you!');
        }
    },
    offset: '0%'
});
