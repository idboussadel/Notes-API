# Notes-API Documentation 
## Introduction:
Welcome to the documentation for my API. This API allows you to manage notes app.

Developed with :
* language : NodeJs(Express)
* database : MongoDB(Mongoose)

## Endpoints : URL( " /api/v1" ) :
### For the Notes :
* Get a list of all notes :
-- URL: /notes
-- Method: GET
  
* Create a Note :
-- URL: /notes
-- Method: POST
    
* Get a specific note by ID :
-- URL: /notes/:id
-- Method: GET

* Update the title of a note :
-- URL: /notes/:id/title
-- Method: PATCH

* Update the content of a note :
-- URL: /notes/:id/content
-- Method: PATCH

* Delete a specific note by ID :
-- URL: /notes/:id
-- Method: DELETE

*  Filter notes by a single ta :
-- URL: /notes/filter-by-tag
-- Method: GET

### For the Tags : URL( " /api/v1/tags " ) :
* Get a list of all notes :
-- URL: /notes
-- Method: GET
  
* Create a Note :
-- URL: /notes
-- Method: POST
    
* Get a specific note by ID :
-- URL: /notes/:id
-- Method: GET

* Update the title of a note :
-- URL: /notes/:id/title
-- Method: PATCH



## Error Handling :
