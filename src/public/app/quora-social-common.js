$(()=>{
    $('#navbar').load('/components/navbar.html',LoginIfNeeded)
    $('#footer').load('/components/footer.html')
//     $('#navbar').load('/components/navbar.html')
    $('#content').load('/components/all-articles.html')
    
  
})


function LoginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user):null;
    //  console.log(currentUser)
    if(!currentUser){
        $.post('/api/users',{},(user)=>{
            if(user){
                console.log('registered current user as',user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
            
                $('#nav-username').text(currentUser.username)
            }


        })
    } else{
        console.log('resuming session as ',currentUser.username)
        console.log($('#nav-username'))
        $('#nav-username').text(currentUser.username)    
    }
}