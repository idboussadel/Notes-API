# Notes-API Documentation 
## Introduction:
Welcome to the documentation for my API. This API allows you to manage notes app.

Developed with :
* Language : NodeJs(Express)
* Database : MongoDB(Mongoose)
* Testing : POSTMAN

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

### For the Tags :
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

All the server responses are in JSON.

## Error Handling :
This API implements custom error handling using an AppError class and custom error messages. When an error occurs, it is wrapped in an AppError instance, allowing for consistent error formatting and handling throughout the application. All types of errors, whether they originate from client-side, server-side, or mongoose (database) errors are handled.
Error handling is categorized into two modes :
### Development Mode :
Detailed error messages are provided in JSON format. These messages aim to assist developers in diagnosing and resolving issues efficiently. Example of a detailed error response:
```sh
{
  "status": "error",
  "error": {
    "errors": {
      "content": {
        "name": "ValidatorError",
        "message": "the content is required",
        "properties": {
          "message": "the content is required",
          "type": "required",
          "path": "content"
        },
        "kind": "required",
        "path": "content"
      }
    },
    "_message": "Notes validation failed",
    "statusCode": 500,
    "status": "error",
    "name": "ValidationError",
    "message": "Notes validation failed: content: the content is required"
  },
  "message": "Notes validation failed: content: the content is required",
  "stack": "ValidationError: Notes validation failed: content: the content is required\n..."
}

```
### Production Mode :
Error responses are designed to be user-friendly and less detailed to ensure a better user experience. Example of a simplified error response:
```sh
{
  "status": "fail",
  "message": "Invalid input data. the content is required"
}
```

### Exemple for the test in Postman :
![image](https://github.com/Devai-coding/Notes-API/assets/113947156/d51bc67a-3d40-43ef-bffb-a6664c4fd55c)

## Finaly :
As we introduce Version 1 of our API, we are committed to ongoing enhancement and refinement. Your feedback is crucial—whether you encounter bugs, need assistance, or have feature suggestions, we welcome your input. Submit issues or requests on our GitHub repository or contact us directly through our support channels.
