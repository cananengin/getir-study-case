# Getir Study Case

## Requirements
node 12.18.2

npm 6.14.7
## Installing

Install dependencies with this command

```npm install```

## Create a .env file

In .env.example file you will see what you need for .env file

## Run
Run the application

```node index.js```

or

```npm start```

## Running the tests

To run integration tests

```npm test```

## Usage

``` POST http://localhost:3000/records/_query ``` 

```Content-type: application/json```

Body

```Body:
{
    "startDate": "2016-11-01",
    "endDate": "2016-11-03",
    "maxCount": 60,
    "minCount": 40
}
```

Response

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "yKxvxBJw",
            "createdAt": "2016-11-02T17:02:24.778Z",
            "totalCount": 51
        },
        {
            "key": "nVSJettm",
            "createdAt": "2016-11-01T21:30:20.519Z",
            "totalCount": 49
        }
    ]
}
```
