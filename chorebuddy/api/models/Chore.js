/**
* Chore.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id: {
  		type: 'integer',
  		primaryKey: true,
  		unique: true,
  	},
  	name:{
  		type: 'string',
  		required: true,
  	},
  	repetition:{
  		type: 'string',
  		enum: ['daily', 'weekly'],
  		required: true,
  	},
    days: {
      type: 'array',
      defaultsTo: [],
    },
  	time: {
  		type: 'string',
  	},
  }
};
