
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("completeBtn");
    
    btn.addEventListener("click", function() {
        alert("Task completed! Notification sent.");
        
    
        const notificationDiv = document.getElementById("notification");
        notificationDiv.textContent = "✅ Task completed!";
    });
});
