function sendEmail() {
    let subject = document.getElementById("subject").value
    let message = document.getElementById("mess")

    // definisikan email penerima
    let emailReceiver = "adhirinaldy17@gmail.com"

    // untuk membuat elemen/tag html yang baru (nathod)
    let a = document.createElement("a")

// format pengiriman email
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}` ;
    a.target = "_blank";
    a.click();
}