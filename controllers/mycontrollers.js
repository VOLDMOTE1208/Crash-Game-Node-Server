'use strict';

const controller = {};
var userList = [];
var userInfo = [];
controller.w_login = (req, res) => {

};

controller.w_signup = (req, res) => {
	
}
controller.login = (req, res) => {
	console.log(req.body.email_address+"	"+req.body.password)
	const emailAddr = req.body.email_address
	const password = req.body.password
	for(var i=0;i<userList.length;i++){
		if(emailAddr == userList[i][1]){
			if(password == userList[i][2]){
				res.json({
					success: 1
				});
			}
			else{
				res.json({
					success: 0
				});
			}
		}
	}
};

controller.signup = (req, res) => {
	console.log(req.body.username+"	"+req.body.email_address+"	"+req.body.password)
	if(req.body.username==null&req.body.email_address==null&&req.body.password==null){
		res.json({
			success: -1
		});
	}
	else{
		res.json({
			success: 1
		});
		userInfo=	[req.body.username,req.body.email_address,req.body.password];
		userList.push(userInfo)
		console.log(userList,userList.length,userList[0][1])		
	}
};

controller.savegame = (req, res) => {
	
}
controller.getSavedGame = (req, res) => {

};


module.exports = controller;
