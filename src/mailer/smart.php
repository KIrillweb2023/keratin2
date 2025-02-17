<?php 

if(
	!empty($_POST['name']) && 
	!empty($_POST['surname']) && 
	!empty($_POST['number']) && 
	!empty($_POST['email']) && 
	!empty($_POST['city']) && 
	!empty($_POST['index']) &&
	!empty($_POST['address']) 

	) {
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$number = $_POST['number'];
	$email = $_POST['email'];
	$city = $_POST['city'];
	$index = $_POST['index'];
	$address = $_POST['address'];
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	// $mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'nikixodr4@mail.ru';                 // Наш логин
	$mail->Password = 'EQe57TEapJ71MHmdPnHi';                           // Наш пароль от ящика
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to
	
	$mail->setFrom('nikixodr4@mail.ru', 'Nikita Cevich Site:');   // От кого письмо
	$mail->addAddress('nikcevichoff@gmail.com');     // Add a recipient Кому письмо
	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Данные';
	$mail->Body    = '
			Данные пользователя<br> 
			Имя: ' . $name . ' <br>
			Фамилия: ' . $surname . '<br>
			Номер телефона: ' . $number . '<br>
			Почта: ' . $email . ' <br>
			Город/населённый пункт: ' . $city . '<br>
			Почтовый индекс: ' . $index . '<br>
			Адрес: ' . $address . '<br>';


	if(!$mail->send()) {
		return false;
	} else {
		return true;
	}
} else {
	echo "<p style='color: red'>Ошибка отправки заявки!</p>";
}
