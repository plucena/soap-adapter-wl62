
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	$("#AdapterLogin").click(login);
	
	function login() {

		var invocationData = {
			adapter : 'Login',
			procedure : 'Login',
			parameters : [ "teste" ]
		};

		WL.Client.invokeProcedure(invocationData, {
			onSuccess : loginSuccess,
			onFailure : loginFailure

		});
		
		function loginSuccess(result) {
			WL.Logger.debug("Login retrieve success");
			alert(JSON.stringify(result));
		}
		function loginFailure(result) {
			WL.Logger.debug("Login retrieve success");
			alert(result);
		}

	}
	
}

/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}