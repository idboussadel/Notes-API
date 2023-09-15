# Notes-API Documentation 
## Introduction:
Welcome to the documentation for my API. This API allows you to manage notes app.

Developed with :
* language : NodeJs(Express)
* database : MongoDB(Mongoose)

## Endpoints : URL( " /api/v1" ) :
### For the Notes :
* Get a list of all notes :<br>
-- URL: /notes
-- Method: GET
  
* Create a Note :
-- URL: /notes
-- Method: POST
    
* Get a specific note by ID :
-- URL: /notes/:id__
-- Method: GET

* Update the title of a note :
-- URL: /notes/:id/title
-- Method: PATCH

* Update the content of a note :
-- URL: /notes/:id/content
-- Method: PATCH

* Delete a specific note by ID :
-- URL: /notes/:id__
-- Method: DELETE

*  Filter notes by a single ta :
-- URL: /notes/filter-by-tag
-- Method: GET

### For the Tags : URL( " /api/v1 " ) :
* Get a list of all tags:
-- URL: /tags
-- Method: GET
  
* Create a new tag :
-- URL: /tags
-- Method: POST
    
* Get a specific tag by ID :
-- URL: /tags/:id
-- Method: GET

* Update the name of a tag :
-- URL: /tags/:id
-- Method: PATCH

* Delete a specific tag by ID :
-- URL: /tags/:id
-- Method: DELETE

## Error Handling :
