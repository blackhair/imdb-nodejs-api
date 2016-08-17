
**IMDB Node.js Module**
----------------------------
This module is  made for [IMDB.com](http://imdb.com) website that allows you  to get any details for  Movie/TvSeries .

## Dependencies
This module requires  following packages to be installed :

 - Request
 - Body-parser (Use POST input parameters)
 - Express

## How to install
To install this module, run these commands:

    $ git clone https://github.com/blackhair/imdb-nodejs-api.git
    $ cd imdb-nodejs-api
    $ npm install
Now you can use the package's methode by running it : 
    
    
    $ node index.js
    
So, you can use the below methode on port 3000 . 
You can get Movie/TvSeries information/Details by using this URL structure : 


    http://localhost:3000/t=[Movie Ttile] // For get specific movie
    http://localhost:3000/s=[Movie Ttile] // For search the similar name 
    http://localhost:3000/i=[IMDB ID] // For get movie info by IMDB ID
