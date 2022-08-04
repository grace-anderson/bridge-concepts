const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Address = require('./Address');
const Project = require('./Project');

// Email check  from https://thewebdev.info/2022/03/16/how-to-validate-email-syntax-with-mongoose/#:~:text=To%20validate%20email%20syntax%20with%20Mongoose%2C%20we%20can%20set%20the,%40%5Cw%2B(%5B%5C.
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      lowercase: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    address: Address.schema,
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project',
    }]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Virtual to give full name
userSchema.virtual('fullName').get(function () {
  return (this.firstName + ' ' + this.lastName);
});

const User = mongoose.model('User', userSchema);

module.exports = User;