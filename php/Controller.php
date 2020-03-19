<?php
    class Controller{
        private $obj;
        private $interpreter;
        private $flags = array(
            "param" => "p",
            "text" => "t"
        );

        public function __construct($data){
            $this->obj = $data;
        }

        public function Routing(){
            $path = "rust";
            $this->interpreter = $path;
            $path = EXEC_DIR.$path."/target/debug/./".$this->obj['cmd'];
            return $path;
        }

        public function Parameters($filename){
            $parameters = array(
		"text" => (string)$filename,
                "param" => (string)$this->obj['param']
            );
            return $parameters;
        }

        public function Command($filename){
            $path = self::Routing();
            $params = self::Parameters($filename);
            $cmd = $path;
            foreach($params as $key=>$val){
                if($val){
                    $cmd .= " ".$val;
                }
            }
            return $cmd;
        }
    }
?>

