/* 
- เรากำลังพัฒนาระบบแจ้งเตือน (Notification System) อยู่ ระบบแจ้งเตือนของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. แจ้งเตือนกรณีสร้างโพสสำเร็จ
    2. แจ้งเตือนกรณีมีคนมากดไลค์
    3. แจ้งเตือนกรณีมีคนมาคอมเมนต์
    4. แจ้งเตือนกรณีมีคนแชร์โพส
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here

/* 
ในโจทย์นี้มี callback function อยู่กี่อัน -> 4 อัน คือ postCreated, postLiked, postCommented, postShared
ในโจทย์นี้มี high order function อยู่ 1 อัน คือ sendNotification
*/

// create callback function (postCreated)
let postCreated = function() {
    return "📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!";
};

// create callback function (postLiked)
let postLiked = function() {
    return "👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!";
};

let postCommented = function() {
    return "💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!";
};

let postShared = function() {
    return "🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!"
};

// create High Order Function
let sendNotification = function(callback) {
    return callback();
};


// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(sendNotification(postCreated));   // 📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!
console.log(sendNotification(postLiked));     // 👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!
console.log(sendNotification(postCommented)); // 💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!
console.log(sendNotification(postShared));    // 🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!