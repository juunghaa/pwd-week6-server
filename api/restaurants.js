GET /api/restaurants

GET /api/restaurants/:id

GET /api/restaurants/popular?limit=5

POST /api/restaurants
Authorization: Required (Admin)

{
  "name": "맛집 이름",
  "category": "한식",
  "location": "위치",
  "priceRange": "5,000~10,000원",
  "description": "설명",
  "recommendedMenu": ["메뉴1", "메뉴2"],
  "image": "이미지URL"
}

PUT /api/restaurants/:id
Authorization: Required (Admin)

DELETE /api/restaurants/:id
Authorization: Required (Admin)