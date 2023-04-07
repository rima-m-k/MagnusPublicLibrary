

function checkName(data){
    
    let err=null;
    const pattern = /[^A-Za-z\s]/g;
    const trimmedData = data.trim();

    if(trimmedData.length ===0){
        err="This field cannot be empty"
    }else if(pattern.test(trimmedData)){
        err="Name cannot contain special characters or numbers"
    }else err= null
    
    return err
}
function checkCode(data,limit){
    let err=null;
    const pattern = /[^A-Za-z]/g;
    const trimmedData = data.trim();

    
    if(trimmedData.length ===0){
        err="This field cannot be empty"
    }else if(pattern.test(trimmedData)){
        err="Code  cannot contain special characters or numbers"
    }else if(trimmedData.length!== limit) {
        err=`Code must contain ${limit} letters`
    } else err= null
    
    return err
}

function checkDate(data) {
    let err=null;
    
    const today = new Date();
    if(data>today){
      err="Invalid date"
    }
return err

}
function checkNationality(data){
    let err=null;
    const pattern = /[^A-Za-z]/g;
    const trimmedData = data.trim();

    if(trimmedData.length ===0){
        err="This field cannot be empty"
    }else if(pattern.test(trimmedData)){
        err="Code  cannot contain special characters or numbers"
    }else err= null

    return err
}

function checkTextarea (data){
    let err=null;
    const trimmedData = data.trim();

    if(trimmedData.length ===0){
        err="This field cannot be empty"
    }else err= null

    return err
}



module.exports = {
    checkName,
    checkCode,
    checkDate,
    checkNationality,
    checkTextarea
}