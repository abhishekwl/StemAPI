<h1>Stem Backend API</h1>

<b>Schemas</b>
<br>
<br>
<b>USERS:</b>
{
    userName: { type: String, required: true },
    userAge: { type: Number, required: true },
    userGender: { type: String, required: true },
    userBloodGroup: { type: String, required: true },
    userMedicalHistory: { type: String, required: false, default: "" },
    userImageUrl: { type: String, required: false, default: "" },
    userUid: { type: String, required: true },
    userEmailId: { type: String, required: true },
    userContactNumber: { type: String, required: true }
}

<b>TESTS:</b>
{
    testName: { type: String, required: true },
    hospitalName: { type: String, required: true },
    hospitalImageUrl: { type: String, required: false, default: "" },
    hospitalUid: { type: String, required: true },
    testPrice: { type: Number, required: true },
    hospitalLatitude: { type: Number, required: true },
    hospitalLongitude: { type: Number, required: true },
    popularity: { type: Number, required: false, default: 0 },
    hospitalDistrict: { type: String, required: true }
}

<b>ORDERS:</b>
{
    userLatitude: { type: Number, required: true },
    userLongitude: { type: Number, required: true },
    userLandmark: { type: String, required: false, default: "" },
    uid: { type: String, required: true },
    user: User,
    tests: [ Test ]
}

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
