const { Schema, model } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: { 
        type: Schema.Types.ObjectId, 
        required: true 
    },
    reactionBody: { 
        type: String, 
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
  });

// Construct a new instance of the schema class
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;