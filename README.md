
# TabTabTab

Consist of a Chrome extension, an app, and it's own server and Data.

Instead of keeping hundreds of tabs on your window, just add it to the TabTabTab to come back later!


## Installation
open two terminals
##### terminal 1 (server)
```bash
  cd server
  npm install 
  npm run start
```
##### terminal 2 (client)
```bash
  cd client
  npm install 
  npm start
```
## API Reference

### Users
#### Get all users
```http
  GET /api/users
```
#### Post new user
```http
  POST /api/users/
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of user |
| `email`      | `string` | **Required**. email of user |
| `image`      | `string` | **Required**. image URL of user |

#### Get one user
```http
  GET /api/users/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Edit user info
```http
  PUT /api/users/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of user to update |
| `email`      | `string` | **Required**. email of user to update |
| `image`      | `string` | **Required**. image URL of user to update |

#### Delete a user
```http
  DELETE /api/users/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |

### 
### List
#### Get a url list of selected user
```http
  GET /api/list/${userID}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user to fetch |

#### Get a single item from a selected list
```http
  GET /api/list/${userID}/${urlID}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user to fetch |
| `urlID`      | `string` | **Required**. Id of url to fetch |

#### Post new single item from the selected list
```http
  POST /api/list/${userID}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user to post url |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `URLName`      | `string` | **Required**. Name of URL to post |
| `URLPath`      | `string` | **Required**. Path of URL to post |
| `user_id`      | `string` | **Required**. Id of user to post |

#### Update a single item from a selected list
```http
  PUT /api/list/${userID}/${urlID}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user to update url |
| `urlID`      | `string` | **Required**. Id of url to update url |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `URLName`      | `string` | **Required**. Name of URL to update |
| `URLPath`      | `string` | **Required**. Path of URL to update |
| `user_id`      | `string` | **Required**. Id of user to update |

#### Delete a single item from a selected list
```http
  DELETE /api/list/${userID}/${urlID}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user this url belongs to |
| `urlID`      | `string` | **Required**. Id of url to Delete |

## Authors

- [@chanho-chris-kim](https://github.com/chanho-chris-kim)

  