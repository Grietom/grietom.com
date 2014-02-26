<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim();

/*hello world*/
$app->post('/sendmail', function () use ($app){
    $data = json_decode($app->request()->getBody() );
    
    $from = $data->email; // sender
    $subject = 'You have been contacted via your website';
    $message = $data->message;
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    if( mail("admin@grietom.com",$subject,$message,"From: $from\n") ){

        $responsemessage = 'Your message has been sent!';
        $status = 200;
    }else{
        $status = 503;
        $responsemessage = 'An error occurred while attempting to send your message!';
    }

    returnResponse($status, $responsemessage);
});

$app->get('/sendmail', function () use ($app){
    echo "GET from sendmail";
});

function returnResponse($status_code, $data) {

    $app = \Slim\Slim::getInstance();
    // Http response code
    $response = $app->response();
    $response->write(json_encode($data));
    $app->status($status_code);
 
    // setting response content type to json
    $app->contentType('application/json');
 
    echo json_encode($response);
}

$app->run();
