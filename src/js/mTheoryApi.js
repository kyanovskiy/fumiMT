/**
 * Created by kyanovskiy on 2/25/17.
 */

var mTheoryApi = {
    loginData: {errorMsg:'',data:{}},
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    login: function(clientAppId,clientAppPassword,userName,userPassword, okcallback,notokcallback){
     //var loginToken={errorMessage:'',data:''};
        $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/json");
            },
            url: "http://kyanovskiy.local:63000/login",
            data: JSON.stringify({clientAppId:clientAppId,
                clientAppPassword:clientAppPassword,
                userName:userName,
                userPassword:userPassword
            }),
            success: function(msg) {
                //alert(JSON.parse(msg).accessToken);
               // loginToken.data=JSON.parse(msg);
                mTheoryApi.loginData.data=JSON.parse(msg);
                okcallback();
            },
            error:function (msg) {
                //alert(msg);
               // loginToken.errorMessage=msg;
                try {
                    mTheoryApi.loginData.errorMsg=JSON.parse(msg);
                } catch (err) {
                    mTheoryApi.loginData.errorMsg=err.message;

                }
                notokcallback();
            }
        });
   //  return loginToken;

    },
    login2: function(clientAppId,clientAppPassword,userName,userPassword){
        //var loginToken={errorMessage:'',data:''};
        var dta=JSON.stringify({clientAppId:clientAppId,
            clientAppPassword:clientAppPassword,
            userName:userName,
            userPassword:userPassword});
        //$.post("http://kyanovskiy.local:63000/login",dta,function(data,status,xhr),dataType);

        $.post("http://kyanovskiy.local:63000/login",
            dta,
            function(data,status){

                alert("Data: " + data + "\nStatus: " + status);
                mTheoryApi.loginData.data=JSON.parse(msg);

            },'json');

        //  return loginToken;

    }

};