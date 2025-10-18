{
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true
    },
    restaurantName: {
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
      default: ''
    },
    recommendedMenu: {
      type: [String],
      default: []
    },
    review: {
      type: String,
      default: ''
    },
    submitterName: {
      type: String,
      default: ''
    },
    submitterEmail: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
      index: true
    }
  }