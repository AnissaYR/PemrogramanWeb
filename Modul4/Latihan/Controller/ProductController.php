<?php
 namespace Controller;

 include "Traits/ResponseFormatter.php";
 include "Controller/Controller.php";

 use Traits\ResponseFormatter;

 // DISIMULASIKAN INI ADALAH CLASS CONTROLLER PRODUCT

 class ProductController extends Controller {
    // gunakan trait yang sudah dibuat
    use ResponseFormatter;

    // MAGIN METHOD, Method ini akan diakses pada saat pembuatan project.
    public function __construct() {
        // SET ATRIBUT controllerName PADA PARENT CLASS CONTROLLER
        $this->controllerName = "Get All Product";
        // SET ATRIBUT controllerMethod PADA PARENT CLASS CONTROLLER
        $this->controllerMethod="GET";
    }

    //DISUMALSIKAN INI METHOD UNTUK GET DATA PRODUCT 
    public function getAllProduct() {
        //ARRAY DUMMY DATA
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this ->getControllerAttribute(),
            "product" => $dummyData
        ];

        // gunakan method dari traityang sudah dibuat
        return $this->responseFormatter(200, "Success", $response);
    }
}
?>