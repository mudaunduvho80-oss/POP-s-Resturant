<?php

$message_sent = false;
$name = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $message_sent = true;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pop's Restaurant - Contact</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- CONTACT BACKGROUND -->
    <div class="contact-background">

        <a href="Home.html">
            <img src="images/Logo.jpeg" alt="Pop's Restaurant Logo" class="logo">
        </a>

        <!-- NAVIGATION -->
        <nav>
            <a href="Home.html">Home</a> |
            <a href="About Us.html">About Us</a> |
            <a href="Contact.php">Contact</a>
        </nav>

        <!-- CONTACT IMAGE -->
        <div class="contact-image">
            <img src="images/contact.jpg" alt="Contact Image">
        </div>

        <!-- CONTACT DETAILS -->
        <section id="contact">

            <h2>Contact Us</h2>

            <p>📍 Address: 26 Andries Potgieter</p>

            <p>📞 Phone: 0163142680</p>

            <p>📧 Email: info@popsrestaurant.co.za</p>

            <p>🕐 Opening Hours: Monday - Sunday, 08:00 - 22:00</p>

            <p>
                <a href="tel:0163142680">Call US</a>
            </p>

        </section>


        <!-- CONTACT FORM -->
        <section id="contact-form">

            <h2>Send Us a Message</h2>

            <?php

if ($message_sent) {

    echo "<p class='success-message'>✅ Message Sent Successfully!<br>
    Thank you, $name. We will get back to you soon.</p>";

}

?>

            <form action="Contact.php" method="POST">

                <label for="name">Name:</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                >


                <label for="email">Email:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >


                <label for="message">Message:</label>

                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                ></textarea>


                <button type="submit">Send Message</button>

            </form>

        </section>

    </div>


    <hr>


    <!-- FOOTER -->
    <footer>

        <p>
            &copy; 2026 Pop's Restaurant. T's &amp; C's apply All Rights Reserved.
        </p>

        <p>
            Good Food. Great Taste meet Great Memories.
        </p>

    </footer>

</body>

</html>