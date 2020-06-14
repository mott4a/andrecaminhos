var post = {
    "post": [{
      "id": "randomId1",
      "link": "clickbait.com"
    }, {
      "id": "randomId2",
      "link": "imgur.com"
    }]
  };

    var parentDiv = document.getElementById('parentDiv');
    yourJsonObject.points.forEach(function(item, index){
            var newDiv = document.createElement('div');
            newDiv.id = "post" + index;
    
            var pChild = document.createElement('p');
            pChild.id = "link";
            //if so required
            //replace above with 'pChild.id = item.link;'
    
    
            newDiv.appendChild(pChild);
            parentDiv.appendChild(newDiv);
        });