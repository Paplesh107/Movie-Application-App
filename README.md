This project is a simple movie browsing web application that loads movie data from a local movies.json file and displays them dynamically on the page. Users can search for movies by title, view details such as overview, genres, actors, release year, and open the trailer link.
# Project structure
   project/
│
├── index.html       # Main HTML structure
├── style.css        # Styles for movie layout and UI
├── script.js        # The JavaScript file shown in this project
└── movies.json      # Local file containing movie data


#  ✅ Load Movies From Local JSON

The application fetches data from movies.json using:

fetchMovies(API_URL);


The JSON file contains an array of movie objects.


#  🎞 Display Movies

Each movie displays:

                Poster image
                
                Title
                
                Rating (color-coded)
                
                Overview
                
                Genres
                
                Actors
                
                Release year
                
                Trailer link



#  🔍 Search Movies

Users can search for movies by title using the search bar:

movie.title.toLowerCase().includes(searchTerm)



#  🎨 Rating Colors

Ratings are displayed with a color class based on value:

Score	Color
8–10	Green
5–7.9	Orange
0–4.9	Red


#    🛠 Requirements

No frameworks needed!

Only standard web technologies:

    HTML

    CSS

    JavaScript