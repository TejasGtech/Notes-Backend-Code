# Authetication APIs

```Register API```
POST

http://localhost:3000/api/auth/register


Request Formate:
{
  "username":"testuser3",
  "email":"test3@gmail.com",
  "password": "testpassword3"
}

Response Formate:
{
    "message": "User register succefully",
    "username": "testuser4",
    "email": "test4@gmail.com"
}


```Login API```
POST

http://localhost:3000/api/auth/login

Request Formate:
{
  "email":"test2@gmail.com",
  "password": "testpassword2"
}

Response Formate:
{
    "message": "login succefull",
    "email": "test4@gmail.com"
}

```Logout API```
GET

http://localhost:3000/api/auth/logout

Response Formate:
{
    "message": "Succefully Logout"
}

# Notes APIs

```Create Notes API```
POST

http://localhost:3000/api/note/CreateNotes

Request Formate:
{
    "title":"test_tile",
    "notes":"test_notes_1234567890"
}

Response Formate:
{
    "message": "notes created succefully..",
    "title": "test_tile",
    "notes": "test_notes_1234567890"
}

```Fetch notes API```
GET

http://localhost:3000/api/note/FetchNotes

Response Formate:
{
    "message": "fetch succefully",
    "fetchdata": [
        {
            "_id": "698b1d4aec2d33ec75212603",
            "title": "test_tile",
            "notes": "test_notes_1234567890",
            "user": "698b1d18ec2d33ec752125ff",
            "__v": 0
        }
    ]
}

```Delete note API```
GET

http://localhost:3000/api/note/Delete/{ replace note id}

Response Formate:
{
    "message": "notes deleted succefully"
}

```Update title API```
POST

http://localhost:3000/api/note/UpdateTitle/{ replace note id}

Request Formate:
{
    "title":"Update title"
}

Response Formate:
{
    "message": "title update succefully",
    "title": "Update title"
}

```Update notes API```
POST

http://localhost:3000/api/note/UpdateNotes/{ replace note id}

Request Formate:
{
    "notes":"update notes"
}

Response Formate:
{
    "message": "Notes update succefully",
    "notes": "update notes"
}


```Notes```
•	The token are store automatically in browser
•	Replace http://localhost:3000/ with deploy link



