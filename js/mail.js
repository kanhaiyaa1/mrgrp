function SendMail() {
        var parms = {
            full_name: document.getElementById("full_name").value,
            email_id: document.getElementById("email_id").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_ohplkxl", "template_ditisl9", parms)
            .then(function (response) {
                alert("Message Sent Successfully!");
                document.getElementById("contact-form").reset();
            }, function (error) {
                alert("Failed to send message. Please try again!");
                console.error(error);
            });
    }