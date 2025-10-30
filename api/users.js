GET /api/users/profile
Authorization: Required

PUT /api/users/profile
Authorization: Required

{
  "name": "새로운 이름"
}

PUT /api/users/password
Authorization: Required (Local Account)

{
  "currentPassword": "현재 비밀번호",
  "newPassword": "새 비밀번호"
}

DELETE /api/users/account
Authorization: Required

GET /api/users/all
Authorization: Required (Admin)

PUT /api/users/:userId/type
Authorization: Required (Admin)

{
  "userType": "admin"  // user, admin
}