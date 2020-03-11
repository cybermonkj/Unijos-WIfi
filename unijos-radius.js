 function manualSignIn(){
    alert('Just for a heads up you have to be a Unijos student for at least three months ;)');
                let firstName=prompt('Type in your First Name (It Has to be your first name, so it works)');
                let matNo=prompt('Type in your Matric Number');
                let userLogin= `${matNo}`; <div><p>eg. 2018ns0024<p/></div>
                let password=`${matNo}`;
                localStorage.setItem('userName',`${userLogin}`);
                localStorage.setItem('password',`${password}`);
                    document.getElementsByName('username')[1].value=userLogin;
                    document.getElementsByName('password')[1].value=password;
 }
 function autoSignIn(){
    document.getElementsByName('username')[1].value=localStorage.userName;
    document.getElementsByName('password')[1].value=localStorage.password;
 }
 if(window.location.href=='http://network.unijos.edu.ng/login'||
    window.location.href=='https://network.unilag.edu.ng/login'){  
        if(localStorage.length==0){
                manualSignIn();
            }
        else{
                if(confirm('Do You Want To Login With New Details?')==true){
                    localStorage.clear();
                    manualSignIn();
                }else{
                    autoSignIn();
                }   
            }   
    }
document.querySelector('input[type=submit]').click();
