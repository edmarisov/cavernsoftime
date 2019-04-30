# cavernsoftime

Project was designed, but not limited to, visualizing World of Warcraft® "who" dataset, where on the map one can observe how locations were populated and how they were changing over time, where players were moving, guilds raiding times and leveling path.

Using leaflet.js for map, html canvas and d3js for rendering.

Demo: https://www.cavernsoftime.net/

Medium article: https://medium.com/@edmarisov/wow-time-machine-visualized-stories-ed93cba3513c?source=friends_link&sk=4b05dbf28323e8dd21f70db4cb1460ad 

Dataset: http://mmnet.iis.sinica.edu.tw/dl/wowah/

Data parser: https://github.com/myles-oneill/WoWAH-parser/blob/master/wowah-parser.py

Data preparation notebook: https://www.kaggle.com/edmarisov/preparing-data-for-visualization

For generating the tiles use gdal2tiles.py from https://github.com/commenthol/gdal2tiles-leaflet
-r (--resampling) 'near' is important to get sharp edges

<code>
python2 gdal2tiles.py -l -p raster -r near -z 0-6 -w none map.png /tiles
</code>
