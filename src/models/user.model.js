{
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: function() { return this.provider === 'local'; }
    },
    provider: {
      type: String,
      enum: ['local', 'google', 'naver'],
      default: 'local'
    },
    providerId: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    },
    userType: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  }