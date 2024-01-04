<?php

    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="log_reg.css">
    <title>Bejelentkezés - FormulaType</title>
</head>
<body>
    <div class="container">
        <div class="box form-box">
            
            <?php

                include("adatbazis/adatbazis.php");
                if (isset($_POST['submit'])) {
                    $email = mysqli_real_escape_string($con, $_POST['email']);
                    $password = mysqli_real_escape_string($con, $_POST['password']);
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                    $eredmeny = mysqli_query($con, "SELECT * FROM felhasznalok WHERE email='$email'") or die("Error");
                    $sor = mysqli_fetch_assoc($eredmeny);

                    if (is_array($sor) && password_verify($password, $sor['password'])) {
                        $_SESSION['valid'] = $sor['email'];
                        $_SESSION['felhasznalonev'] = $sor['felhasznalonev'];
                        $_SESSION['id'] = $sor['id'];
                    } else {
                        echo "<div class='uzenet'><p>Hibás email vagy jelszó!</p></div> <br>";
                        echo "<a href='login.php'><button class='btn'>Vissza a bejelentkezéshez</button>";
                    }

                    if (isset($_SESSION['valid'])) {
                        header("Location: index.php");
                    }
                } else {
                
            ?>
            
            <header>Bejelentkezés</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" required>
                </div>

                <div class="field input">
                    <label for="password">Jelszó</label>
                    <input type="password" name="password" id="password" required>
                </div>

                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Bejelentkezés" required>
                </div>
                <div class="links">Még nem regisztráltál? <a href="register.php">Regisztrálj itt</a></div>
            </form>
        </div>

        <?php } ?>

    </div>
</body>
</html>