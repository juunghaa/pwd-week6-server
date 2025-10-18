{
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: true,
      index: true
    },
    category: {
      type: String,
      required: true,
      index: true
    },
    location: {
      type: String,
      required: true
    },
    priceRange: {
      type: String,
      default: '정보 없음'
    },
    rating: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    },
    recommendedMenu: {
      type: [String],
      default: []
    },
    likes: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  }