# CodeSchool API

A client library to query CodeSchool public user profiles

## Install

`npm install --save codeschool-api`

## Usage

### User
```js
const { user } = require('codeschool-api');

user('pmbenjamin').then( profile => console.log(profile) );
// {
//  "username": "pmbenjamin",
//  "member_since": "2014-06-22T04:09:37.084Z",
//  "total_score": 131650,
//  "avatar": "http://gravatar.com/avatar/dc7906b75cf36a3798d0f423d676cb5c.jpg?s=80&r=pg"
// }
```

### Courses
```js
const { courses } = require('codeschool-api');

courses('pmbenjamin').then( data => console.log(data) );
// {
//  "completed" : [ {...}, {...}, {...} ],
//  "in_progress": [ {...}, {...}, {...} ]
// }
```

Optionally, you can pass a status (e.g. `completed` or `in_progress`):

```js
const { courses } = require('codeschool-api');

courses('pmbenjamin', 'completed').then( data => console.log(data) );
```

### Badges
```js
const { badges } = require('codeschool-api');

badges('pmbenjamin').then( data => console.log(data) );
```
