
const { response } = require("express")
const {Event} = require("../config/config")
module.exports = {
create:async function (data){
try{

  const response = await Event.create(data)
if(response){
  return response
}else{
  return "Data Base Error"
}
}catch(error){
  throw error
}
},
view: async function (data) {
    try {
      const response = await Event.findAll();
      if (response) {
        return response;
      } else {
        return "Database Error";
      }
    } catch (error) {
      throw error;
    }
  }
}
