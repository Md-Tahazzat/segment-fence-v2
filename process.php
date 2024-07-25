
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

                                  //Load PHPMailer required files
                                  $name = isset($_POST['numele']) ?  filter_var($_POST['numele'], FILTER_SANITIZE_STRING) : null;
                                  $phone = isset($_POST['number']) ?  filter_var($_POST['number'], FILTER_SANITIZE_STRING):null;
                                  $message = isset($_POST['message']) ?  filter_var($_POST['message'], FILTER_SANITIZE_STRING):null;
                                  // Create a new PHPMailer instance
                                      $mail = new PHPMailer(true);

                                      try {
                                          // Server settings
                                          $mail->isSMTP(); 
                                          $mail->Host = 'smtp.gmail.com'; 
                                          $mail->SMTPAuth = true; 
                                          $mail->Username = 'mdtahazzatali820@gmail.com'; 
                                          $mail->Password = 'yovzywqbiucqwupa'; 
                                          $mail->SMTPSecure = 'tls'; 
                                          $mail->Port = 587; 

                                          // Recipients
                                          $mail->setFrom("mdtahazzatali820@gmail.com", $name?$name:"unknown");
                                          // $mail->addAddress('md.rashidh@gmail.com', 'Mosharaf Hossain'); 
                                          $mail->addAddress('mdtahazzatali820@gmail.com', 'Tahazzat'); 

                                          // Content
                                          $mail->isHTML(true); 
                                          
                                          if($name && $phone){
                                              $mail->Subject = 'New message from Segment Fence contact form';
                                              $mail->Body    = "
                                              <html>
                                              <head>
                                              <title>New message from Segment Fence contact form</title>
                                              </head>
                                              <body>
                                              <p><strong>Name:</strong> $name</p>
                                              <p><strong>Phone:</strong><br>$phone</p>
                                              <p><strong>Message:</strong> $message</p>
                                              </body>
                                              </html>
                                          "; 
                                          }else{
                                            $mail->Subject = 'New message from Segment Fence News letter';
                                              $mail->Body    = "
                                              <html>
                                              <head>
                                              <title>New message from Segment Fence News letter</title>
                                              </head>
                                              <body>
                                              <p><strong>Phone:</strong> $phone</p>
                                              </body>
                                              </html>
                                          "; 
                                          }
                                        //Content
                                          $mail->send();




                                        // sending mail using mail function
                                      //   $msg;
                                      //   $to = "mdtahazzatali820@gmail.com";
                                      //   $headers = $email; 
                                      //   $subject;
                                      //   if($name && $phone){
                                      //     $msg ="Name: $name\n Email:$email \n Phone: $phone";
                                      //     $subject = "New message from Segment Fence contact form";
                                      //   }else{
                                      //     $msg  ="Email: $email";
                                      //     $subject = "New message from Segment Fence news letter";
                                      //   }
                                      // $result =  mail($to,$subject,$msg,$headers);

                                          echo "Email has been sent";
                                  } catch (Exception $e) {
                                      echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
                                  }
                                ?>