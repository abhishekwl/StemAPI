Stem Backend API

<b>Routes</b>

<u>BASE_URL = /api/v1</u>
<br>
<br>
<b>USERS:</b>
1) CREATE USER ---> [POST] /users
2) GET USER ---> [GET] /users/<USER_UID>
3) UPDATE USER ---> [PUT] /users/<USER_UID>
4) DELETE USER ---> [DELETE] /users/<USER_UID>

<b>TESTS:</b>
1) CREATE TEST ---> [POST] /tests
2) GET ALL TESTS ---->
    <br>a> [GET] /tests?test=<TEST_NAME>&hospitalDistrict=<CITY_NAME>
    <br>b> [GET] /tests?test=<TEST_NAME>
    <br>c> [GET] /tests?popular=1&hospitalDistrict=<CITY_NAME>
    <br>d> [GET] /tests
3) RETRIEVE SPECIFIC TEST --> /tests/<TEST_ID>
4) UPDATE TEST ---> /tests/<TEST_ID>
5) DELETE ---> /tests/<TEST_ID>
