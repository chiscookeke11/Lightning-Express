const userTrackingId = document.getElementById("userTrackingId");
const userName = document.getElementById("username");
const userAddress = document.getElementById("useraddress");
const deliveryFee = document.getElementById("deliveryFee");
const userPhoneNumber = document.getElementById("userPhonenumber");
const sender = document.getElementById("sender");
const deliveryStatus = document.getElementById("deliveryStatus");
const deliveryId = document.getElementById("deliveryId")
const deliveryReport = document.getElementById("delivery-report");



deliveryId.addEventListener("input", function (){
    if (deliveryId.value.length < 1){
        deliveryReport.style.display = "none";
    }
    else{
        deliveryReport.style.display = "none"; 
    }
})

function showDeliveryDetails(){
    const deliveryDetail = document.getElementById("deliveryId").value;
    if(deliveryDetail === "07041971478"){
        deliveryReport.style.display = "block";
        userTrackingId.innerHTML = "07041971478";
        userName.innerHTML = "Okeke Chinedu Emmanuel";
        userAddress.innerHTML = "princess Lodge";
        deliveryFee.innerHTML = "$5000";
        userPhoneNumber.innerHTML = "09036531295";
        sender.innerHTML = "Carl Owen";
        deliveryStatus.innerHTML = "Out for Delivery";

    }
    else if(deliveryDetail === "222"){
        deliveryReport.style.display = "block";
        userTrackingId.innerHTML = "2227";
    }
    else{
        alert("User with TrackigID: " + deliveryDetail + " not found." );
        deliveryReport.style.display = "none";
    }
}

function getDetails(){
    const deliveryDetail = document.getElementById("deliveryId").value;
    if(deliveryDetail.length < 1){
        alert("Please input Tracking ID");
        deliveryReport.style.display = "none";
    }
    else{
        showDeliveryDetails();
    }
}

