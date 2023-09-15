# Notes-API Documentation 
## Introduction:
Welcome to the documentation for my API. This API allows you to manage notes app.

Developed with :
* language : NodeJs(Express)
* database : MongoDB(Mongoose)

## Endpoints : URL( " /api/v1" ) :
### For the Notes :
* Get a list of all notes : <br>
&nbsp URL: /notes <br>
&nbsp Method: GET
  
* Create a Note : <br>
&nbsp URL: /notes <br>
&nbsp Method: POST
    
* Get a specific note by ID : <br>
&nbsp URL: /notes/:id <br>
&nbsp Method: GET

* Update the title of a note :<br>
&nbsp URL: /notes/:id/title <br>
&nbsp Method: PATCH

* Update the content of a note :<br>
&nbsp URL: /notes/:id/content <br>
&nbsp Method: PATCH

* Delete a specific note by ID :<br>
&nbsp URL: /notes/:id__
&nbsp Method: DELETE

*  Filter notes by a single ta :<br>
&nbsp URL: /notes/filter-by-tag <br>
&nbsp Method: GET

### For the Tags : URL( " /api/v1 " ) :
* Get a list of all tags:<br>
&nbsp URL: /tags <br>
&nbsp Method: GET
  
* Create a new tag :<br>
&nbsp URL: /tags <br>
&nbsp Method: POST
    
* Get a specific tag by ID :<br>
&nbsp URL: /tags/:id <br>
&nbsp Method: GET

* Update the name of a tag :<br>
&nbsp URL: /tags/:id <br>
&nbsp Method: PATCH

* Delete a specific tag by ID :<br>
&nbsp URL: /tags/:id <br>
&nbsp Method: DELETE

## Error Handling :
