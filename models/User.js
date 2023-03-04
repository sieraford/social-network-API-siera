const { Schema, model } = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new Schema(
    {
        username: {
          type: String,
          required: true,
          trim: true,
          unique: true
        },
        email: {
          type: String,
          required: true,
          unique: true,
          match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
          ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'user',
            },
          ],
      },
      {
        toJSON: {
          getters: true,
          virtuals: true,
        },
      }
)

// Create a virtual property `friendCount` that gets the length of the user's friends array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

  // Initialize our User model
const User = model('user', userSchema);

module.exports = User;
