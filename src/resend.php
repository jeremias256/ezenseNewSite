<?php
if (($_SERVER["REQUEST_METHOD"] == "POST")) {

    require __DIR__ . '/vendor/autoload.php';

    $resend = Resend::client('re_VkMRunb6_J2PsA15EF8HHvxafi5sPTaQM');

    $firstName       = $_POST['firstName'];
    $lastName        = $_POST['lastName'];
    $email      = $_POST['email'];
    $phone      = $_POST['phone'];
    $message      = $_POST['message'];

    try {
        $result = $resend->emails->send([
            'from' => 'ezense <php@resend.dev>',
            'to' => ['jere.menacho@gmail.com'],
            'subject' => 'Formulario ezense site ',
            'html' => "<h1>Formulario de contacto</h1><p>Nombre: $firstName</p><p>Apellido: $lastName</p><p>Email: $email</p><p>Telefono: $phone</p><p>Mensaje: $message</p>"
        ]);
    } catch (\Exception $e) {
        exit('Error: ' . $e->getMessage());
    }

    echo $result->toJson();
    header("Location: index7.html");
    die();
}