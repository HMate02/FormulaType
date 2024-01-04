<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="log_reg.css">
    <title>Regisztráció - FormulaType</title>
</head>
<body>
    <div class="container">
        <div class="box form-box">
            
            <?php

                include("adatbazis/adatbazis.php");
                if (isset($_POST['submit'])) {
                    $nev = $_POST['felhasznalonev'];
                    $email = $_POST['email'];
                    $password = $_POST['password'];

                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                    $verify_query = mysqli_query($con, "SELECT email FROM felhasznalok WHERE email='$email'");

                    if (mysqli_num_rows($verify_query) != 0) {
                        echo "<div class='uzenet'><p>Ezzel az email címmel már regisztráltak! Próbálj egy másikat.</p></div> <br>";
                        echo "<a href='javascript:self.history.back()'><button class='btn'>Vissza a regisztrációhoz</button>";
                    } else {
                        mysqli_query($con, "INSERT INTO felhasznalok(felhasznalonev,email,password) VALUES('$nev', '$email', '$hashedPassword')") or die("Error");

                        echo "<div class='uzenet'><p>Sikeresen regisztráltál!</p></div> <br>";
                        echo "<a href='login.php'><button class='btn'>Bejelentkezés</button>";
                    }
                } else {

            ?>
            
            <header>Regisztráció</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="felhasznalonev">Felhasználónév</label>
                    <input type="text" name="felhasznalonev" id="felhasznalonev" required>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" required>
                </div>

                <div class="field input">
                    <label for="password">Jelszó</label>
                    <input type="password" name="password" id="password" required>
                    <span id="password-message" style="color: red;"></span>
                </div>

                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Regisztráció" required>
                </div>
                <div class="links">Már regisztráltál? <a href="login.php">Jelentkezz be</a></div>
            </form>
        </div>

        <?php } ?>
        
    </div>
</body>
</html>