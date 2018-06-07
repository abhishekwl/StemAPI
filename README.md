Stem Backend API

<b>Routes</b>

BASE_URL = /api/v1

USERS:
1) CREATE USER ---> [POST] /users
2) GET USER ---> [GET] /users/<userUid>
3) UPDATE USER ---> [PUT] /users/<userUid>
4) DELETE USER ---> [DELETE] /users/<userUid>

TESTS:
1) CREATE TEST ---> [POST] /tests
2) GET ALL TESTS ---->
    a> [GET] /tests?test=<testName>&hospitalDistrict=<cityName>
    b> [GET] /tests?test=<testName>
    c> [GET] /tests?popular=1&hospitalDistrict=<cityName>
    d> [GET] /tests
3) RETRIEVE SPECIFIC TEST --> /tests/<testId>
4) UPDATE TEST ---> /tests/<testId>
5) DELETE ---> /tests/<testId>
