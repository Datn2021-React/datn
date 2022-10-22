const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  operatingSystem: {
    type: String,
    required: [true, "Please Enter product operatingSystem"],
  },

  description:
    // type: String,
    // required: [true, "Please Enter product Description"],
    [
      {
        insurance: {
          type: Number,
          required: [true, "Please Enter product insurance"],
          maxLength: [2, "insurance cannot exceed 2 characters"],
        },
        format: {
          type: String,
          required: [true, "Please Enter product format"],
        },
        battery: {
          type: String,
          required: [true, "Please Enter product battery"],
        },
        bluetooth: {
          type: String,
          required: [true, "Please Enter product bluetooth"],
        },
        trademark: {
          type: String,
          required: [true, "Please Enter product trademark"],
        },
        origin_trademark: {
          type: String,
          required: [true, "Please Enter product origin_trademark"],
        },
        front_camera: {
          type: String,
          required: [true, "Please Enter product front_camera "],
        },
        rear_camera: {
          type: String,
          required: [true, "Please Enter product front_camera "],
        },
        support: {
          type: String,
          required: [true, "Please Enter product support "],
        },
        Chip: {
          type: String,
          required: [true, "Please Enter product Chip "],
        },
        other_func: {
          type: String,
          required: [true, "Please Enter product other_func "],
        },
        RAM: {
          type: String,
          required: [true, "Please Enter product RAM "],
        },
        resolution: {
          type: String,
          required: [true, "Please Enter product resolution "],
        },
        details: {
          type: String,
          required: [true, "Please Enter product details "],
        },
      },
    ],
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  priceOld: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
