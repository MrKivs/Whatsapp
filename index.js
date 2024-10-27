

/*
class
id
name
querySelector function
*/
const chatsData=[
    {
        id:1,
        userName:"Felly",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Class imebounce ama!? ;)",
    },
    {
        id:2,
        userName:"Moses",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Uko wapi wewe!?",
    },
    {
        id:3,
        userName:"Jansen",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Ulieka sign sheet wapi!?",
    },
    {
        id:4,
        userName:"Phin",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Kesho tuvae official!?",
    },
    {
        id:5,
        userName:"Debbie",
        profileImage:"../images/profile.jpg",
        time:"07:00",
        msg:"Nishikie kiti",
    },
    {
        id:6,
        userName:"Emma",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Class imebounce ama!? ;)",
    },
    {
        id:7,
        userName:"Rufus",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"I've sent the notes ",
    },
    {
        id:8,
        userName:"John",
        profileImage:"../images/profile.jpg",
        time:"10:00",
        msg:"Class imebounce ama!? ;)",
    },

]

let chatsContainer = document.querySelector(".chats-container");
populateMsg();
function populateMsg(){
    let msgHTML='';
    chatsData.forEach((chatData)=>{
        msgHTML+=`
        <div class="message">
            <div>
                <img src="${chatData.profileImage}" alt="">
            </div>
            <div>
                <div>${chatData.userName}</div>
                <div>${chatData.msg}</div>
                <span>3</span>
            </div>    
                <div>${chatData.time}${timeSuffix(chatData.time)}</div>
        </div>`
    })
 
    chatsContainer.innerHTML=msgHTML;
}

function timeSuffix(timeSting){
    let time = Number(timeSting)*100; //12.03 > 1203
    let suffix;
    if(time<=1200){
        suffix="AM";
    }else{
        suffix="PM";
    }

    return suffix;
}
    


