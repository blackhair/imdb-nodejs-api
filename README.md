
**IMDB Node.js Module**
----------------------------
This module made for [IMDB.com](http://imdb.com) website that allows to get any details from each Movie/Serial .

## Dependencies
This module requires that the following packages be installed :

 - Request
 - Body-parser (Use POST input parameters)
 - Express

## How to install
For install this module, run below command:

    $ git clone https://github.com/blackhair/imdb-nodejs-api.git
    $ npm install
Now you can use the package's methode by run it : 
    
    
    $ node index.js
    
So, you can use the below methode on port 3000 . 
You can get Movie/Serial information by using this URL parameter : 


    http://localhost:3000/t=[Movie Ttile] // For get specific movie
    http://localhost:3000/s=[Movie Ttile] // For search the similar name 
    http://localhost:3000/i=[IMDB ID] // For get movie info by IMDB ID
