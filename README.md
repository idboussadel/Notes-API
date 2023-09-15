# Notes-API Documentation 
## Introduction:
Welcome to the documentation for my API. This API allows you to manage notes app.

Developed with :
* language : NodeJs(Express)
* database : MongoDB(Mongoose)

## Endpoints : URL( " /api/v1" ) :
### For the Notes :
* Get a list of all notes : <br>
 URL: /notes <br>
 Method: GET
  
* Create a Note : <br>
 URL: /notes <br>
 Method: POST
    
* Get a specific note by ID : <br>
 URL: /notes/:id <br>
 Method: GET

* Update the title of a note :<br>
 URL: /notes/:id/title <br>
 Method: PATCH

* Update the content of a note :<br>
 URL: /notes/:id/content <br>
 Method: PATCH

* Delete a specific note by ID :<br>
 URL: /notes/:id__
 Method: DELETE

*  Filter notes by a single ta :<br>
 URL: /notes/filter-by-tag <br>
 Method: GET

### For the Tags : URL( " /api/v1 " ) :
* Get a list of all tags:<br>
&nbsp URL: /tags <br>
&nbsp Method: GET
  
* Create a new tag :<br>
 URL: /tags <br>
 Method: POST
    
* Get a specific tag by ID :<br>
 URL: /tags/:id <br>
 Method: GET

* Update the name of a tag :<br>
 URL: /tags/:id <br>
 Method: PATCH

* Delete a specific tag by ID :<br>
 URL: /tags/:id <br>
 Method: DELETE

## Error Handling :
