

  function postRequest(reqData, api){
      $.ajax({
          type: "POST",
          url: "http://localhost:3000/save-products",
          data: reqData,
          success: (data,status)=> {
              console.log("success ajax post from bg.js");
              console.log(data);
              if(status == "success"){
                  console.log(data);
              }
          },
          error:()=>{
              console.log("error ajax post");
          }
      });
  }
postRequest({message :"this is the message"});
